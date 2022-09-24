import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'
import Footer from './Footer'

export default function Wallet() {
  return (
    <div className='Wallet Container'>
        <PersonalArea/>
         <div className='Wallet__content'>
            <div className='Wallet__content-blocks'>
                <div className='Wallet__content-block-one'>
                    <h2>Cosmo-кошелек</h2>
                    <div className='Wallet__content-block-backround'>
                        <p>Вы можете приобрести CosmoCoin (CSM)</p>
                        <div className='Wallet__content-block-button'>
                            <Link className='Wallet__content-link' to="/PurchaseCSM">Купить CSM</Link>
                        </div>
                    </div>
                </div>
                <div className='Wallet__content-block-too'>
                    <div className='Wallet__content-block-text'>
                        <p>Адрес Вашего CSM-кошелька</p>
                    <div className='Wallet__content-block-input'>
                        <input></input>
                    </div>
                    </div>
                    <div className='Wallet-balance-flex'>
                        <div className='Wallet__content-balance'>
                            <div className='Wallet__content-balance-flex'>
                                <div className='Wallet__balance-text'>
                                <p>CosmoCoin</p>
                                </div>
                                <div className='Wallet__balance-title'>
                                    <p>Balance</p>
                                    <h3>1 500 000 090</h3>
                                </div>
                                <div className='Wallet__balance-name'>
                                    <p>Card Holder name</p>
                                    <h3>Anatoly Maltsev</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Wallet__middle'>
                <div className='Wallet__content-block-backround Wallet__middle-background'>
                        <p>Вы можете участвовать в реферальной программе</p>
                        <div className='Wallet__content-block-button'>
                            <Link className='Wallet__content-link' to="/">Участвовать</Link>
                        </div>
                    </div>
                    <div className='Wallet__middle-title'>
                        <h2>После запуска социальной сети МыКосмос</h2>
                        <div className='Wallet__middle-block-text'>
                            <div></div>
                            <div className='Wallet__middle-text'>
                                <p>Вы можете приобретать NFT</p>
                            </div>
                        </div>
                        <div className='Wallet__middle-block-text'>
                            <div></div>
                            <div className='Wallet__middle-text'>
                                <p>Вы можете продавать CSM на P2P-платформе МыКосмос</p>
                            </div>
                        </div>
                         <div className='Wallet__middle-block-text'>
                            <div></div>
                            <div className='Wallet__middle-text'>
                                <p style={{width: "642px"}}>После запуска социальной сети, все информация и функционал будут автоматически перенесены в Ваш личный аккаунт</p>
                            </div>
                        </div>
                    </div>
                    <div className='Wallet__middle-title-too'>
                        <h2>Реестр транзакций на покупку:</h2>
                        <p>В данный момент Вы не осуществляли ни одной транзакции, связанной с покупкой CosmoCoin</p>
                    </div>
                </div>
         </div>
        <Footer/>
    </div>
  )
}
