import React from 'react'
import "./Edit.scss"
import { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Form from '../../components/Form/Form';
import { useParams } from "react-router-dom";


const Edit = ({games}) => {
    // const [selectedGame, setSelectedGame] = useState([]);
    const {gameId} = useParams();

    const game = games.find((game)=>game.id==gameId)
  
    //   const getGameById = async gameId => {
    //   const url=`http://localhost:8080/game/${gameId}`
    //   const response = await fetch(url);
    //   const data = await response.json()
    //   console.log("data", data)
    //   setSelectedGame(data)
    // }
  
    // useEffect(()=> {
    //   getGameById(gameId);
    // }, [])



    const handleUpdate = async updatedGame => {
        const result = await fetch(`http://localhost:8080/game/${gameId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedGame),
        });
    
        if (result.ok) {
            alert("Game updated!");
          } else {
            const message = await result.text();
            alert(message);
          }
      };

    const handleDelete = async updatedGame => {
        const result = await fetch(`http://localhost:8080/game/${gameId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (result.ok) {
            alert("Game deleted!");
          } else {
            const message = await result.text();
            alert(message);
          }
      };
      console.log("selected game", game)

  return (
    <div className='edit'>
        <Nav/>
        <div className='edit-form'>
        <h2 className="title">Change Game Information:</h2>
          <Form defaultFormState={game} handleSubmit={handleUpdate}/>
          <button className="delete" onClick={handleDelete}>Delete</button>
        </div>    
    </div>
  )
}

export default Edit