CREATE TABLE customers 
	(id SERIAL PRIMARY KEY, 
	 cust_fname VARCHAR (50) NOT NULL, 
	 cust_lname VARCHAR (100) NOT NULL);
	 
CREATE TABLE items
	(id SERIAL PRIMARY KEY, 
 	prod_name VARCHAR (100) UNIQUE NOT NULL, 
 	price MONEY);
	
INSERT INTO items (prod_name, price) VALUES ('SmallDesk', 100);
INSERT INTO items (prod_name, price) VALUES ('LargeDesk', 300);
INSERT INTO items (prod_name, price) VALUES ('Fan', 80);
--just as there are many types of double quote marks, there are many types of single quote marks
--when copying and pasting from a notes app, the wrong type of quote marks can get included, best to replace quote marks

INSERT INTO customers (cust_fname, cust_lname) VALUES ('Greg', 'Jone');
INSERT INTO customers (cust_fname, cust_lname) VALUES ('Sandra', 'Jones');
INSERT INTO customers (cust_fname, cust_lname) VALUES ('Scott', 'Scott');
INSERT INTO customers (cust_fname, cust_lname) VALUES ('Trevor', 'Green');
INSERT INTO customers (cust_fname, cust_lname) VALUES ('Melanie', 'Johnson');

SELECT * FROM items, customers;

SELECT * FROM items 
WHERE price > 80::money;

SELECT * FROM items 
WHERE price <=  300::money;

SELECT * FROM customers 
WHERE cust_lname ILIKE 'Smith';
--Outcome will be NULL, empty set.  No items have the last name of Smith.

SELECT * FROM customers 
WHERE cust_lname ILIKE 'Jones';

SELECT * FROM customers 
WHERE NOT cust_fname = 'Scott';

SELECT * FROM customers 
WHERE cust_fname != 'Scott';


