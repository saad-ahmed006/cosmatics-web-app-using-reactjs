import React from 'react'
import HeroImage from '../assets/hero.png'
import '../Styles/Header.css'

export default function Main() {
  return (
    <>
      <div className='Container'>

        <div className='LeftSide'>
          <div className="Paddig-1">
            <h2>SKIN PROTECTION CREAM</h2>
          </div>
          <div className='Paddig-2'>
            <h1>Trendy Collection</h1>
            <p>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced.</p>
          </div>
        </div>

        <div 
      
        className='MiddleSide'>
          <img src={HeroImage} alt="HeroImage"></img>
          <div className='BlueCircle'></div>
        </div>

        <div className='RightSide'>
          <div>
            <h1>1.5m</h1>
            <p>Monthly traffic</p>
          </div>
          <div>
            <h1>100k</h1>
            <p>Happy Customers</p>
          </div>

        </div>

      </div>
    </>
  )
}
