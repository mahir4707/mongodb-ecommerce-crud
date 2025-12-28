const db = db.getSiblingDB("ecommerce");

// Read all products from products collection
db.products.find();

db.products.find({"name": "Wireless Mouse"});

//Comparison Operators
db.products.find({price: {$gt: 1000}}); // greater than
db.products.find({price: {$lt: 1000}}); // less than

//both conditions
db.products.find({price: {$gt: 1000, $lt: 3000}});

//logical operators
db.products.find({$and: [{category: "Electronics"}, {price: {$lt: 2000}}]});

//select specific fields
db.products.find({}, {name: 1, price: 1, _id: 0});

// sorting and paginaiton
db.products.find().sort({price: -1}).skip(3).limit(3);