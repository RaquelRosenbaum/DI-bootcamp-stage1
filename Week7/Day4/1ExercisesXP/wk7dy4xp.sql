--1
SELECT DISTINCT name from language;
SELECT language_id FROM film;  -- all 1000 films are in english
--2
SELECT film.title, film.description, film.language_id, language.name FROM film 
INNER JOIN language ON film.language_id = language.language_id;

--3
SELECT film.title, film.description, language.name 
FULL OUTER JOIN language ON film.language_id = language.language_id;
---couldn't make this one work, syntax error at OUTER
--4
CREATE TABLE customer_review (review_id PRIMARY NOT NULL, film_id ,
--5


