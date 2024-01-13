SELECT COUNT (*) FROM actor;

INSERT INTO actor (first_name, last_name) 
	VALUES ('Chris','Pine');
	
SELECT * FROM actor
WHERE first_name='Chris';