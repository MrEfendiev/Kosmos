import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'
import Footer from './Footer'


export default function  PayCSM() {
  return (
    <div className='PayCSM'> 
        <div className='PayCSM Container'>
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
                    <p>Введите сумму в CSM::</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-input'>
                    <p>Стоимость в USD:</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-input'>
                    <p>Стоимость в BTC:</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-input'>
                    <p>Стоимость в ETH:</p>
                    <input/>
                </div>
                <div className='BuyCosmoCoin__content-button'>
                    <Link className='BuyCosmoCoin__content-button-Link' to="/Agree">Оплатить в BTC</Link>
                </div>
                <div className='BuyCosmoCoin__content-button'>
                    <Link className='BuyCosmoCoin__content-button-Link' to="/Agree">Оплатить в ETH</Link>
                </div>
                    <div className='PayCSM__Back'>
                        <Link className='PayCSM__Back-Link' to="/BuyCosmoCoin">Назад</Link>
                    </div>
            </div>
        </div>
        <Footer/>
    </div>  
    </div>
  )
}
