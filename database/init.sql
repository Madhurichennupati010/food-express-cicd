CREATE DATABASE fooddb;


USE fooddb;



CREATE TABLE orders(

id INT AUTO_INCREMENT PRIMARY KEY,

food VARCHAR(100),

price INT,

order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



INSERT INTO orders(food,price)

VALUES

('Pizza',299),

('Burger',199);
