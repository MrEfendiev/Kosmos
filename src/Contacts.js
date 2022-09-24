import React from 'react'
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { Link } from "react-router-dom";


export default function Contacts() {
  return (
    <div className='Contacts'>
        <Header/>
    <div className='Contacts__Container Container'>
        <div className='Contacts__block'>
            <div className='Contacts__block-title'>
                <h2>Контакты</h2>
                <p>И вы готовы стать нашим информационным партнером на этапе проведения DO</p>
            </div>
            <div className='Contacts__content'>
                <div className='Contacts__content-form'>
                    <input className='Contacts__content-input-1' placeholder='Имя'></input>
                    <input className='Contacts__content-input-2' placeholder='E-mail'></input>
                    <input className='Contacts__content-input-3' placeholder='Сообщение'></input>
                    <div className='Contacts__content-button'>
                        <a href='#'>Отправить</a>
                    </div>
                </div>
                <div className='Contacts__content-background'></div>
                <div className='Contacts__content-info'>
                    <h2>Информация</h2>
                    <div className='Contacts__content-Social'>
                        <div className='Contacts__content-icon'></div>
                        <div>Sadykovbros@gmail.com</div>
                    </div>
                    <div className='Contacts__content-Social'>
                        <div className='Contacts__content-icon-2'></div>
                        <div>+7 923-433-12-12</div>
                    </div>
                    <div className='Contacts__content-icons'>
                        <div className='Contacts__content-instagram'></div>
                        <div className='Contacts__content-Vk'></div>
                        <div className='Contacts__content-Telegram'></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <Footer/>
</div>
  )
}
