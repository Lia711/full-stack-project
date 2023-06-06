import React from 'react'
import "./GamesPage.scss"
import AllGames from '../../components/AllGames/AllGames'

const GamesPage = (props) => {
    const {games} = props;
  return (
    <div className='gamesPage'>
        <h1 className='header'>All Zelda Main Timeline Games</h1>
        <div className='gameTiles'>
            <AllGames games={games}/>
        </div>
    </div>
  )
}

export default GamesPage