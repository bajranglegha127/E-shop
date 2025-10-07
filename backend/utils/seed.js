const dotenv = require("dotenv");
const connectDB = require("../config/db");
const User = require("../models/userModel");
const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

dotenv.config();

connectDB();

const seedData = async () => {
  try {
    await User.deleteMany();
    await Category.deleteMany();
    await Product.deleteMany();

    const admin = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
    });

    await User.create({
      name: "John Doe",
      email: "user@example.com",
      password: "user123",
      role: "user",
    });

    const electronics = await Category.create({
      name: "Electronics",
      description: "Electronic devices and gadgets",
    });

    const clothing = await Category.create({
      name: "Clothing",
      description: "Fashion and apparel",
    });

    const books = await Category.create({
      name: "Books",
      description: "Books and publications",
    });

    const products = [
      {
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 99.99,
        category: electronics._id,
        stock: 50,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        featured: true,
      },
      {
        name: "Smart Watch",
        description: "Fitness tracker and smartwatch with heart rate monitor",
        price: 199.99,
        category: electronics._id,
        stock: 30,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        featured: true,
      },
      {
        name: "Laptop Backpack",
        description: "Durable backpack with laptop compartment",
        price: 49.99,
        category: clothing._id,
        stock: 100,
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      },
      {
        name: "Cotton T-Shirt",
        description: "Comfortable 100% cotton t-shirt",
        price: 19.99,
        category: clothing._id,
        stock: 200,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      },
      {
        name: "JavaScript: The Good Parts",
        description: "Essential book for JavaScript developers",
        price: 29.99,
        category: books._id,
        stock: 75,
        image:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      },
      {
        name: "Bluetooth Speaker",
        description: "Portable waterproof Bluetooth speaker",
        price: 59.99,
        category: electronics._id,
        stock: 60,
        image:
          "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
        featured: true,
      },
      {
        name: "Running Shoes",
        description: "Lightweight running shoes for athletes",
        price: 89.99,
        category: clothing._id,
        stock: 40,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      },
      {
        name: "Wireless Mouse",
        description: "Ergonomic wireless mouse with USB receiver",
        price: 24.99,
        category: electronics._id,
        stock: 150,
        image:
          "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      },
      {
        name: "Clean Code",
        description: "A handbook of agile software craftsmanship",
        price: 34.99,
        category: books._id,
        stock: 80,
        image:
          "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400",
      },
      {
        name: "USB-C Cable",
        description: "Fast charging USB-C cable 6ft",
        price: 12.99,
        category: electronics._id,
        stock: 300,
        image:
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      },
    ];

    await Product.insertMany(products);

    console.log("Data seeded successfully!");
    console.log("Admin credentials: admin@example.com / admin123");
    console.log("User credentials: user@example.com / user123");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedData();
