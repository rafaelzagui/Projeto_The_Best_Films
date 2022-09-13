import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";

import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null)

  const getSingleMovie = async (url) => {
    const resultado = await fetch(url)
    const filmes = await resultado.json();
    setMovie(filmes)

  }
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`
    getSingleMovie(movieUrl)
}, [])
const priceFormated=(number) =>{
return number.toLocaleString("en-US",{
  style:"currency",
  currency: "USD"
})
}
  return (
    <div className='moviePage'>{movie &&<>
    <MovieCard movie = {movie} showLink={false}></MovieCard>
    <p className='tagline'>{movie.tagline}</p>
    <div className='info'>
      <h3> <BsWallet2></BsWallet2> Orçamento: <span>{priceFormated(movie.budget)}</span></h3>
    </div>
    <div className='info'>
      <h3><BsGraphUp></BsGraphUp>Receita: <span>{priceFormated(movie.revenue)}</span></h3>
    </div>
    <div className='info'>
      <h3><BsHourglassSplit></BsHourglassSplit>Duração: <span>{movie.runtime} minutos</span></h3>
    </div>
    <div className='info description'>
      <h3><BsFillFileEarmarkTextFill></BsFillFileEarmarkTextFill>Descrição  {movie.title}: <span>{movie.overview}</span></h3>
    </div>
    </>}</div>
  )
}

export default Movie