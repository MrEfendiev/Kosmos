import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

import { useForm } from "react-hook-form";
import axios from './axios';
import { Axios } from 'axios';

const Registration = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordlDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

    const emailHandler = (e) => {
        setEmail(e.target.value)
       
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;        
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Неккоректный емайл')
        } else { 
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value) 
        if (e.target.value.length < 9 || e.target.length > 30) {
            setPasswordError('Пароль должен быть длинее 9 и меньше 30')
            if(!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmailDirty(true)
                break

                case 'password':
                setPasswordDirty(true)
                break

        }
    }


    const [status, setStatus] = useState('signIn')


    const signUpHandler = (e) => {
        console.log(e.target[0].value)
        console.log(e.target[1].value)
    }

    const signInHandler = (e) => {
        
        axios.post('/posts', {
            name: e.target[0].value, 
            email: e.target[1].value,
            password: e.target[2].value,
            passwordToo: e.target[3].value,
            Username: e.target[4].value,
        }).then((res) => { 
             console.log(res.data)
             e.target[0].value = ''
             e.target[1].value = ''
             e.target[2].value = ''
             e.target[3].value = ''
             e.target[4].value = ''
        }).catch(err => alert(err))
    }


  return (
    <div className='Registration Container'>
        <Link to="/" className='Registration__logo'>
            <div className='Registration-logo__image'></div>
        </Link>
        <div className='Registration__flex'>
            <div className='Registration__flex-img-block'>
                <div className='Registration__flex-img'></div>
            </div>


            <form onSubmit={(e) => {
                    e.preventDefault()
                    if (status === 'signIn') {
                        signInHandler(e)
                    } else {
                        signUpHandler(e)
                    }
                }} className='Registration__flex-form'>
                <h3>Регистрация в МыКосмос - ICO</h3>
                <p>Зарегистрируйтесь на портале МыКосмос для покупки CosmoCoin и участия в реферальной программе</p>


                <div className='Registration__flex-input'>
                <input placeholder='Имя'></input>


                <input type="email" onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' placeholder='E-mail'></input>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}


                <input type="password" onChange={e => passwordHandler(e )} value={password} onBlur={e => blurHandler(e)} name='password' placeholder='Password'/>
                {(passwordlDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                      

                <input type="password" placeholder='Подтверждение пароля'></input>
                <input placeholder='Имя пользователя'></input>
                </div>
                <p>Я согласен с политикой конфиденциальности и испольования персональных данных</p>
                    <div className='Registration__flex-button'>
                        <button to="/" type='submit' className='Registration__Link'>Создать Аккаунт</button>
                    </div>
            </form>


        </div>
    </div>
  )
}


export default Registration