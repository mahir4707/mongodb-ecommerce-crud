// use ecommerce database
const db = db.getSiblingDB("ecommerce");

// Delete a single product by name
db.products.deleteOne({ name: "Laptop Backpack" });

// Delete multiple products in a category
db.products.deleteMany({ category: "Accessories" });