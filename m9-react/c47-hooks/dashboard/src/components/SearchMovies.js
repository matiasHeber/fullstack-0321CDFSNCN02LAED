import React from 'react';

import noPoster from '../assets/images/no-poster.jpg';

function SearchMovies(){
	// Petición Asincrónica al montarse el componente
	//const endpoint = `https://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;
	return(
		<div className="container-fluid">
			<div className="row my-4">
				<div className="col-12 col-md-6">
					{/* Buscador */}
					<form method="GET">
						<div className="form-group">
							<label htmlFor="">Buscar por título:</label>
							<input type="text" className="form-control" />
						</div>
						<button className="btn btn-info">Search</button>
					</form>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<h2>Películas para la palabra: "keyword"</h2>
				</div>
				{/* Listado de películas */}
				<div className="col-sm-6 col-md-3 my-4">
					<div className="card shadow mb-4">
						<div className="card-header py-3">
							<h5 className="m-0 font-weight-bold text-gray-800">{/*movie.Title*/}</h5>
						</div>
						<div className="card-body">
							<div className="text-center">
								<img 
									className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
									src='url'
									alt='title'
									style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
								/>
							</div>
							<p>Año</p>
						</div>
					</div>
				</div>

			</div>
			{/* { movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>} */}
		</div>
	)
}

export default SearchMovies;
