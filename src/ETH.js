import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'

function ETH() {
  return (
    <div className='ETH Container'>
              <PersonalArea/>
        <div className='BTC__content'>
            <p>Укажите сумму в ETH для вывода:</p>
            <input type="text" />
            <p>Укажите адрес кошелька ETH для вывода:</p>
            <input type="text" />
            <div className='BTC__content-Button'>
                <Link className='BTC__content-Button-Link' to="/">Вывести ETH</Link>
            </div>
        </div>
    </div>
  )
}

export default ETH