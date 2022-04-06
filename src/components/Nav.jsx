import React from "react";
import { Link } from 'react-router-dom'



const Nav = () => {


    return (

        <div>
            <Link to="/" >Home</Link>
            <Link to="/shows" >Shows</Link> 
            <Link to="/movies" >Movies</Link>
        </div>


    )
}

export default Nav