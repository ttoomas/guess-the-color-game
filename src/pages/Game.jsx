import React from 'react'
import { useLocation } from 'react-router-dom'
import { setGameData } from '../components/setGameData';

const Game = () => {
  const location = useLocation();

  const gamedata = setGameData();
  console.log(gamedata);

  return (
    <div>Game</div>
  )
}

export default Game