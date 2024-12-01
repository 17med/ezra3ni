const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
class CommandController {
  static async placeOrder(req, res) {
    try {
      const { userId } = req.params;

      const cart = await prisma.cart.findFirst({
        where: { userId: parseInt(userId) },
        include: { items: true },
      });

      if (!cart || cart.items.length === 0) {
        return res.status(404).json({ message: "Cart is empty or not found" });
      }

      const command = await prisma.command.create({
        data: {
          userId: cart.userId,
          items: {
            create: cart.items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
            })),
          },
        },
      });

      // Clear the cart by deleting all CartItems
      await prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
      });

      res.json({
        message: "Order placed successfully",
        orderId: command.id,
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error placing order" });
    }
  }
  static async getOrdersForSeller(req, res) {
    try {
      const { sellerId } = req.params; // Seller's user ID
  
      // Fetch commands where the seller's products are part of the order
      const orders = await prisma.command.findMany({
        where: {
          items: {
            some: {
              product: {
                ownerId: parseInt(sellerId),
              },
            },
          },
        },
        include: {
          items: {
            include: {
              product: true, // Include product details
            },
          },
          user: true, // Include buyer details
        },
      });
  
      if (orders.length === 0) {
        return res.status(404).json({ message: "No orders found for your products" });
      }
  
      res.json(orders);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error fetching orders" });
    }
  }
  
}
module.exports = CommandController;
