import React from 'react'
import App from './App';
import Auth from './Home';
import Header from './Header'
import './App.css';
import Taimer from './Taimer';
import Footer from './Footer';

export default function CosmoCoin() {
  return (
    <div className='CosmoCoin'>
    <Header/>

    <div className='CosmoCoin__container'>
        <div className='CosmoCoin__flex'>
            <div className='CosmoCoin__title'>
                <h1>В чем основное отличие Cosmo-Coin CSM от остальных проектов, связанных с крипто-активами</h1>
                <div className='Coin-title__block'>
                    <p>Команда «МыКосмос» создала CosmoCoin не только как инструмент для осуществления безопасных и анонимных переводов или инвестиций, с целью извлечения дохода за счет повышения стоимости. </p>
                </div>
                <h2>Cosmo-Coin является составной частью общего проекта «МыКосмос», что дает ему следующие преимущества:</h2>
                <div className='Coin-title__text'>
                    <span></span>
                    <p>Возможность использования в качестве способа оплаты в социальной сети, а, впоследствии и мета-вселенной «МыКосмос»</p>
                </div>
                <div className='Coin-title__text'>
                    <span></span>
                    <p>Возможность использования в качестве способа оплаты в социальной сети, а, впоследствии и мета-вселенной «МыКосмос»</p>
                </div>
                <div className='Coin-title__text'>
                    <span></span>
                    <p>Возможность использования в качестве способа оплаты в социальной сети, а, впоследствии и мета-вселенной «МыКосмос»</p>
                </div>
                <div className='Coin-title__text'>
                    <span></span>
                    <p>Возможность использования в качестве способа оплаты в социальной сети, а, впоследствии и мета-вселенной «МыКосмос»</p>
                </div> 

                <h2>Все это в комплекте с такими более привычными плюсами, как:</h2>
                <div className='Coin-title__text'>
                    <span></span>
                    <p>Быстрота транзакций</p>
                </div> 
                <div className='Coin-title__text'>
                    <span></span>
                    <p>Анонимность транзакций</p>
                </div> 
                <div className='Coin-title__text'>
                    <span></span>
                    <p>Наличие функции арбитража</p>
                </div> 
                <div className='Coin-title__text'>
                    <span></span>
                    <p>Высочайший уровень информационной безопасности</p>
                </div> 
            </div>
            <div className='CosmoCoin__block-img'>
                 <div className='CosmoCoin__img'></div>
            </div>
         
        </div> 
        <div className='CosmoCoin__title-too'>
            <h2>Структура эмиссии Cosmo-Coin (CSM)</h2>
        </div>
        <div className='CosmoCoin__table'>
            <div className='CosmoCoin-table__img'></div>
        </div>
        <Taimer/>
        <Footer/>
    </div>
</div> 
  )
}
