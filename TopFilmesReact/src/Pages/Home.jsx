import { useState, useEffect } from 'react'
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
import React from 'react'
import './MovieGrid.css'
import MovieCard from '../Components/MovieCard';


const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    const getTopRatedMovies = async (url) => {
        const resultado = await fetch(url)
        const filmes = await resultado.json();
        setTopMovies(filmes.results)
        
    }
    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`//link de melhores filmes por api
        getTopRatedMovies(topRatedUrl) //fazendo o chamado a api

    }, [])
    return (
        <div className='container'>
            <h2 className='title'> Melhores Filmes com base em Analises</h2>
            <div className="movies-container">
                {topMovies.length ==0 && <p>Carregando...</p>}
            {topMovies && topMovies.map((movie) =>{
                
                return <MovieCard movie={movie} key = {movie.id}></MovieCard>
            })}
            </div>
        </div>

    )
}

export default Home