import React from 'react'
import "./AllGames.scss"

const AllGames = ({props}) => {
    const games = props;
    console.log(games)
  return (
    <div className='allGames'>
        <h1>All Main Games in the Legend of Zelda Franchise:</h1>
        <div>{games}</div>
    </div>
  )
}

export default AllGames