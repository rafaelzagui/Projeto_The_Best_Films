import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import './navBar.css'
import { useEffect, useState } from 'react'
const navBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!search) return navigate(`search?q=${search}`)
        setSearch("");
    }
    return (
        <nav id="navBar">
            <h2>
                <Link to="/"> <BiCameraMovie />The Best Films </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Busque seu filme ' 
                onChange={(e) => setSearch(e.target.value)} 
                value={search}></input>
                <button type="submit"><BiSearchAlt2></BiSearchAlt2></button>
            </form>
        </nav>
    )
}

export default navBar