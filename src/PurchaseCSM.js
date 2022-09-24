import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonalArea from './ PersonalArea';
import Footer from './Footer';

const PurchaseCSM = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleBlock = () => setIsMenuOpen((isOpen) => !isOpen);

    const [isMenuOpeToo, setIsMenuOpenToo] = useState(false);
    const toggleBlockToo = () => setIsMenuOpenToo((isOpen) => !isOpen);

  return (
    <div className='PurchaseCSM'>
         <div className='Wallet Container'>
        <PersonalArea/>
         <div className='Wallet__content'>
            <div className='Wallet__content-blocks'>
                <div className='Wallet__content-block-one'>
                    <h2>Cosmo-кошелек</h2>
                    <div className='Wallet__content-block-backround'>
                        <p>Вы можете приобрести CosmoCoin (CSM)</p>
                        <div className='Wallet__content-block-button'>
                            <Link className='Wallet__content-link' to="/BuyCosmoCoin">Купить CSM</Link>
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
                        <div className='Wallet__middle-table'>
                            <div className='Wallet__middle-table-one'>
                                <div className='Wallet__middle-table-flex'>
                                    <p style={{width: "201px"}}>Дата</p>
                                    <p>Сумма в CSM</p>
                                    <p>Сумма платежа в BTC</p>
                                    <p style={{width: "151px"}}>Статус транзакции</p>
                                </div>
                            </div>
                            <div className='Wallet__middle-table-background'></div>
                            <div className='Wallet__middle-table-one-flex'>

                                <div className='Wallet__middle-table-one'>
                                    <div className='Wallet__middle-table-flex' style={{width: "1140px"}}>
                                        <div style={{width: "113px", display: "flex", flexDirection: "column"}}>
                                            <p style={{color: "#FFFFFF", height: "1px"}}>22/04/2022</p>
                                            <p style={{color: "#FFFFFF", height: "1px"}}>22:22</p>
                                        </div>
                                        <p style={{width: "300px", color: "#FFFFFF"}}>1000 CSM</p>
                                        <p style={{width: "267px", color: "#FFFFFF"}}>0,0141405 BTC</p>
                                        <p style={{width: "150px", color: "#FCC958"}}>На проверке</p>
                                    </div>
                                </div>

                                <div  className='Wallet__middle-table-background'></div>

                                <div className='Wallet__middle-table-one'>
                                    <div className='Wallet__middle-table-flex' style={{width: "1140px"}}>
                                        <div style={{width: "113px", display: "flex", flexDirection: "column"}}>
                                            <p style={{color: "#FFFFFF", height: "1px"}}>22/04/2022</p>
                                            <p style={{color: "#FFFFFF", height: "1px"}}>22:22</p>
                                        </div>
                                        <p style={{width: "300px", color: "#FFFFFF"}}>1000 CSM</p>
                                        <p style={{width: "267px", color: "#FFFFFF"}}>0,0141405 BTC</p>
                                        <p style={{width: "150px", color: "#4ED94B"}}>Подтверждена</p>
                                    </div>
                                </div>

                                <div  className='Wallet__middle-table-background'></div>

                                <div className='Wallet__middle-table-one'>
                                    <div className='Wallet__middle-table-flex' style={{width: "1140px"}}>
                                        <div style={{width: "113px", display: "flex", flexDirection: "column"}}>
                                            <p style={{color: "#FFFFFF", height: "1px"}}>22/04/2022</p>
                                            <p style={{color: "#FFFFFF", height: "1px"}}>22:22</p>
                                        </div>
                                        <p style={{width: "300px", color: "#FFFFFF"}}>1000 CSM</p>
                                        <p style={{width: "267px", color: "#FFFFFF"}}>0,0141405 BTC</p>
                                        <div className=''>
                                            <p style={{width: "150px", color: "#5F4BD9"}}>Скорректирована</p>

                                            <div onClick={toggleBlock} style={{display: "flex",height: "1px", marginTop: "0px", cursor: "pointer"}}>
                                                <a style={{height: "1px",}}>подробнее</a>
                                                <div style={{marginLeft: "8px"}} className='Wallet__middle-table-Arrow'></div>
                                            </div>
                                            
                 
                                        </div>
                                            
                                    </div>
                                </div>
                                {isMenuOpen && (
                                                <div className='Wallet__middle-toggleBlock'>
                                                    <div className='Wallet__middle-toggleBlock-text'>
                                                        <div className=''>
                                                            <h2>Комментарий МыКосмос:</h2>
                                                            <p>Начисленная сумма в CSM отличается от суммы, указанной в форме покупки. Причина - переведена меньшая сумма в BTC, чем была указана в форме покупки. Параметры из формы - 1000CSM/0,01414BTC.</p>
                                                        </div>
                                                    </div>

                                                    <div className='Wallet__middle-toggleBlock-button'>
                                                        <div style={{background: "#2E2D2D"}}><Link className='middle-toggleBlock__Link' to="/">Связаться с нами</Link></div>
                                                        <div style={{background: "#5F4BD9"}}><Link className='middle-toggleBlock__Link' to="/">Связаться с нами</Link></div>
                                                    </div>
                                                </div>
                                            )}
                                <div className='Wallet__middle-table-background'></div>


                                <div className='Wallet__middle-table-one'>
                                    <div className='Wallet__middle-table-flex' style={{width: "1140px"}}>
                                        <div style={{width: "113px", display: "flex", flexDirection: "column"}}>
                                            <p style={{color: "#FFFFFF", height: "1px"}}>22/04/2022</p>
                                            <p style={{color: "#FFFFFF", height: "1px"}}>22:22</p>
                                        </div>
                                        <p style={{width: "300px", color: "#FFFFFF"}}>1000 CSM</p>
                                        <p style={{width: "267px", color: "#FFFFFF"}}>0,0141405 BTC</p>
                                        <div className=''>
                                            <p style={{width: "150px", color: "#CE2E2E"}}>Отклонено</p>
                                            <div onClick={toggleBlockToo} style={{display: "flex",height: "1px", marginTop: "0px", cursor: "pointer"}}>
                                                <a style={{height: "1px",}}>подробнее</a>
                                                <div style={{marginLeft: "8px"}} className='Wallet__middle-table-Arrow'></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {isMenuOpeToo && (
                                                <div className='Wallet__middle-toggleBlock-too'>
                                                    <div className='Wallet__middle-toggleBlock-too-text'>
                                                        <div className='Wallet__middle-toggleBlock-too-title'>
                                                            <h2>Комментарий МыКосмос:</h2>
                                                            <p>Комментарий МыКосмос:</p>
                                                        </div>
                                                    </div>

                                                    <div className='Wallet__middle-toggleBlock-button'>
                                                        <div style={{background: "#2E2D2D"}}><Link className='middle-toggleBlock__Link' to="/">Связаться с нами</Link></div>
                                                    </div>
                                                </div>
                                            )}
                            </div>
                        </div>
                    </div>
                </div>
         </div>
    </div>
        <Footer/>
    </div>
  )
}



export default PurchaseCSM;