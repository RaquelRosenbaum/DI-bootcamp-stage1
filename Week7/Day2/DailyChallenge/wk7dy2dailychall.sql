CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL)
	--it's asking for all the entries in firstTab that are not in a list of ids from secondTab that are null. 
	--But it's a double negative.  If it had asked for a count of those that were in SELECT id FROM SecondTab WHERE id IS NULL the count would have been 1.
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
	--only one entry in SecondTab can have an id of 5, the ids in the firstTab that are not 5 number 3.  Null isn't counted, so they number 2.
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN (SELECT id FROM SecondTab)
	--SELECT id FROM SecondTab is 5 and null, the ids in firstTab that include either of these and can be counted is only one, id=5 in firstTab
	
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
	--second expression is 5, the ids in firstTab that are not in that set and can be counted are 2, ids 6 and 7
	