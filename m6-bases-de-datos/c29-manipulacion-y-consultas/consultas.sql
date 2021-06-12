	## -- INSERT -- ##
##INSERT INTO genres VALUES (DEFAULT, DEFAULT, NULL, 'Comedia', 17, 9);
##INSERT INTO genres (name, ranking, active) VALUES ('Ciencia Ficción',20, 8);

	## -- UPDATE-- ##
##UPDATE genres SET name = 'Tecnología' WHERE id = 19;

	## -- DELETE-- ##
##DELETE FROM genres WHERE id = 10;



## -- SELECT -- ##
##SELECT title as 'Titulo' FROM series;

## -- Where y order by ##

##SELECT CONCAT(first_name,' ', last_name) as 'Nombre completo', rating FROM actors WHERE rating > 7.5;
##SELECT title, rating FROM movies ORDER BY rating;

## -- LIMIT Y OFSET -- ##
##SELECT id, CONCAT(first_name,' ', last_name) as 'Nombre completo', rating FROM actors;
##SELECT id, CONCAT(first_name,' ', last_name) as 'Nombre completo', rating FROM actors LIMIT 10 OFFSET 20;


## -- BETWEEN Y LIKE -- ##
##SELECT * FROM movies WHERE title LIKE "%Harry%";




