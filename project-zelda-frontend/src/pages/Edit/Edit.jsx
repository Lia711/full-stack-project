import React from 'react'
import "./Edit.scss"
import { useState, useParams, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import { Form } from 'react-router-dom';


const Edit = () => {
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

  return (
    <div>
        <Nav/>
        <Form defaultFormState={selectedGame}/>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Edit