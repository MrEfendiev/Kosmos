import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'

function CSM() {
  return (
    <div className='CSM Container'>
                  <PersonalArea/>
        <div className='BTC__content CSM__title'>
            <h1>Указанная сумма в CosmoCoin будет начислена на Ваш CosmoWallet</h1>
            <p>Укажите сумму в CSM для вывода:</p>
            <input type="text" />
            <div className='BTC__content-Button'>
                <Link className='BTC__content-Button-Link' to="/ConclusionMotivation">Вывести CSM</Link>
            </div>
        </div>
    </div>
  )
}

export default CSM