import React from 'react'
import { Link } from 'react-router-dom'
import PersonalArea from './ PersonalArea'
import BookUser from './BookUser'

function BookUserToo() {
  return (
    <div className='BookUserToo Container'>
        <PersonalArea/>
        <div className='BookUserToo__tile'>
            <h1>Забронировать имя пользователя</h1>
        </div>
        <div className='BookUserToo__content'>
            <h2>Имя пользователя <span>Anatoly_9381</span> забронировано Вами</h2>
            <p>При желании, Вы можете изменить его, нажав на «Изменить». Необходимо учитывать, что в случае изменения, бронь на изначальное имя будет снята</p>
            <div className='BookUserToo__Button'>
                <Link className="BookUserToo__Button-Link" to="/BookUser">Изменить забронированное имя пользователя</Link>
            </div>
        </div>
    </div>
  )
}

export default BookUserToo