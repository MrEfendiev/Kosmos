import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PersonalArea from './ PersonalArea'
import Motivation from './Motivation'

const ConclusionMotivation = () => {

   

    const [isMenuOpeToo, setIsMenuOpenToo] = useState(false);
    const toggleBlockToo = () => setIsMenuOpenToo((isOpen) => !isOpen);

  return (
    <div className='ConclusionMotivation Container'>
        <Motivation/>
        <div className='ConclusionMotivation__title'>
            <h1>Реестр транзакций на вывод:</h1>
        </div>
        <div className='ConclusionMotivation__content-table'>
                <div className='Motivation__table-block-one'>
                    <div className='Motivation__table-block-one-flex'>
                        <p>Дата</p>
                        <p>Кошелёк</p>
                        <p>Валюта</p>
                        <p>Сумма</p>
                        <p>Статус</p>
                    </div>
                </div>
                <div className='Motivation__content-table-backround-block'>
                    <div className='Motivation__content-table-backround'></div>
                </div>
                <div className='Motivation__table-block-too'>
                    <div className='Motivation__table-block-too-flex'>
                        <div className='Motivation__table-child-block ConclusionMotivation-table-child-block'>
                            <p style={{width: "1px"}}>22/04/2022 22:22</p>
                            <p style={{width: "1px", position: "relative", left: "-20px"}}>0xD6C9f181....</p>
                            <p  style={{width: "1px"}}>BTC</p>
                            <p>0.003431</p>
                            <p style={{width: "111px", color: "#FCC958"}}>На проверке</p>
                        </div>
                    </div>
                </div>
                <div className='Motivation__content-table-backround-block'>
                    <div className='Motivation__content-table-backround'></div>
                </div>
                <div className='Motivation__table-block-too'>
                    <div className='Motivation__table-block-too-flex'>
                        <div className='Motivation__table-child-block ConclusionMotivation-table-child-block'>
                            <p style={{width: "1px"}}>22/04/2022 22:22</p>
                            <p style={{width: "1px", position: "relative", left: "-20px"}}>0xD6C9f181....</p>
                            <p  style={{width: "1px"}}>BTC</p>
                            <p>0.003431</p>
                            <p style={{width: "111px", color: "#FCC958"}}>На проверке</p>
                        </div>
                    </div>
                </div>
                <div className='Motivation__content-table-backround-block'>
                    <div className='Motivation__content-table-backround'></div>
                </div>
                <div className='Motivation__table-block-too'>
                                    <div className='Motivation__table-block-too-flex' style={{width: "1140px"}}>
                                    <div style={{marginLeft: "20px"}} className='Motivation__table-child-block ConclusionMotivation-table-child-block'>
                                    <p style={{width: "1px"}}>22/04/2022 22:22</p>
                                    <p style={{width: "1px", position: "relative", left: "10px"}}>0xD6C9f181....</p>
                                    <p  style={{width: "1px", marginLeft: "37px", position: "relative", left: "20px"}}>BTC</p>
                                    <p style={{marginLeft: "37px", position: "relative", left: "10px"}}>0.003431</p>
                                    <div style={{position: "relative", left: "40px"}} className=''>
                                            <p style={{width: "150px", color: "#CE2E2E"}}>Отклонено</p>
                                            <div onClick={toggleBlockToo} style={{display: "flex",height: "1px", marginTop: "0px", cursor: "pointer"}}>
                                                <a style={{height: "1px", 
                                            fontFamily: "Gilroy",
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "18px",
                                            lineHeight: "140%",
                                            color: "#FFFFFF",
                                            }}>подробнее</a>
                                                <div style={{marginLeft: "8px"}} className='Wallet__middle-table-Arrow'></div>
                                            </div>
                                        </div>     

                                        </div>  
                                      

                                    </div>
                                </div>
                                {isMenuOpeToo && (
                                                <div className='Wallet__middle-toggleBlock-too ConclusionMotivation__middle-toggleBlock-too-flex'>
                                                    <div className='Wallet__middle-toggleBlock-too-text ConclusionMotivation__middle-toggleBlock-too'>
                                                        <div className='Wallet__middle-toggleBlock-too-title'>
                                                            <h2>Комментарий МыКосмос:</h2>
                                                            <p>Комментарий МыКосмос:</p>
                                                        </div>
                                                    </div>

                                                    <div className='Wallet__middle-toggleBlock-button ConclusionMotivation__toggleBlock-button'>
                                                        <div style={{background: "#2E2D2D"}}><Link className='middle-toggleBlock__Link' to="/">Связаться с нами</Link></div>
                                                    </div>
                                                </div>
                                            )}
            </div>
    </div>
  )
}

export default ConclusionMotivation