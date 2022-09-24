import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'
import Footer from './Footer'

export default function BuyCosmoCoin() {
  return (
    <div className='BuyCosmoCoin Container'>
        <PersonalArea/>
        <div className='BuyCosmoCoin__title'>
            <h1>Купить CosmoCoin</h1>
        </div>
        <div className='BuyCosmoCoin__content'>
            <div className='BuyCosmoCoin__content-text'>
                <p>Приобрести CosmoCoin (CSM)</p>
            </div>
            <div className='BuyCosmoCoin__content-form'>
                <div className='BuyCosmoCoin__content-input'>
                    <p>Текущий раунд IDO:</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-input'>
                    <p>До окончания раунда осталось:</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-input'>
                    <p>Текущий курс CSM в USD:</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-input'>
                    <p>Текущий курс CSM в BTC:</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-input'>
                    <p>Текущий курс CSM в ETH:</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-button'>
                    <Link className='BuyCosmoCoin__content-button-Link' to="/PayCSM">Купить CSM</Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>  
  )
}
