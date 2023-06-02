import {React, useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Intro from './pages/Intro/Intro';
import AllGames from './pages/AllGames/AllGames';
import Game from './pages/Game/Game';
import gamesData from './assets/data/gamesData';

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

  useEffect(()=>{
    getAllGames();
  }, [])

  return (
    <Router>
    <Routes>
        
        <Route
        path="/"
        element={<Intro/>
        }
        />

        <Route
        path={"/games"}
        element={<AllGames gamesDisplay={gamesData}/>
        }
        />

        <Route
        path={"/game/:gameId"}
        element={<Game/>
        }
        />

      </Routes>
      </Router>
  );
}

export default App;
