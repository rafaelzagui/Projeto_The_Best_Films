import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './Pages/Home'
import Movie from './Pages/Movie'
import Search from './Pages/Search'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route element = {<App />}>
      <Route path="/" element={<Home/>}></Route>
      <Route path = "/movie/:id" element = {<Movie />}></Route>
      <Route path = "/search" element = {<Search />}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
)
