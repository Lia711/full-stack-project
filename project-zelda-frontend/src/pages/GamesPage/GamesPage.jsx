import React from 'react'
import "./GamesPage.scss"
import AllGames from '../../components/AllGames/AllGames'
import Nav from '../../components/Nav/Nav'

const GamesPage = ({games}) => {
  return (
    <div className='allContent'>
      <Nav/>
    <div className='gamesPage'>
        <h1 className='header'>All Zelda Main Timeline Games</h1>
        <div className='gameTiles'>
            <AllGames games={games}/>
        </div>
    </div>
    </div>
  )
}

export default GamesPage