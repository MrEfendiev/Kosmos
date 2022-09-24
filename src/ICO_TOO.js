import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './App.css';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

export default function ICO2() {
  return (
    <div className='ICO2'>
        <Header/>
        <div className='ICO2__container'>
            <div style={{marginTop: "120px"}} className='ICO2__title'>
                <h1>Для ICO-промоутеров</h1>
            </div>
            <div className='ICO2__blocks-flex' style={{display: "flex", justifyContent: "space-between"}}>
                <div className='ICO2__block-one' style={{
                    display: "flex",
                    flexDirection: 'column', 
                    justifyContent: "space-between",
                    background: "rgba(103, 102, 102, 0.16)", 
                    borderRadius: "10px",
                    width: "660px",
                    height: "386px",
                    }}>
                    <div className='ICO2__block-title' style={{
                        marginLeft: "30px",

                    }}>
                        <div className='ICO2__block-subtitle'>
                            <h3>Если Вы являетесь:</h3>
                        </div>
                        <div className='ICO2__block-margin' style={{
                            marginTop: "24px", 
                        }}>
                            <div className='ICO2__block-link'>
                                <div className='ICO2__block-background'></div>
                                <p>Профессиональным участником крипто-сообщества</p>
                            </div>
                            <div className='ICO2__block-link'>
                                <div className='ICO2__block-background'></div>
                                <p>Крипто-трейдером</p>
                            </div>
                            <div className='ICO2__block-link'>
                                <div className='ICO2__block-background'></div>
                                <p>Владельцем профильного канала</p>
                            </div>
                            <div className='ICO2__block-link'>
                                <div className='ICO2__block-background'></div>
                                <p>Блогером</p>
                            </div>
                            <div className='ICO2__block-link'>
                                <div className='ICO2__block-background'></div>
                                <p>Вам просто нравится проект, и вы хотели бы помогать в его продвижении</p>
                            </div>
                            <div className='ICO2__block-text'>
                                <p>И вы готовы стать нашим информационным партнером на этапе проведения IDO, команда МыКосмос предлагает Вам специальную программу мотивации, ориентированную на достижение результата. </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='ICO2__block-too'>
                    <div className='ICO2__block-subtitle-too' style={{display: "flex",}}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "228px",
                            height:" 37px",
                            background: "#5F4BD9",
                            borderRadius: "6px",
                            marginTop: "30px",
                            marginLeft: "30px",
                        }}>
                            <h3 style={{
                                fontSize: "18px",
                                color: "#FFFFFF",
                            }}>За каждую транзакцию</h3>
                        </div>
                        <div className='ICO2__block-subtitle-text'>
                            <p>Вашего реферала, мы переводим Вам:</p>
                        </div>
                    </div>

                    <div className='ICO2__block-too-middle'>
                        <div className='ICO2__middle-block-one'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='ICO2__middle-block-too' style={{marginLeft: "11px"}}>
                            <p> <span style={{color: "#5F4BD9"}}>5%</span> от суммы инвестиции в BTC или ETH</p>
                            <p>или</p>
                            <p> <span style={{color: "#5F4BD9"}}>7%</span> от суммы инвестиции в Cosmo-Coin (CSM)</p>
                        </div>
                    </div> 
                    <div className='ICO2__block-three-middle'>
                            <p>В зависимости от того, какой вариант является для Вас наиболее предпочтительным</p>
                        </div>
                </div>
            </div>

            <div className='ICO2__middle'>
                <div className='ICO2__middle-title'>
                    <h2>В виде конкретных расчетов это может выглядеть следующим образом</h2>
                    <div className='ICO2__middle-img'></div>
                    <p>*Начисление в BTC или ETH (в зависимости от валюты транзакции) по актуальному на момент транзакции курсу</p>
                </div>
            </div>

            <div className='ICO2__footer'>
                <div className='ICO2__footer-title'>
                    <h2>Как это работает:</h2>
                </div>
                <div className='ICO2__footer-margin'>
                 <div className='ICO2__footer-text'>
                    <div></div>
                    <p>Зарегистрируйтесь на сайте, если Вы еще не регистрировались</p>
                </div>
                <div className='ICO2__footer-text'>
                    <div></div>
                    <p>Перейдите в раздел «Создать реферальную ссылку» в Вашем личном кабинете</p>
                </div>
                <div className='ICO2__footer-text'>
                    <div></div>
                    <p style={{width: "706px"}}>Сгенерируйте реферальную ссылку, которую впоследствии Вы будете использовать для продвижения проекта и распространять</p>
                </div>
                <div className='ICO2__footer-text'>
                    <div></div>
                    <p>Наша система отслеживает все переходы по сформированной для Вас ссылке</p>
                </div>
                <div className='ICO2__footer-text'>
                    <div></div>
                    <p style={{width: "706px"}}>Наша система осуществляет трекинг каждого приведенного Вами лида, включая целевые действия и фактически осуществленные покупки/транзакции</p>
                </div>
                <div className='ICO2__footer-text'>
                    <div></div>
                    <p style={{width: "706px"}}>Вы регулярно сможете видеть свою статистику в разделе «Статистика по рефералам» в личном кабинете</p>
                </div>
                <div className='ICO2__footer-text'>
                    <div></div>
                    <p style={{width: "706px"}}>В этом же разделе Вы сможете воспользоваться функцией вывода вознаграждения, указав для этого номер соответствующего кошелька</p>
                </div>
                </div>

                <div className='ICO2__footer-button'>
                    <Link className='ICO2__footer-button-btn' to='/'>Присоединиться к программе</Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
