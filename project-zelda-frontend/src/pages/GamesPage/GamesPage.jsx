import React from 'react'
import "./GamesPage.scss"
import AllGames from '../../components/AllGames/AllGames'

const GamesPage = (props) => {
    const {gamesDisplay} = props;
  return (
    <div className='gamesPage'>
        <h1 className='header'>All Zelda Main Timeline Games</h1>
        <div className='gameTiles'>
            <AllGames gamesDisplay={gamesDisplay}/>
        </div>
    </div>
  )
}

export default GamesPage