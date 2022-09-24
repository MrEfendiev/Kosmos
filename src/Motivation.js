import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'

function Motivation() {
  return (
    <div className='Motivation Container'>
        <PersonalArea/>
        <div className='Motivation__title'>
            <h1>Ваша мотивация</h1>
        </div>
        <div className='Motivation__content'>
            <h2>Информация о начислениях и выводе мотивации:</h2>
            <div className='Motivation__content-table'>
                <div className='Motivation__table-block-one'>
                    <div className='Motivation__table-block-one-flex'>
                        <p>Валюта</p>
                        <p>Сумма</p>
                        <p>Мотивация</p>
                        <p>К выводу</p>
                        <p>Переведено</p>
                        <p>Остаток</p>
                        <p>Вывести</p>
                    </div>
                </div>
                <div className='Motivation__content-table-backround-block'>
                    <div className='Motivation__content-table-backround'></div>
                </div>
                <div className='Motivation__table-block-too'>
                    <div className='Motivation__table-block-too-flex'>
                        <div className='Motivation__table-child-block'>
                            <p>BTC</p>
                            <p>1.317411</p>
                            <p>1.3174112</p>
                        </div>
                        <div className='Motivation__table-child-block-too'>
                            <p>1.3174112</p>
                            <div className='Motivation__table-block-button'>
                                <Link className='Motivation__table-block-button-Link' to="/BTC">Вывести BTC</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Motivation__content-table-backround-block'>
                    <div className='Motivation__content-table-backround'></div>
                </div>
                <div className='Motivation__table-block-too'>
                    <div className='Motivation__table-block-too-flex'>
                        <div className='Motivation__table-child-block'>
                            <p>BTC</p>
                            <p>1.317411</p>
                            <p>1.3174112</p>
                        </div>
                        <div className='Motivation__table-child-block-too'>
                            <p>1.3174112</p>
                            <div className='Motivation__table-block-button'>
                                <Link className='Motivation__table-block-button-Link' to="/ETH">Вывести ETH</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Motivation__content-table-backround-block'>
                    <div className='Motivation__content-table-backround'></div>
                </div>
                <div className='Motivation__table-block-too'>
                    <div className='Motivation__table-block-too-flex'>
                        <div className='Motivation__table-child-block'>
                            <p>BTC</p>
                            <p>1.317411</p>
                            <p>1.3174112</p>
                        </div>
                        <div className='Motivation__table-child-block-too'>
                            <p>1.3174112</p>
                            <div className='Motivation__table-block-button'>
                                <Link className='Motivation__table-block-button-Link' to="/CSM">Вывести CSM</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Motivation