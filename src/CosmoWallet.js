import React from 'react'
import { Link } from 'react-router-dom';
import PersonalArea from './ PersonalArea';
import './App.css';
import Header from './Header';

export default function CosmoWallet() {
  return (
    <div className='CosmoWallet Container'>
            <PersonalArea/>
            <div className='CosmoWallet__Content'>
                 <div className='CosmoWallet__title'>
                    <h1>Cosmo-кошелек</h1>
                 </div>
                 <div className='CosmoWallet__block'>
                    <div className='CosmoWallet__block-flex'>
                        <h2>Начните создание своего личный крипто-кошелька в МыКосмос!</h2>
                        <p>Крипто-кошелек понадобится Вам для приобретения CosmoCoin, а также для начисления мотивации в случае участия в реферальной программе МыКосмос – IDO. Также он позволит получать доступ к информации о Вашем балансе</p>
                    <div className='CosmoWallet__block-button'>
                        <Link className='CosmoWallet__block-Link' to="/Wallet">Создать кошелек</Link>
                    </div>
                    </div>
                 </div>
            </div>
    </div>
  )
}
