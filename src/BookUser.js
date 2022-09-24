import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'
import Footer from './Footer'

function BookUser() {
  return (
    <div className='BookUser Container'>
        <PersonalArea/>
            <div className='BookUser__title'>
                <h1>Забронировать имя пользователя</h1>
            </div>
            <div className='BookUser__content'>
               <h2>В данном разделе Вы можете забронировать Имя пользователя, которое останется за Вами после запуска социальной сети «МыКосмос». Забронировать можно только один nickname</h2>
              <p>
                <span>Введите Имя пользователя, которое Вы хотите забронировать:</span> 
                Выбранный для социальной сети nickname может отличаться от Вашего имени пользователя на данном сайте.</p>
                <input />

                <div className='BookUser__Button'>
                    <Link className='BookUser__Button-link' to="/BookUserToo">Забронировать</Link>
                </div>
            </div>
    </div>
  )
}

export default BookUser