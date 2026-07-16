require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend (if public folder exists inside backend)
app.use(express.static(path.join(__dirname, "public")));

// =============================
// MySQL Connection
// =============================
const db = mysql.createConnection({
    host: process.env.DB_HOST || "mysql",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "fooddb",
    port: process.env.DB_PORT || 3306
});

db.connect((err) => {
    if (err) {
        console.log("❌ MySQL Connection Failed");
        console.log(err);
        return;
    }

    console.log("✅ Connected to MySQL Database");
});

// =============================
// Health Check
// =============================
app.get("/health", (req, res) => {
    res.status(200).send("Food Express Backend Running");
});

// =============================
// Menu API
// =============================
app.get("/api/menu", (req, res) => {

    const menu = [
        {
            id: 1,
            name: "Pizza",
            price: 299,
            category: "Fast Food"
        },
        {
            id: 2,
            name: "Burger",
            price: 199,
            category: "Fast Food"
        },
        {
            id: 3,
            name: "Biryani",
            price: 249,
            category: "Indian"
        }
    ];

    res.json(menu);

});

// =============================
// Order API
// =============================
app.post("/order", (req, res) => {

    console.log("Order Received:", req.body);

    const { food, price } = req.body;

    const sql =
        "INSERT INTO orders(food, price) VALUES (?, ?)";

    db.query(sql, [food, price], (err, result) => {

        if (err) {
            console.log(err);

            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.json({
            success: true,
            message: "Order Placed Successfully",
            orderId: result.insertId
        });

    });

});

// =============================
// Default Route
// =============================
app.get("/", (req, res) => {

    res.send("🚀 Food Express Backend is Running");

});

// =============================
// Start Server
// =============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {

    console.log(`🚀 Food Express Server running on port ${PORT}`);

});
