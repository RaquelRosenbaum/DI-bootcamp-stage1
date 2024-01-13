CREATE TABLE students 
(id SERIAL PRIMARY KEY, 
 stud_fname VARCHAR (50) NOT NULL, 
 stud_lname VARCHAR (100) NOT NULL, 
 stud_DOB DATE NOT NULL);

--INSERT
--1-
INSERT INTO students (stud_fname, stud_lname, stud_DOB) VALUES ('Marc', 'Benichou', TO_DATE('02/11/1998','DD/MM/YYYY'));
INSERT INTO students (stud_fname, stud_lname, stud_DOB) VALUES ('Yoan', 'Cohen', TO_DATE('03/12/2010','DD/MM/YYYY'));
INSERT INTO students (stud_fname, stud_lname, stud_DOB) VALUES ('Leah', 'Benichou', TO_DATE('27/07/1987','DD/MM/YYYY'));
INSERT INTO students (stud_fname, stud_lname, stud_DOB) VALUES ('Amelia', 'Dux', TO_DATE('07/04/1996','DD/MM/YYYY'));
INSERT INTO students (stud_fname, stud_lname, stud_DOB) VALUES ('David', 'Grez', TO_DATE('14/06/2003','DD/MM/YYYY'));
INSERT INTO students (stud_fname, stud_lname, stud_DOB) VALUES ('Omer', 'Simpson', TO_DATE('03/10/1980','DD/MM/YYYY'));
--From video - use bulk insert

--2-
INSERT INTO students (stud_fname, stud_lname, stud_DOB) VALUES ('RaquelDinah', 'Rosenbaum', TO_DATE('27/04/1965','DD/MM/YYYY'));
--Outcome: the ID should be 7 but in this database with ids running from 4-9 it's 10

--SELECT
DELETE FROM students
	WHERE id=10;
--1-
SELECT * FROM students;
OR
SELECT stud_fname, stud_lname, stud_DOB FROM students;

--2-
SELECT stud_fname, stud_lname FROM students;

--3-1-
SELECT stud_fname, stud_lname FROM students 
WHERE id=5; --the 2nd student in the list, like 2 in the question, but the id auto-numbers and I had problems inserting, so ids go from 4-10

--3-2-
SELECT stud_fname, stud_lname FROM students 
WHERE stud_lname ILIKE 'Benichou' AND stud_fname ILIKE 'Marc';
--From video - I in the ILIKE is insensitive LIKE
--3-3-
SELECT stud_fname, stud_lname FROM students 
WHERE stud_lname ILIKE 'Benichou' OR stud_fname ILIKE 'Marc';

--3-4-
SELECT stud_fname, stud_lname FROM students 
WHERE stud_fname ILIKE '%a%';

--3-5-
SELECT stud_fname, stud_lname FROM students 
WHERE stud_fname ILIKE 'a%';

--3-6-
SELECT stud_fname, stud_lname FROM students 
WHERE stud_fname ILIKE '%a';

--3-7-
SELECT stud_fname, stud_lname FROM students 
WHERE (RIGHT(stud_fname, 2) LIKE 'a%'); --i.e. 2 spaces from the right of the entries in the stud_fname column, there's an 'a' plus some other characters after it
--WHERE LEFT(RIGHT(stud_fname, 2), 1) = 'a' OR LEFT(RIGHT(stud_lname, 2), 1) = 'a';

--3-8-
SELECT stud_fname, stud_lname FROM students 
WHERE id=4 AND id=6;--set goes from 4-10
Outcome: null, empty set

--4-
SELECT * FROM students 
WHERE stud_DOB>=TO_DATE('01/01/2000','DD/MM/YYYY');

