import React from 'react'
import axios from 'axios';
import { apiKey } from '../Constants';
import { useLoaderData } from 'react-router-dom';


export async function loader({params}) {
  const imdbId = params.imdbId;
  const URL = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}&plot=full`;
  
  try {
    const response = await axios.get(URL);
    return {movie: response.data, isError: false, error: ""}
  } catch (error) {
    const errorMessage = error?.response?.data?.Error || error.message || 'Something went wrong ...';
    return {movie: null, isError: true, error: errorMessage}
  }
}


function SingleMovieDetails() {

  const {movie: movieDetail, isError, error} = useLoaderData();

  if (movieDetail && movieDetail.Response === 'False') {
    return <h1>{movieDetail.Error}</h1>               // ye jb imdbId glt hue then
  }

  if (isError) { 
    return <h1>{error}</h1>    // agr apiKey glt hue then ye
  }
  return (
    <div>{movieDetail.Title}</div>
  )
}

export default SingleMovieDetails