//use ecommerce database
const db = db.getSiblingDB("ecommerce");

//insert sales collection with sample data of fruits vegetables and their sales
db.sales.insertMany([
    { item: "Apple", category: "Fruit", quantity: 50, price: 2.0, date: new Date("2024-01-10") },
    { item: "Banana", category: "Fruit", quantity: 30, price: 1.5, date: new Date("2024-01-12") },
    { item: "Carrot", category: "Vegetable", quantity: 20, price: 1.0, date: new Date("2024-01-15") },
    { item: "Broccoli", category: "Vegetable", quantity: 15, price: 2.5, date: new Date("2024-01-18") },
    { item: "Orange", category: "Fruit", quantity: 40, price: 2.2, date: new Date("2024-01-20") },
    { item: "Spinach", category: "Vegetable", quantity: 25, price: 1.8, date: new Date("2024-01-22") }
]);


// match and project stage
db.sales.aggregate([
    { $match: { category: "Fruit" } },
    { $project: {_id:0, item:1, category:1}}
]);

//grouping stage to calculate total sales per category
db.sales.aggregate([
    {
        $group: {
            _id: "$category",
            totalSales: { $sum: { $multiply: ["$quantity", "$price"] } }
        }
    }
]);

