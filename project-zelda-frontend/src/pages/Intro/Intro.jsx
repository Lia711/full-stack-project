import React from 'react'
import "./Intro.scss"
import {Link} from "react-router-dom"

const Intro = () => {
  return (
    <div className='titlePage'>
        <h1>The Legend of Zelda: Main Series Games</h1>
        <img src="" alt="zelda symbol" />
        <p>Introduction to the franchise</p>
        <Link to="/games">Click here to check out all the games!</Link>
    </div>
    
  )
}

export default Intro