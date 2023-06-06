import React from 'react';
import { useParams } from "react-router-dom";
import gamesData from '../../assets/data/games.json';
import "./Game.scss"

const Game = () => {
    const {gameId} = useParams();
    console.log({gamesData});
    const currentGame = gamesData.find((game) => (game.id == gameId));
    const {title, platform, year, id, summary} = currentGame;

  return (
    <div className='gameContainer'>
        <h1 className='title'>{title}</h1>
        <h2 className='year'>Year of release: {year}</h2>
        <h2 className='console'>First available on: {platform}</h2>
        <p className='about'>Storyline: {summary}</p>
    </div>
  )
}

export default Game
