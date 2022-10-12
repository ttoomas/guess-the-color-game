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
      <div className='game__colorBlock notranslate'>
        <p className='game__title'>Guess this Color</p>
        <div className='main__count'>
          <p>Round<span className='round__count roundCust'>1</span>/5</p>
          <p>Points<span className='round__pts roundCust'>0</span>/5</p>
        </div>
      </div>
      <div className="game__bx">

      </div>

      <div className='game__round'>
        <div className='round__bx'>
          <Link to="/" className='newGame__btn roundBtn'>New Game</Link>
          <button className='nextRound__btn roundBtn'>Next Round</button>
        </div>
        <span className='round__loader'></span>
      </div>

      <div className='main__popup'>
        <Link to={'/game'} state={{diffId: location.state.diffId, colorId: location.state.colorId}} className='popup__btn'>New Round</Link>
        <Link to="/" className='popup__btn'>New Game</Link>
      </div>
    </main>
  )
}

export default Game