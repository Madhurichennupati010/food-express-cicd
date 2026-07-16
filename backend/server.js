// Import required packages

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();


// Create Express application

const app = express();


// Middleware

app.use(cors());

app.use(express.json());


// MySQL Database Connection

const db = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME

});


// Connect Database

db.connect((err) => {

    if (err) {

        console.log("❌ MySQL Connection Failed");

        console.log(err);

    } 
    else {

        console.log("✅ MySQL Connected Successfully");

    }

});



// Test API

app.get("/", (req, res) => {

    res.send("🍕 Food Express Backend Running Successfully");

});




// Health Check API

app.get("/health", (req, res) => {

    res.json({

        status: "UP",

        message: "Food Express API is healthy"

    });

});




// Place Food Order API

app.post("/order", (req, res) => {


    const { food, price } = req.body;



    if (!food || !price) {

        return res.status(400).json({

            message: "Food name and price are required"

        });

    }



    const sql =

    "INSERT INTO orders(food,price) VALUES (?,?)";



    db.query(

        sql,

        [food, price],


        (err, result) => {


            if (err) {


                console.log(err);


                return res.status(500).json({

                    message: "Order failed"

                });


            }



            res.status(201).json({

                message: "✅ Order placed successfully",

                orderId: result.insertId,

                food: food,

                price: price

            });


        }

    );


});





// Get All Orders API

app.get("/orders", (req, res) => {



    const sql = "SELECT * FROM orders ORDER BY id DESC";



    db.query(sql, (err, result) => {



        if (err) {


            return res.status(500).json({

                message: "Unable to fetch orders"

            });


        }



        res.json(result);



    });



});






// Delete Order API (Optional)

app.delete("/order/:id", (req,res)=>{


    const id = req.params.id;


    const sql =

    "DELETE FROM orders WHERE id=?";



    db.query(sql,[id],(err,result)=>{


        if(err){

            return res.status(500).json({

                message:"Delete failed"

            });

        }



        res.json({

            message:"Order deleted successfully"

        });


    });


});






// Start Server


const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {


    console.log(
        `🚀 Food Express Backend running on port ${PORT}`
    );


});