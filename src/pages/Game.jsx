import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { getGameData } from '../components/getData';

const Game = () => {
  const location = useLocation();

  useEffect(() => {
    const main = document.querySelector('.main');
    
    getGameData(location.state, main);
  }, [location])


  return (
    <main className='main' id='main'>
      
    </main>
  )
}

export default Game