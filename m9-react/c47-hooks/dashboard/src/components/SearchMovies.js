import React, { Fragment, useState, useEffect } from 'react';

import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){
	/**
	 * 1. useState([]) con un array vacio - recibimos peliculas 
	 * 2. Petición Asincrónica al montarse el componente - useEffect(() => {fetch},[peliculas])
	 * 3. completar la funcion para buscar
	 * 
	 */

	const [movies, setMovies] = useState([]);
	const [keyword, setKeyword] = useState("Harry");
	
	const apiKey = '6c9bcbd4'; // Intenta poner cualquier cosa antes para probar

	useEffect(() => {
		fetch(`https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
			.then(res => res.json())
			.then(result => {
				setMovies(result.Search);
			})
	},[keyword])

	const handleSubmit = (e) => {
		// Prevenimos el evento por defecto con e.preventDefault
		e.preventDefault();
		if (e.target.buscador.value !== "") {
			setKeyword(e.target.buscador.value);
			e.target.buscador.value = "";
		}
		// consultamos si el input tiene algun valor con el if
		// const endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}` hacer un fetch
		// setState de la keyword
		// e.target.buscador.value = '';
	}

	

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<Fragment>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" name="buscador" />
								</div>
								<button className="btn btn-info">Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster || noPoster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</Fragment>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
