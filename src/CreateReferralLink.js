import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'
import Footer from './Footer'

function CreateReferralLink() {
  return (
    <div className='CreateReferralLink Container'>
        <PersonalArea/>
        <div className='CreateReferralLink__title'>
            <h1>Создать реферальную ссылку</h1>
        </div>
        <div className='CreateReferralLink__content'>
            <div className='CreateReferralLink__content-text'>
                <p>В данном разделе Вы можете помочь команде МыКосмос с продвижением IDO. Для этого Вы можете создать в данном разделе свою собственную реферальную ссылку или несколько ссылок и распространять их. Мы готовы поддержать данную помощь дополнительной мотивацией:</p>
            </div>
            <div className='CreateReferralLink__content-block'>
                <div className='CreateReferralLink__content-block-flex'>
                    <div className='CreateReferralLink__block-bg'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='CreateReferralLink__content-block-text'>
                        <p><span style={{color: "#5F4BD9"}}>5%</span>в BTC или ETH от суммы покупок CosmoCoin Вашими рефералами</p>
                        <p>или</p>
                        <p> <span style={{color: "#5F4BD9"}}>7%</span> в CSM от суммы покупок CosmoCoin Вашими рефералами в зависимости от того, какой вариант интереснее для Вас</p>
                    </div>
                </div>
                <p style={{
                    marginLeft: "30px",
                    fontFamily: 'Gilroy',
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "140%",
                    color: "#676666",
                }}>* - начисление и выплата производится в валюте платежа реферала</p>
            </div>

                    <div className='CreateReferralLink__content-middle'>
                        <h2>Создать реферальную ссылку:</h2>
                        <div className='CreateReferralLink__middle-form'>
                            <p> <span>Укажите название канала распространения (необязательно):</span>
                            ( Если используете несколько ссылок – будет легче анализировать эффективность в разделе статистике )</p>
                            <input />
                            <p> <span>Укажите ссылку на канал распространения (необязательно):</span>
                            ( Если используете несколько ссылок - сможете быстрее контролировать рекламные интеграции )</p>
                            <input/>
                            <p>Укажите тип мотивации (обязательно):</p>
                            <select>

                                <option className='CreateReferralLink__middle-option'><p>Выберите вашу мотивацию</p></option>
                                <option className='CreateReferralLink__middle-option'><p>Off - мотивация отсутствует</p></option>
                                <option className='CreateReferralLink__middle-option'>BTC/ETH 5% - мотивация 5% в биткойне или эфириуме</option>
                                <option className='CreateReferralLink__middle-option'>CSM 7% - мотивация 7% в CosmoCoin</option>
                            </select>
                            <div className='CreateReferralLink__middle-button'>
                                <Link className='CreateReferralLink__middle-Link' to="/">Сгенерировать ссылку</Link>
                            </div>
                        </div>
                        <h2
                        style={{
                            marginTop: "90px",
                        }}>Реестр реферальных ссылок:</h2>
                        <p
                        style={{
                            fontFamily: 'Gilroy',
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "18px",
                            lineHeight: "140%",
                            color: "#676666",
                        }}>В данный момент Вы не создали ни одной реферальной ссылки.</p>
                    </div>
        </div>
        <Footer/>
    </div>
  )
}


export default CreateReferralLink