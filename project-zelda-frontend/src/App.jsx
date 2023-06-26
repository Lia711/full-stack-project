import {React, useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Intro from './pages/Intro/Intro';
import AllGames from './components/AllGames/AllGames';
import Game from './pages/Game/Game';
//import gamesData from './assets/data/games.json';
import GamesPage from './pages/GamesPage/GamesPage';
import Create from './pages/Create/Create';
import Edit from './pages/Edit/Edit';

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

console.log("games", games)
  useEffect(()=>{
    getAllGames();
  }, [])

  return (
    <Router>
      <Routes>
        
        <Route path="/"
        element={<Intro/>
        }
        />

        <Route
        path={"/games"}
        element={<GamesPage games={games}/>
        }
        />

        <Route
        path={"/game/:gameId"}
        element={<Game games={games}/>
        }
        />

        <Route
        path={"/game/create"}
        element={<Create/>}/>

        <Route 
        path={"/game/edit/:gameId"} 
        element={<Edit games={games}/>} />

      </Routes>
    </Router>
  );
}

export default App;
