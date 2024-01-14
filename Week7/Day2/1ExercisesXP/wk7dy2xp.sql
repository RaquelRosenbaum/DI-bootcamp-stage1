--1
SELECT * FROM customer;

--2
SELECT first_name, last_name AS full_name 
FROM customer;

--3
SELECT DISTINCT create_date 
FROM customer;  --only one create_date exists for all records -2006-02-14 

--4
SELECT * FROM customer 
ORDER BY first_name DESC;

--5
SELECT film_ID, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

--6
SELECT address, address2, city_id, district, postal_code, phone
FROM address
WHERE district = 'Texas';

--7
SELECT * FROM film
WHERE film_id=15 OR film_id=150;

--8
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title ILIKE 'Dawn Pond';

--9
SELECT film_id, title, description, length, rental_rate FROM film
WHERE title ILIKE 'Da%';

--10
SELECT film_id, title, description, length, rental_rate FROM film
ORDER BY rental_rate
LIMIT 10;

--11
SELECT film_id, title, description, length, rental_rate FROM film
WHERE rental_rate < 1.00
LIMIT 20;

--12
SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM payment 
INNER JOIN customer
ON payment.customer_id = customer.customer_id
ORDER BY customer.customer_id;   --asc is default therefore don't need to put

--13
SELECT * FROM inventory
WHERE ;  ---hmmm this one has me stumped.  There is no quantity field or field to show a status of "checked out" or something like that.  Need to think about this one and ask.

--14
SELECT city.city, country.country, country.country_id FROM city
INNER JOIN country
ON city.country_id = country.country_id;

--15
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM payment
INNER JOIN customer
ON customer.customer_id = payment.customer_id;
INNER JOIN staff
ON payment.staff_id = staff.staff_id;