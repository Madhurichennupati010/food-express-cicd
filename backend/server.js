const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "mysql",        // use "localhost" if MySQL is installed locally (not Docker)
    user: "root",
    password: "password", // change to your MySQL password
    database: "fooddb"
});

db.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
        return;
    }

    console.log("Connected to MySQL");
});

app.get("/api/menu", (req, res) => {

    res.json([
        {
            id:1,
            name:"Pizza",
            price:250
        },
        {
            id:2,
            name:"Burger",
            price:150
        },
        {
            id:3,
            name:"Biryani",
            price:300
        }
    ]);

});

app.post("/order",(req,res)=>{

    const {food,price}=req.body;

    const sql="INSERT INTO orders(food,price) VALUES (?,?)";

    db.query(sql,[food,price],(err,result)=>{

        if(err){

            console.log(err);

            return res.status(500).json({
                success:false,
                message:"Database Error"
            });

        }

        res.json({
            success:true,
            message:"Order Stored Successfully"
        });

    });

});

app.get("/health",(req,res)=>{

    res.send("Food Express Running");

});

app.listen(PORT,"0.0.0.0",()=>{

    console.log(`Server running on ${PORT}`);

});