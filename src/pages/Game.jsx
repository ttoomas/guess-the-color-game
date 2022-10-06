import React from 'react'
import { useLocation } from 'react-router-dom'
import { getGameData } from '../components/getData';

const Game = () => {
  const location = useLocation();

  getGameData(location.state);

  return (
    <div>Game</div>
  )
}

export default Game