const db = db.getSiblingDB("ecommerce");

// Update a single product's price
// db.products.updateOne(
//   { name: "Wireless Mouse" },
//   { $set: { price: 1500 } }
// );

// // Update multiple products to increase stock by 10 where category is Electronics
// db.products.updateMany(
//   { category: "Electronics" },
//   { $inc: { stock: 10 } }
// );

//add tag to all products in a category
// db.products.updateMany(
//   { category: "Electronics" },
//   { $push: { tags: "On Sale" } }
// );

//push new tag to electronics 
db.products.updateMany(
    { category: "Electronics" },
    {$push: {tags: {$each: ["Featured", "Bestseller"]}}}
);