import React from 'react';
import { useNavigate } from 'react-router-dom';

const ColorSpace = () => {
  const navigate = useNavigate();

  const diffPage = (colorSpaceId) => {
    navigate('/difficulty', {state: {colorId: colorSpaceId}});
  }

  return (
    <main className="main">
      <h1 className='main__title'>Choose a Color Space</h1>
      <div className='main__grid'>
        <button onClick={() => diffPage(0)} className="main__btn">RGB</button>
        <button onClick={() => diffPage(1)} className="main__btn">HEX</button>
        <button onClick={() => diffPage(2)} className="main__btn">HSL</button>
        <button onClick={() => diffPage(3)} className="main__btn">CMYK</button>
      </div>
    </main>
  )
}

export default ColorSpace