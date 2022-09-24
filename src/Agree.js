import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'
import Footer from './Footer'

function Agree() {
  return (
    <div className='Agree'> 
    <div className='Agree Container'>
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
                <p>Cумма в CSM к покупке:</p>
                <input/>
            </div>
            <div className='BuyCosmoCoin__content-input'>
                <p>Стоимость в BTC к оплате:</p>
                <input/>
            </div>
            <div className='BuyCosmoCoin__content-input'>
                <p>Адрес кошелька BTC для оплаты:</p>
                <input/>
                <p style={{width: "382px", 
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "140%",
            }}>*Переведите необходимую сумму на указанный номер кошелька</p>
                <p style={{width: "370px",
            fontFamily: 'Gilroy',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "140%",
            }}>После осуществления оплаты нажмите <span style={{color: "#5F4BD9"}}>"Я оплатил"</span></p>
            </div>
            <div className='BuyCosmoCoin__content-button'>
                <Link className='BuyCosmoCoin__content-button-Link' to="/PurchaseCSM">Я оплатил</Link>
            </div>
                <div className='PayCSM__Back'>
                    <Link className='PayCSM__Back-Link' to="/PayCSM">Назад</Link>
                </div>
                <p style={{
                    width: "372px",
                    fontFamily: 'Gilroy',
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "140%",
                }}>*Как только платеж будет проверен, соответствующая сумма в CosmoCoin появится на Вашем счету CSM. Информацию о состоянии счета и статусах транзакций Вы можете отслеживать в разделе Cosmo Wallet.</p>
        
        </div>
    </div>
    <Footer/>
</div>  
</div>
  )
}

export default Agree