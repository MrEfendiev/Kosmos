import React from 'react'
import './App.css';

import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';



export default function () {
  return (
    <div className='Header_'>
        <header className="App-header">
          <div className='header__nav'>
              <div className='nav__link'>
                <div className='nav__link-img'>
                <Link to='/'>
                <div className='nav__img'></div>
                </Link>
                </div>
                <Dropdown/>
                <div className='nav__link-a'>
                <Link to='/' className='nav__link active'>МыКосмос</Link>
                <Link className='nav__Link' to='/ICO'>Для ICO-инвесторов</Link>
                <Link className='nav__Link' to='/ICOTOO' >Для ICO-промоутеров</Link>
                <Link className='nav__Link' to='/CosmoCoin'>CosmoCoin</Link>
                </div>
              </div>
              
              <div className='nav__auth'>
              <div className='auth__button'>
              <Link to="/Entrance" className='nav__link'>Войти</Link>
              </div>
              <div className='auth__button-too'>
              <Link to='/Registration' className='nav__link'>Создать аккаунт</Link>              
              </div>
            
              </div>
          </div>
      </header>
    </div>
  )
}
