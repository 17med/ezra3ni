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
      console.log(cart);
      if (cart == null) {
        return res.json([]);
      }
      res.json(cart);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error fetching cart" });
    }
  }

  static async deleteProductFromCart(req, res) {
    try {
      const { userId, productId } = req.params;

      const cart = await prisma.cart.findFirst({
        where: { userId: parseInt(userId) },
      });

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      const cartItem = await prisma.cartItem.findFirst({
        where: { cartId: cart.id, productId: parseInt(productId) },
      });

      if (!cartItem) {
        return res.status(404).json({ message: "Product not found in cart" });
      }

      await prisma.cartItem.delete({
        where: { id: cartItem.id },
      });

      res.json({ message: "Product removed from cart successfully" });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error removing product from cart" });
    }
  }
}

module.exports = CartController;
