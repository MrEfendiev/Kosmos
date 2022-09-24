import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';


export default function Taimer() {
  return (
    <div className='Taimer'>
        <div className='Taimer__block'>
            <div className='Taimer__title'>
                <h2> <span style={{color:"#5F4BD9",}}>Pre ICO</span> завершается:</h2>
            </div>
            <div className='Taimer__Numbers'>
                <div className='Taimer__Numbers-block'>
                    <h3>24</h3>
                    <p>дней</p>
                </div>
                <div className='Taimer__Numbers-block'>
                    <h3>12</h3>
                    <p>часов</p>
                </div>
                <div className='Taimer__Numbers-block'>
                    <h3>36</h3>
                    <p>минут</p>
                </div>
                <div className='Taimer__Numbers-block'>
                    <h3>24</h3>
                    <p>секунд</p>
                </div>
            </div>
            <div className='Taimer__lavel'>
                    <div className='Taimer__lavel-text'>
                        <p> <span style={{color: "#676666", fontSize: "15px"}}>Собрано:</span> 5 000$ </p>
                        <p> <span style={{color: "#676666", fontSize: "15px"}}>Цель:</span> 50 000$</p>
                    </div>

                    <div className='Taimer__lavel-wrapper'>
                    <div className='Taimer__lavel-block'>
                        <div className='lavel-block__background'></div>
                    </div>
                    </div>
                </div>

                <div className='Taimer__button'>
                     <Link className='Taimer__button-Link' to='/Home'>Купить CosmoCoin</Link>
                </div>
        </div>
    </div>
  )
}
