import React, { Fragment } from 'react'
import '../assets/styles/MovieCard.scss'

const MovieCard = (props) => {
	const { title, poster, overview, imdb_id } = props
	return (
		<div className="movie-card">
			{title ? (
				<Fragment>
					<h2>{title}</h2>
					<img src={poster} alt={imdb_id} />
					<p>{overview}</p>
				</Fragment>
			) : (
				<p>No hay pelicula.</p>
			)}
		</div>
	)
}

export default MovieCard
