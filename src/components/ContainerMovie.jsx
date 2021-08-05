import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

const ContainerMovie = () => {
	const [searchMovie, setSearchMovie] = useState()
	const [movie, setMovie] = useState({
		imdb_id: '',
		title: '',
		overview: '',
		poster: ''
	})
	const handleSearchMovie = (e) => {
		e.preventDefault()
		const data = new FormData(e.target)
		setSearchMovie(data.get('search'))
	}
	useEffect(() => {
		const API_KEY = '4ff32b3a95fabacb861ecfa8aa1dfcba'
		const URL = `https://api.themoviedb.org/3/movie/${searchMovie}?api_key=${API_KEY}&language=es-MX`

		const handleData = (data) => setMovie(data)

		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				const { imdb_id, original_title, overview, poster_path } = data
				const poster = `https://image.tmdb.org/t/p/w200${poster_path}`
				handleData({ imdb_id, title: original_title, overview, poster })
			})
	}, [searchMovie])
	return (
		<div>
			<form onSubmit={handleSearchMovie}>
				<input type="text" name="search" placeholder="Type id imbd" />
				<button>Buscar</button>
			</form>
			<MovieCard {...movie} />
		</div>
	)
}

export default ContainerMovie
