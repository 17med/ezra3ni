const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CartController {
  static async addProductToCart(req, res) {
    try {
      const { userId, productId, quantity } = req.body;
      const cart = await prisma.Cart.findFirst({
        where: { userId },
      });

      if (!cart) {
        const newCart = await prisma.Cart.create({
          data: { userId },
        });
        await prisma.CartItem.create({
          data: {
            cartId: newCart.id,
            productId,
            quantity,
          },
        });
      } else {
        const cartItem = await prisma.CartItem.findFirst({
          where: { cartId: cart.id, productId },
        });

        if (cartItem) {
          await prisma.CartItem.update({
            where: { id: cartItem.id },
            data: { quantity: cartItem.quantity + quantity },
          });
        } else {
          await prisma.CartItem.create({
            data: {
              cartId: cart.id,
              productId,
              quantity,
            },
          });
        }
      }
      res.json({ message: "Product added to cart successfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error adding product to cart" });
    }
  }

  static async getCart(req, res) {
    try {
      const { userId } = req.params;
      const cart = await prisma.Cart.findFirst({
        where: { userId },
        include: { items: { include: { product: true } } },
      });
      res.json(cart);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error fetching cart" });
    }
  }
}

module.exports = CartController;
