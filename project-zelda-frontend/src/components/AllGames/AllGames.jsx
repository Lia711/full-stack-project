import React from 'react'
import "./AllGames.scss"
import { Link } from 'react-router-dom';
import image from "../../assets/images/TLoZ_Series_Royal_Crest_Artwork.jpg"

const AllGames = (props) => {
    const {gamesDisplay} = props;
    console.log("this is my games display", gamesDisplay)
    return ( gamesDisplay.map((game)=>(
        <div className='gameTile'>
            <img src={game.boxArt} alt="" />
            <Link to={`/game/${game.id}`} games = {gamesDisplay} className='name'>{game.title}</Link>
        </div>
    ))

    )
}

export default AllGames