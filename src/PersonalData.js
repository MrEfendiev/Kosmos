import React from 'react'
// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'

const PersonalData = () => {

    
    

  return (
    <div className='PersonalData Container'>
        <PersonalArea/>
        <div className='PersonalData__title'>
            <h1>Личные данные</h1>
        </div>
        <div className='PersonalData__content'>
            <h2>В данном разделе Вы можете поменять изначально указанные данные</h2>

            <div className='PersonalData__form'>
                <div className='PersonalData__input'>
                    <div className='PersonalData__input-block'>
                        <p>Имя:</p>
                        <input />
                    </div>
                    <div className='PersonalData__input-block'>
                        <p>Имя пользователя:</p>
                        <input />
                    </div>
                </div>
                <div className='PersonalData__form-Button'>
                    <Link className='PersonalData__form-Button-Link' to="">Сохранить</Link>
                </div>
                <div className='PersonalData__input'>
                    <div className='PersonalData__input-block'>
                        <p>Текущий E-mail:</p>
                        <input />
                    </div>
                    <div className='PersonalData__input-block'>
                        <p>Имя Новый E-mail:</p>
                        <input />
                    </div>
                </div>
                <div className='PersonalData__form-Button'>
                    <Link className='PersonalData__form-Button-Link' to="">Сменить</Link>
                </div>
                <div className='PersonalData__input'>
                    <div className='PersonalData__input-block'>
                        <p>Текущий пароль:</p>
                        <input />
                    </div>
                    <div className='PersonalData__input-block'>
                        <p>Новый E-mail:</p>
                        <input />
                    </div>
                </div>
                <div className='PersonalData__form-Button'>
                    <Link className='PersonalData__form-Button-Link' to="">Сохранить</Link>
                </div>
                <div className='PersonalData__input PersonalData__input-flex'>
                    <div className='PersonalData__input-block'>
                        <p>Текущий пароль:</p>
                        <input />
                    </div>
                    <div className='PersonalData__input-block'>
                        <p>Новый пароль:</p>
                        <input />
                    </div>
                    <div className='PersonalData__input-block'>
                        <p>Новый пароль - повторно:</p>
                        <input />
                    </div>
                </div>
                <div className='PersonalData__form-Button'>
                    <Link className='PersonalData__form-Button-Link' to="">Сохранить</Link>
                </div>
                <div className='PersonalData__input'>
                    <div className='PersonalData__input-block'>
                        <p>Текущее имя пользователя МК:</p>
                        <input />
                    </div>
                    <div className='PersonalData__input-block'>
                        <p>Текущее имя пользователя МК:</p>
                        <input />
                    </div>
                </div>
                <div className='PersonalData__form-Button'>
                    <Link className='PersonalData__form-Button-Link' to="">Сохранить</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalData