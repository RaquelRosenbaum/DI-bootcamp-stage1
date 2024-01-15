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
	name UNIQUE VARCHAR(255));
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
		FOREIGN KEY (film_id) REFERENCES new_film(id),
		FOREIGN KEY (language_id) REFERENCES language(language_id));
SELECT * FROM customer_review;
ALTER TABLE ADD CONSTRAINT 
--6
