import React from 'react'
import './App.css';

export default function Footer() {
  return (


    <footer style={{marginTop: "181px"}} className='footer'> 
    <div style={{display:"flex", justifyContent: "space-between", maxWidth: "1200px"}} className='footer__flex'>
      <div style={{ display: "flex", flexDirection: "column", }} className='footer__logo'>
        <div className='footer__logo-img'></div>
        <p style={{color: "#676666", fontSize: "14px", height: "1px"}}>Copyright © 2022</p>
        <p style={{color: "#676666", fontSize: "14px", height: "1px"}}>All Rights Reserved.</p>
      </div>

      <div className='footer__button'>
            <button style={{width: "96px", height: "42px", background: "rgba(103, 102, 102, 0.16)",}}> <span style={{color: "white", fontSize: "14px",}}>Войти</span></button>
            <button style={{marginLeft: "10px"}}><span>Создать аккаунт</span></button>
      </div>
    </div>

    <div className='footer__nav'>
      <a href='#'>МыКосмос</a>
      <a href='#'>Для ICO-инвесторов</a>
      <a href='#'>Для ICO-промоутеров</a>
      <a href='#'>CosmoCoin</a>
      <a href='#'>История</a>
      <a href='#'>Road Map</a>
      <a href='#'>Команда</a>
      <a href='#'>Новости</a>
      <a href='#'>Связаться с нами</a>
    </div>
</footer>

  )
}
