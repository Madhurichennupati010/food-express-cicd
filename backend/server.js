const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;


// Middleware
app.use(express.json());


// Serve Food Express frontend
app.use(express.static(path.join(__dirname, "public")));


// API Route
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


// Health check endpoint
app.get("/health", (req,res)=>{

    res.status(200).send("Food Express Application Running");

});


// IMPORTANT FOR DOCKER
// Listen on 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {

    console.log(`Food Express running on port ${PORT}`);

});