import React from 'react'
import "./AllGames.scss"
import { Link } from 'react-router-dom';

const AllGames = (props) => {
    const {gamesDisplay} = props;
    console.log(gamesDisplay)
    return ( gamesDisplay.map((game)=>(
        <div className='gameTile'>
            <img src={game.boxArt} alt="" />
            <Link to={`/game/${game.id}`} games = {gamesDisplay}>{game.title}</Link>
        </div>
    ))

    )
}

export default AllGames