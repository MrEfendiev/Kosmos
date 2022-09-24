import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'

function  BTC() {
  return (
    <div className='BTC Container'> 
        <PersonalArea/>
        <div className='BTC__content'>
            <p>Укажите сумму в BTC для вывода:</p>
            <input type="text" />
            <p>Укажите сумму в BTC для вывода:</p>
            <input type="text" />
            <div className='BTC__content-Button'>
                <Link className='BTC__content-Button-Link' to="/">Вывести BTC</Link>
            </div>
        </div>
    </div>
  )
}

export default  BTC