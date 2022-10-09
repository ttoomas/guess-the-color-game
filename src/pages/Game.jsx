import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { getGameData } from '../components/getData';

const Game = () => {
  const location = useLocation();

  useEffect(() => {
    const colorBlock = document.querySelector('.game__colorBlock');
    const gameBx = document.querySelector('.game__bx');
    
    getGameData(location.state, colorBlock, gameBx);
  }, [location])


  return (
    <main className='main__game'>
      <span className='game__colorBlock'>
        <p>Guess this Color</p>
        <p><span className='round__count'>1</span>/5</p>
      </span>
      <div className="game__bx">

      </div>

      <div className='game__round'>
        <div className='round__bx'>
          <Link to="/" className='newRound__btn roundBtn'>New Round</Link>
          <button className='nextRound__btn roundBtn'>Next Round</button>
        </div>
        <span className='round__loader'></span>
      </div>
    </main>
  )
}

export default Game