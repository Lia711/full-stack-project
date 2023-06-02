import {React, useState, useEffect} from 'react'
import './App.css';

function App() {

  const [games, setGames] = useState([]);

  const getAllGames = async()=> {
    let url=`http://localhost:8080/games`;
    try {
      const response = await fetch(url)
      const data = await response.json()
      setGames(data)
    } catch (e) {
      console.log("this is the error", e)
    }
  }
  console.log(games);

  useEffect(()=>{
    getAllGames();
  }, [])

  return (
    <div className="App">
      <h1>Zelda Games</h1>
      <div>{games}</div>
    </div>
  );
}

export default App;
