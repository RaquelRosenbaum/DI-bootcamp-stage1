// Lecture Notes 
// CREATE TABLE SYNTAX
//  can create constraints to the table, like NOT NULL, to help in front end validation and back end validation
//  a PRIMARY KEY is also a constraint - uniquely identifies the row in the table
//      one prim key to each table not more, makes the queries faster
//  a FOREIGN KEY - insures that the value in the this column exists in the relation column with other tables
//      enables join - joined along the PRIMARY KEY FOREIGN KEY axis
//CREATE TABLE test4 (
//     user_id serial PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     password (1000) NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
// )
// CREATE TABLE products (
    // id serial PRIMARY KEY,
    // name VARCHAR(50) NOT NULL UNIQUE,
    //price integer NOT NULL
//)
//INSERT INTO products (price, name) 
    //VALUES(700, 'iPad'),
    // (800,'iPhone'),
    // (500,'iWatch'),
    // (1000,'iCar')
//SELECT * FROM products
        //remember this is a no-no in a big database - too much processing time for the time-consuming, extensive way it searches every column in the database when we call SELECT *
//SELECT price AS product_price FROM products
//