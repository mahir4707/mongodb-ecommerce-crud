//use ecommerce database
const db = db.getSiblingDB("ecommerce");

//description: Create indexes to optimize query performance on sales collection

db.sales.find()

db.sales.getIndexes()

db.sales.createIndex({item: 1})