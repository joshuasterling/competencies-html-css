--DB - Statements (alter table)
ALTER TABLE users
DROP user_password;

--DB - Patterns (many-many)
SELECT title, domestic_sales, international_sales
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id
WHERE international_sales > domestic_sales;

--DB - Statements (sub-queries)
SELECT *
FROM customers
WHERE state_id IN(
    SELECT state_id
    FROM states
    WHERE states.name = 'Utah');