import React from 'react'
import Registration from './Registration'
import { Link } from 'react-router-dom'

export default function Entrance() {
  return (
    <div className='Entrance'>
        <div className='Registration Container'>
        <Link to="/" className='Registration__logo'>
            <div className='Registration-logo__image'></div>
        </Link>
        <div className='Registration__flex'>
            <div className='Registration__flex-img-block'>
                <div className='Registration__flex-img'></div>
            </div>
            <div className='Registration__flex-form Entrance__flex-form'>
                <div className='Entrance__flex-form-text'>
                <h3>Вход в личный кабинет</h3>
                <p>Нет аккаунта? <Link style={{color: "#5F4BD9", fontSize: "14px",}} to="/Registration">Создать аккаунт</Link></p>
                </div>
                <div className='Registration__flex-input Entrance__flex-input'>
                <input placeholder='Имя пользователя'></input>
                <input placeholder='Пароль'></input>
                </div>
                <div className='Entrance__flex-button'>
                    <Link className='Registration__Link' to='/PersonalArea'>Вход</Link>
                </div>
                <Link style={{color: "#5F4BD9", fontSize: "14px", marginTop: "14px",}} to="/">Забыли пароль или имя пользователя?</Link>
            </div>
        </div>
    </div>    </div>
  )
}
