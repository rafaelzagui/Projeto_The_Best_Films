import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../Components/MovieCard'
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY
import "./MovieGrid.css"
const Search = () => {
const [searchParams] = useSearchParams()
const [movies,setMovies]= useState([])
const query = searchParams.get("q")
const getSearchFilterMovie = async (url) => {
    const resultado = await fetch(url)
    const filmes = await resultado.json();
    setMovies(filmes.results)
    
}
useEffect(() => {
    const querySearch = `${searchURL}?${apiKey}&query=${query}`//link de melhores filmes por api
    getSearchFilterMovie(querySearch) //fazendo o chamado a api

}, [query])
console.log(movies)
  return (
    <div className='container'>
    <h2 className='title'>Resultados para: <span className='query-text'>{query}</span></h2>
    <div className="movies-container">
      
    {movies.length>0 && movies.map((movie) =>{
        
        return <MovieCard movie={movie} key = {movie.id}></MovieCard>
    })}
    </div>
</div>
  )
}

export default Search