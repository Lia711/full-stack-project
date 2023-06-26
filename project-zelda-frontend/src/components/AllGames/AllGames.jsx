import React from 'react'
import "./AllGames.scss"
import { Link } from 'react-router-dom';

const AllGames = ({games}) => {
    //console.log("art", games[0].box_art)
    return ( games.map((game)=>(
        <div className='gameTile'>
            <img src={game.boxArt} alt="box art of zelda game" />
            <Link to={`/game/${game.id}`} className='name'>{game.title}</Link>
        </div>
    ))

    )
}

export default AllGames