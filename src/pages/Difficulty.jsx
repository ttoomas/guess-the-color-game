import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Difficulty = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const gamePage = (diffIdBtn) => {
    const colorSpaceId = location.state.colorId;

    navigate('/game', {state: {colorId: colorSpaceId, diffId: diffIdBtn}});
  }

  return (
    <main className="main main__diff">
      <h1 className='main__title'>Choose a Difficulty</h1>
      <div className='main__grid'>
        <button onClick={() => gamePage(0)} className="main__btn">Easy</button>
        <button onClick={() => gamePage(1)} className="main__btn">Medium</button>
        <button onClick={() => gamePage(2)} className="main__btn">Hard</button>
        <button onClick={() => gamePage(3)} className="main__btn">Expert</button>
        <button onClick={() => gamePage(4)} className="main__btn">Impossible</button>
      </div>
    </main>
  )
}

export default Difficulty