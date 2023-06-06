import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import gamesData from '../../assets/data/games.json';
import "./Game.scss"

const Game = () => {

  const [selectedGame, setSelectedGame] = useState(null);
  const {gameId} = useParams();

    const getGameById = async gameId => {
    const url=`http://localhost:8080/game/${gameId}`
    const response = await fetch(url);
    const data = await response.json()
    setSelectedGame(data)
  }

  useEffect(()=> {
    getGameById(gameId);
  }, [gameId])


    //const games=props;
    
    //console.log({gamesData});
    //const currentGame = games.find((game) => (game.id == gameId));
    //const {title, platform, year, id, summary} = selectedGame;

  return (
    <div className='gameContainer'>
        <h1 className='title'>{selectedGame.title}</h1>
        <h2 className='year'>Year of release: {selectedGame.year}</h2>
        <h2 className='console'>First available on: {selectedGame.platform}</h2>
        <p className='about'>Storyline: {selectedGame.summary}</p>
    </div>
  )
}

export default Game
