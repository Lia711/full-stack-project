import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import gamesData from '../../assets/data/games.json';
import "./Game.scss"
import Nav from '../../components/Nav/Nav';

const Game = () => {

  const [selectedGame, setSelectedGame] = useState([]);
  const {gameId} = useParams();

    const getGameById = async gameId => {
    const url=`http://localhost:8080/game/${gameId}`
    const response = await fetch(url);
    const data = await response.json()
    console.log("data", data)
    setSelectedGame(data)
  }

  useEffect(()=> {
    getGameById(gameId);
  }, [])
  console.log("SelectedGame", selectedGame)
  console.log("gameid", gameId)
    const {title, platform, year, id, summary, gif1, gif2} = selectedGame;
  return (
    <div className='allContent'>
      <Nav/>
    <div className='gameContainer'>
        <h1 className='title'>{title}</h1>
        <h2 className='year'>Year of release: {year}</h2>
        <h2 className='console'>First available on: {platform}</h2>
        <div className='gifs'>
        <img src={gif1} alt="game gif"/>
        <img src={gif2} alt="game gif"/>
        </div>
        <p className='about'>Storyline: {summary}</p>
    </div>
    </div>
  )
}

export default Game
