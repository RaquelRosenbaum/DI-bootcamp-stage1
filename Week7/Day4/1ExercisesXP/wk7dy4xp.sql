--1
SELECT DISTINCT name from language;
SELECT language_id FROM film;  -- all 1000 films are in english
--2
SELECT film.title, film.description, film.language_id, language.name FROM film 
INNER JOIN language ON film.language_id = language.language_id;

--3
SELECT film.title, film.description, language.name 
FROM film 
RIGHT JOIN language 
ON film.language_id = language.language_id;

--4
CREATE TABLE new_film(
	id SERIAL PRIMARY KEY NOT NULL, 
	name VARCHAR(255) UNIQUE);
INSERT INTO new_film (name)
VALUES ('Cadswall'),('The Epic Journey of Fjord'),('The Day the Horse Went for a Walk');

--5
CREATE TABLE customer_review( 
		review_id SERIAL,
		film_id INTEGER NOT NULL,
		language_id INTEGER,
	   	title VARCHAR(1000),
		score SMALLINT NOT NULL CHECK(score > 0 and score <=10),
		review_text VARCHAR(1000),
		last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		PRIMARY KEY (review_id), 
		FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
		FOREIGN KEY (language_id) REFERENCES language(language_id));

SELECT * FROM new_film;
SELECT * FROM language;
SELECT * FROM customer_review;
--6
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 1, 'Cadswall', 9, 'Great Film'), (2, 1, 'The Epic Journey of Fjord', 7, 'Okay Film');

--7
DELETE FROM new_film
WHERE id = 1;
---the following error message is received:
--ERROR:  Key (id)=(1) is still referenced from table "customer_review".update or delete on table "new_film" violates foreign key constraint "customer_review_film_id_fkey" on table "customer_review" 

--ERROR:  update or delete on table "new_film" violates foreign key constraint "customer_review_film_id_fkey" on table "customer_review"
--SQL state: 23503
--Detail: Key (id)=(1) is still referenced from table "customer_review".

---EXERCISE 2:
--1
SELECT * FROM customer;
SELECT * FROM film;
SELECT * FROM language;

UPDATE film
SET language_id = 3
WHERE title = 'Airport Pollock';

UPDATE film
SET language_id = 5
WHERE title = 'Donnie Alley';

UPDATE film
SET language_id = 4
WHERE title = 'Sky Miracle';

--2
--store_id and address_id are foreign keys in the customer table
--if we insert into the customer table, the new entry into the customer table must include a valid, already-existing store_id and address_id in the store and address tables.

--3
DELETE FROM customer_review;
DROP TABLE customer_review;
--it requires dropping the foreign keys or the entire table of new_film. 

--4
SELECT * FROM inventory;
SELECT * FROM rental;
SELECT COUNT (*) FROM rental
WHERE return_date IS NULL;
--remember that * inside parens won't cost a lot of processing time like * alone
--there are 183 rentals outstanding - haven't been returned yet

--5
SELECT film.title, film.rental_rate, rental.return_date
FROM (inventory JOIN rental 
	ON inventory.inventory_id = rental.inventory_id 
JOIN film 
	ON inventory.film_id = film.film_id)
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;
--HOT DIGGITY DOG!!! I DID IT!!  :-) 
--The formulas from Octopus on joining 3 or more tables:
--FROM Employee JOIN Salary JOIN Department 
--  WHERE Employee.ID = Salary.Emp_ID AND Employee.Dep_ID = Department.ID;
--OR:
--SELECT Employee.ID, Employee.Name, Salary.Salary, Department.Name 
--  FROM (Employee JOIN Salary ON Employee.ID = Salary.Emp_ID) 
--  JOIN Department ON Employee.Dep_ID = Department.ID;

--6-1

