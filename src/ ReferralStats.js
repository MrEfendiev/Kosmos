import React from 'react'
import PersonalArea from './ PersonalArea'
import Footer from './Footer'

function  ReferralStats() {
  return (
    <div className='ReferralStats Container'> 
        <PersonalArea/>
        <div className='ReferralStats__body'>
            <div className='ReferralStats__title'>
                <h1>Статистика по рефералам</h1>
            </div>
            <div className='ReferralStats__content'>
                <h2>Вы не создавали реферальных ссылок</h2>
                <p>После их создания в разделе «Реферальные ссылки», здесь появится статистика переходов, конверсий и транзакций по ним.</p>
            </div>
        </div>
    </div>
  )
}

export default  ReferralStats