import React from 'react'
import Shade from '../assets/shade.png'
import Before from '../assets/before.png'
import After from '../assets/after.png'
import '../Styles/Virtual.css'
import ReactCompareImage from 'react-compare-image';

export default function Virtual() {
  return (
    <>

      <div className="VirtualContainer">
        <div className='VirtualContent'>
          <h1>VIRTUAL TRY-ON</h1>
          <p>NEVER BUY THE WRONG <br />SHADE AGAIN!</p>
          <h3>Try Now!</h3>
          <img src={Shade} alt="shade"></img>
        </div>
        <div className='BeforeAfterImage'>
          <ReactCompareImage rightImage={After} leftImage={Before} />
        </div>
      </div>

    </>
  )
}
