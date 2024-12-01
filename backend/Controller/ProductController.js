const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProductController {
  static async createProduct(req, res) {
    try {
      const { name, price, image, ownerId } = req.body;
      const product = await prisma.Products.create({
        data: {
          name,
          price,

          image,
          ownerId,
        },
      });
      res.json(product);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error creating product" });
    }
  }

  static async getAllProducts(req, res) {
    try {
      const products = await prisma.Products.findMany();
      res.json(products);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error fetching products" });
    }
  }

  static async getProductById(req, res) {
    try {
      const { id } = req.params;
      const product = await prisma.Products.findUnique({
        where: { id: parseInt(id) },
      });
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error fetching product" });
    }
  }
  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await prisma.Products.delete({
        where: { id: parseInt(id) },
      });
      res.json(product);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error deleting product" });
    }
  }
  static async getProductsByOwner(req, res) {
    try {
      const { ownerId } = req.params;

      const products = await prisma.Products.findMany({
        where: { ownerId: parseInt(ownerId) },
      });

      res.json(products);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Error fetching products" });
    }
  }
}

module.exports = ProductController;
