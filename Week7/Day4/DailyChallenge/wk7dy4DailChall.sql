CREATE TABLE customer (
	customer_id SERIAL PRIMARY KEY NOT NULL UNIQUE, 
	first_name VARCHAR(100), 
	last_name VARCHAR(100) NOT NULL);

CREATE TABLE customer_profile (
customer_prof_id SERIAL NOT NULL UNIQUE, 
customer_id INT,
isLoggedIn bool DEFAULT false,
PRIMARY KEY (customer_prof_id),
FOREIGN KEY (customer_id) REFERENCES customer(customer_id));		
	
INSERT INTO customer (first_name, last_name) 
VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

INSERT INTO customer (first_name, last_name) 
VALUES ('Lera', 'X'), ('Patrick', 'Y'), ('Bob', 'Z');

INSERT INTO customer_profile (customer_id, isLoggedIn)
SELECT customer_id, 
	CASE 
		WHEN customer_id IN (1,2) THEN TRUE 
		ELSE FALSE
	END
FROM customer;

SELECT * FROM customer;

SELECT * FROM customer
INNER JOIN customer_profile
ON customer.customer_id = customer_profile.customer_id;

--PART II:

--1
CREATE TABLE book (book_id SERIAL PRIMARY KEY, title VARCHAR(500) NOT NULL, author VARCHAR(100) NOT NULL);

--2
INSERT INTO book (title, author) VALUES ('Alice In Wonderland','Lewis Carroll'),('Harry Potter','J.K Rowling'), ('To Kill a Mockingbird','Harper Lee');

--3
CREATE TABLE student (student_id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL UNIQUE, age INTEGER);

--4
INSERT INTO student (name, age) VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14);

--5
CREATE TABLE library (  
	student_fk_id INT,
	book_fk_id INT, 
	borrowed_date DATE, 
FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (student_fk_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
PRIMARY KEY (book_fk_id, student_fk_id));  

--6
INSERT INTO library (
	student_fk_id,
	book_fk_id, 
	borrowed_date) 
VALUES 
	(
	(SELECT student_id 
	  FROM student 
	  WHERE name = 'John'),
	(SELECT book_id 
	  FROM book 
	  WHERE title = 'Alice In Wonderland'),
	'2022/02/15'
	);

INSERT INTO library (
	student_fk_id,
	book_fk_id, 
	borrowed_date) 
VALUES(
	(SELECT student_id 
	  FROM student 
	  WHERE name = 'Bob'),
	(SELECT book_id 
	  FROM book 
	  WHERE title = 'To Kill a Mockingbird'),
	'2021/03/03'
	);

INSERT INTO library (
	student_fk_id,
	book_fk_id, 
	borrowed_date) 
VALUES(
	(SELECT student_id 
	  FROM student 
	  WHERE name = 'Lera'),
	(SELECT book_id 
	  FROM book 
	  WHERE title = 'Alice In Wonderland'),
	'2021/05/23'
	);

INSERT INTO library (
	student_fk_id,
	book_fk_id, 
	borrowed_date) 
VALUES(
	(SELECT student_id 
	  FROM student 
	  WHERE name = 'Bob'),
	(SELECT book_id 
	  FROM book 
	  WHERE title = 'Harry Potter'),
	'2021/08/12'
	);
	
--7-a									
SELECT * FROM library;
--7-b
SELECT student.name, book.title
FROM library
JOIN book ON library.book_fk_id = book.book_id
JOIN student ON library.student_fk_id = student.student_id;
--the book and student tables are both getting joined back to the library table 
--but only through the fk fields.  This is easier than doing complicated joins that would otherwise 
--be necessary and is the point of making a junction table
	
--7-c
SELECT AVG(student.age) 
FROM library
JOIN book ON library.book_fk_id = book.book_id
JOIN student ON library.student_fk_id = student.student_id; 
--so now with the same two JOIN statements, we just tailor 
--the SELECT statement to our search needs without having to do a 
--fancy join each time according to the tables we are pulling from.  
--This takes much, much less time.

--7-d
DELETE FROM student 
WHERE name = 'Patrick' AND age = '10';
--nothing happens in the library table because Patrick never borrowed a book 
--and so didn't have an entry in the library table (borrowed_date).

