import React, { useState } from "react";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

const Dropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);
 
  const [backclick, setBackclick] = useState();

  

  return (
    <div className="Dropdown__container">
        <div onClick={() => setBackclick('click')} className={`Dropdown-btn__container ${backclick === 'click' && 'Dropdown-btn__container-backClick'}`}>
            <div onClick={toggleMenu} className="Dropdown__button"></div>
        </div>
      {isMenuOpen && (
        <div className="Dropdown__block">
            <div className="Dropdown-Link__backround">
                <Link className="Dropdown__Link" to="/Motivation" onClick={toggleMenu}>
                История
                </Link>
            </div>
            <div className="Dropdown-Link__backround">
                <Link className="Dropdown__Link" to="/RoapMap" onClick={toggleMenu}>
                Road Map
                </Link>
            </div>
            <div className="Dropdown-Link__backround">
                <Link className="Dropdown__Link" to="/Team" onClick={toggleMenu}>
                Команда
                </Link>
            </div>
            <div className="Dropdown-Link__backround">
                <Link className="Dropdown__Link" to="/Novosti" onClick={toggleMenu}>
                Новости
                </Link>
            </div>
            <div className="Dropdown-Link__backround">
                <Link className="Dropdown__Link" to="/Contacts" onClick={toggleMenu}>
                Контакты
                </Link>
            </div>
        </div>
      )}

    </div>
   
  );
};

export default Dropdown;