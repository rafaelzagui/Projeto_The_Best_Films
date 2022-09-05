import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../Components/MovieCard'
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY
import "./MovieGrid.css"
const Search = () => {
const searchParams = useSearchParams()
  return (
    <div className='container'>
    <h2 className='title'>Resultados para: <span className='query-text'>{query}</span></h2>
    <div className="movies-container">
        {topMovies.length ==0 && <p>Carregando...</p>}
    {topMovies && topMovies.map((movie) =>{
        
        return <MovieCard movie={movie} key = {movie.id}></MovieCard>
    })}
    </div>
</div>
  )
}

export default Search