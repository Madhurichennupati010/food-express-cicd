const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",      // Since MySQL is installed on Windows and you're testing locally
    user: "root",
    password: "YOUR_MYSQL_PASSWORD",
    database: "fooddb",
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error("❌ MySQL Connection Failed");
        console.error(err);
        return;
    }

    console.log("✅ Connected to MySQL");
});

// Menu API
app.get("/api/menu", (req, res) => {

    const menu = [
        {
            id: 1,
            name: "Pizza",
            price: 250,
            category: "Fast Food"
        },
        {
            id: 2,
            name: "Burger",
            price: 150,
            category: "Fast Food"
        },
        {
            id: 3,
            name: "Biryani",
            price: 300,
            category: "Indian"
        }
    ];

    res.json(menu);

});

// Store Order API
app.post("/order", (req, res) => {

    const { food, price } = req.body;

    const sql = "INSERT INTO orders(food, price) VALUES (?, ?)";

    db.query(sql, [food, price], (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        res.json({
            success: true,
            message: "Order Stored Successfully"
        });

    });

});

// Health Check
app.get("/health", (req, res) => {
    res.status(200).send("Food Express Application Running");
});

// Start Server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Food Express Server running on port ${PORT}`);
});