## Joins
    - Traer todos las peliculas con sus generos
        `
        SELECT * FROM movies, genres WHERE movies.genre_id = genres.id;
        SELECT * FROM movies INNER JOIN genres ON movies.genre_id = genres.id;
        `
    - Traer todos las peliculas aunque no tengan genero y si tienen con sus generos
        `SELECT * FROM movies LEFT JOIN genres ON movies.genre_id = genres.id;`

## Distincts
    `SELECT DISTINCT(titulo) FROM empleados;`
    SELECT 
	    DISTINCT(CONCAT(first_name, ' ', last_name)) AS 'Nombre completo'
    FROM 
	actors INNER JOIN actor_movie 
		ON actors.id = actor_movie.actor_id 
	INNER JOIN movies 
        ON actor_movie.movie_id = movies.id
    WHERE title LIKE 'La Guerra de las galaxias%'
    ORDER BY 1;
    `
## Funciones de agregación
    `- MAX, MIN, AVG, SUM, COUNT
        SELECT MAX(total), pais_de_facturacion FROM facturas;
        SELECT MIN(total), pais_de_facturacion FROM facturas;
    - Promedio de facturas
        SELECT AVG(total) FROM facturas;
    - Suma total de facturas
        SELECT SUM(total) FROM facturas;
    - Total de artistas
        SELECT COUNT(id) AS 'Total de artistas' FROM artistas;
    `
## Group by
    ` SELECT SUM(total) AS 'Total', pais_de_facturacion AS 'Pais' FROM facturas GROUP BY Pais HAVING Total = 37.62;`
## Having
    `SELECT SUM(total) AS 'Total', pais_de_facturacion AS 'Pais' FROM facturas WHERE facturas.total > 2 GROUP BY Pais HAVING  SUM(total) > 100;`
