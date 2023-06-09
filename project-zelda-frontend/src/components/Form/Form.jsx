import React, { useEffect } from 'react'
import "./Form.scss"
import { useState } from 'react';

const Form = ({defaultFormState, handleSubmit}) => {
  console.log("default", defaultFormState)
    const [game, setGame] = useState([]);
    
    useEffect(()=> {
      setGame(defaultFormState);
    }, [])

    console.log("game", game)
    const handleValidation = event => {
        event.preventDefault();
        if (Object.values(game).some(value=>!value)) {
            alert("Please fill out all the fields.");
            return;
        }
        handleSubmit(game)
    }

  return game ? <div className='container'>
  <form className="form" onSubmit={handleValidation}>

  <label htmlFor="title">Title : </label>
  <input
    id="title"
    className="input"
    type="text"
    placeholder="title"
    value={game.title}
    onInput={event => setGame({ ...game, title: event.target.value })}
  />

  <label htmlFor="platform">Platform : </label>
  <input
    id="platform"
    className="input"
    type="text"
    placeholder="platform"
    value={game.platform}
    onInput={event => setGame({ ...game, platform: event.target.value })}
  />

  <label htmlFor="boxArt">Link to Box Art : </label>
  <input
    id="boxArt"
    className="input"
    type="text"
    placeholder="boxArt"
    value={game.boxArt}
    onInput={event => setGame({ ...game, boxArt: event.target.value })}
  />

  <label htmlFor="gif1">Link to first gif : </label>
  <input
    id="gif1"
    className="input"
    type="text"
    placeholder="gif1"
    value={game.gif1}
    onInput={event => setGame({ ...game, gif1: event.target.value })}
  />

  <label htmlFor="gif2">Link to second gif : </label>
  <input
    id="gif2"
    className="input"
    type="text"
    placeholder="gif2"
    value={game.gif2}
    onInput={event => setGame({ ...game, gif2: event.target.value })}
  />

  <label htmlFor="plot">Plot : </label>
  <input
    id="plot"
    className="input"
    type="text"
    placeholder="plot"
    value={game.summary}
    onInput={event => setGame({ ...game, summary: event.target.value })}
  />


  <button type="submit" className="button">
    Submit
  </button>
</form>

</div> : null  
 
  
  
}

export default Form