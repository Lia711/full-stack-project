import React from 'react'
import "./Intro.scss"
import {Link} from "react-router-dom"
import logo from "../../assets/images/TLoZ_Series_Royal_Crest_Artwork.jpg"
import Nav from '../../components/Nav/Nav'

const Intro = () => {
  return (
    <div className='allContent'>
      <Nav/>
    <div className='titlePage'>
        <h1 className='title'>The Legend of Zelda</h1>
        <img className="logo" src={logo} alt="zelda symbol" />
        <p className='about'>The Legend of Zelda franchise is a series of action-adventure video games created by game designer Shigeru Miyamoto and developed and published by Nintendo. First introduced in 1986 with the release of "The Legend of Zelda" for the Nintendo Entertainment System (NES), the franchise has since become one of Nintendo's most successful and enduring franchises, captivating players of all ages for over three decades. Throughout the series, players embark on epic quests, exploring vast and immersive worlds filled with dungeons, puzzles, and treasures. They acquire powerful weapons, magical items, and abilities to aid them in their journey. Each game offers a unique storyline and setting, ranging from the vast open world of "The Legend of Zelda: Breath of the Wild" to the mystical land of Termina in "The Legend of Zelda: Majora's Mask." One of the defining aspects of the franchise is its emphasis on exploration and puzzle-solving. Players navigate through diverse landscapes, interact with various characters, and uncover secrets and hidden passages, all while unraveling the overarching narrative. The series is known for its intricate and challenging dungeons, where players must solve puzzles, defeat enemies, and conquer formidable bosses to progress. Over the years, the franchise has expanded beyond the mainline games, with spin-offs, remakes, and adaptations in various forms of media, including animated series and manga. It has also embraced technological advancements, evolving from the 2D sprites of the early games to the breathtaking open-world environments of the recent entries.</p>
        <Link to="/games" className='link'>Click here to check out all the games!</Link>
    </div>
    </div>
    
  )
}

export default Intro