const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProductController {
  static async createProduct(req, res) {
    try {
      const { name, price, description, image, ownerId } = req.body;
      const product = await prisma.Products.create({
        data: {
          name,
          price,
          description,
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
}

module.exports = ProductController;
