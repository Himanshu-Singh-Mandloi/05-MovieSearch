import React from 'react'
import MovieCard from '../pages/MovieCard';

function MovieList({data}) {

  const {movieApiResponse, error, isError} = data;

  if (isError) {
    return <h1>{error}</h1>
  }

  if (movieApiResponse && movieApiResponse.Response === 'False') {
    return <h1> {movieApiResponse.Error || "No Result Found"} </h1>
  }

  return (
    <div>
      {movieApiResponse.Search.map((movie) => <MovieCard key={movie.imdbID} {...movie}/>)}
    </div>
  )
}

export default MovieList