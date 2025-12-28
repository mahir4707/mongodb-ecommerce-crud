// Switch to ecommerce database
const db = db.getSiblingDB("ecommerce");

// Insert multiple products into products collection
db.products.insertMany([
    {
        name: "Wireless Mouse",
        category: "Electronics",
        price: 799,
        stock: 50,
        brand: "Logitech",
        rating: 4.5,
        createdAt: new Date()
    },
    {
        name: "Bluetooth Headphones",
        category: "Electronics",
        price: 2499,
        stock: 30,
        brand: "Boat",
        rating: 4.2,
        createdAt: new Date()
    },
    {
        name: "Cotton T-Shirt",
        category: "Clothing",
        price: 499,
        stock: 100,
        brand: "H&M",
        rating: 4.0,
        createdAt: new Date()
    },
    {
        name: "Running Shoes",
        category: "Footwear",
        price: 3499,
        stock: 25,
        brand: "Nike",
        rating: 4.6,
        createdAt: new Date()
    },
    {
        name: "Laptop Backpack",
        category: "Accessories",
        price: 1299,
        stock: 40,
        brand: "American Tourister",
        rating: 4.3,
        createdAt: new Date()
    }
]);



db.orders.insertMany([
    {
        orderId: "ORD1001",
        userId: "USR001",
        items: [
            { productName: "Wireless Mouse", quantity: 2, price: 799 },
            { productName: "Laptop Backpack", quantity: 1, price: 1299 }
        ],
        totalAmount: 2897,
        paymentMethod: "UPI",
        paymentStatus: "Paid",
        orderStatus: "Delivered",
        deliveryAddress: {
            city: "Ahmedabad",
            state: "Gujarat",
            pincode: "380015"
        },
        orderedAt: new Date("2025-01-10"),
        deliveredAt: new Date("2025-01-13")
    },
    {
        orderId: "ORD1002",
        userId: "USR002",
        items: [
            { productName: "Running Shoes", quantity: 1, price: 3499 }
        ],
        totalAmount: 3499,
        paymentMethod: "Credit Card",
        paymentStatus: "Paid",
        orderStatus: "Shipped",
        deliveryAddress: {
            city: "Surat",
            state: "Gujarat",
            pincode: "395007"
        },
        orderedAt: new Date("2025-01-15")
    },
    {
        orderId: "ORD1003",
        userId: "USR003",
        items: [
            { productName: "Cotton T-Shirt", quantity: 3, price: 499 }
        ],
        totalAmount: 1497,
        paymentMethod: "Cash on Delivery",
        paymentStatus: "Pending",
        orderStatus: "Processing",
        deliveryAddress: {
            city: "Vadodara",
            state: "Gujarat",
            pincode: "390001"
        },
        orderedAt: new Date("2025-01-18")
    }
]);

db.contacts.insertMany([
    {
        name: "Rahul Patel",
        email: "rahul.patel@gmail.com",
        phone: "9876543210",
        subject: "Order not delivered",
        message: "My order ORD1002 is delayed. Please provide an update.",
        status: "Open",
        createdAt: new Date()
    },
    {
        name: "Neha Shah",
        email: "neha.shah@gmail.com",
        phone: "9123456780",
        subject: "Product quality issue",
        message: "Received damaged headphones. Need replacement.",
        status: "In Progress",
        createdAt: new Date()
    },
    {
        name: "Amit Verma",
        email: "amit.verma@gmail.com",
        phone: "9012345678",
        subject: "Refund request",
        message: "Please initiate refund for cancelled order ORD1001.",
        status: "Resolved",
        createdAt: new Date()
    }
]);
