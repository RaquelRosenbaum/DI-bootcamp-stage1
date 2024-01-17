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
SELECT film.description, actor.first_name, actor.last_name FROM actor
JOIN film_actor ON actor.actor_id = film_actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE film.description ILIKE '%sumo%' AND actor.last_name = 'Monroe' AND actor.first_name = 'Penelope';

--6-2
SELECT film.title, category.name, film.length, film.rating, film.description FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.length < 60 AND rating = 'R' AND category.name = 'Documentary';

--6-3
SELECT customer.first_name, customer.last_name, rental.return_date, inventory.store_id, film.title, film.rental_rate 
FROM (film JOIN inventory ON film.film_id = inventory.film_id) -- Each inventory item is a copy of a film therefore 
--this join goes from the table with the double cross meaning one and only one, to film.
JOIN rental ON inventory.inventory_id = rental.inventory_id  --Each rental record pertains to a specific inventory item, 
--therefore this join goes from the table with the double cross meaning one and only one, inventory, to rental.
JOIN customer ON rental.customer_id = customer.customer_id  --Each rental is made by a specific customer, therefore this 
--join goes from the table with the double cross meaning one and only one, customer, to rental.
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND rental_rate > 4 AND return_date BETWEEN '2005-07-28' AND '2005-08-1';
--I think I'm getting the hang of this!  On the chart, the table after the word JOIN has to be a table with the 
--double cross symbol that means one and only one. So on the last join on this one, it wasn't JOIN rental on customer, 
--it was JOIN customer on rental.  Inventory was joined to rental and then customer was joined to rental, according to the 
--direction of the one and only one relationship on the ERD entity relationship diagram.

--6-4
SELECT customer.first_name, customer.last_name, film.title, 
film.rental_rate, film.description
FROM (film JOIN inventory ON film.film_id = inventory.film_id) 
JOIN rental ON inventory.inventory_id = rental.inventory_id  
JOIN customer ON rental.customer_id = customer.customer_id 
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan' AND (title ILIKE '%boat%' OR description ILIKE '%boat%')
ORDER BY film.rental_rate DESC;
--watch those parentheses when you need both AND and OR
--if there are no pattern matches needed, the formate WHERE (field1, field2, field3) = (value1, value2, value3) is also good