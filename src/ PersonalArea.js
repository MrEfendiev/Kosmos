import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';




    const PersonalArea = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

        const [active, setActive] = useState('signIn');

        const [activetest, setActivetest] = useState(false)
        
  return (
    <div className='PersonalArea'> 
        <div className='Header_'>
        <header className="App-header">
          <div className='header__nav PersonalArea__nav'>
              <div className='nav__link'>
                <div className='nav__link-img'>
                <Link to='/'>
                <div className='nav__img'></div>
                </Link>
                </div>
                <Dropdown/>
                <div className='nav__link-a PersonalArea-nav__Link'>
                <Link style={{width: "150px"}} to='/' className='nav__link active'>Cosmo-кошелек</Link>
                <Link style={{width: "193px"}} className='nav__Link' to='/BuyCosmoCoin'>Купить CosmoCoin</Link>
                <Link style={{width: "232px"}} className='nav__Link' to='/CreateReferralLink'>Создать реферальную ссылку</Link>
                <Link style={{width: "208px"}} className='nav__Link' to='/ReferralStats'>Статистика по рефералам</Link>
                </div>
              </div>
                <div className='PersonalArea__Account'>
                    <div className='PersonalArea__Account-flex'>
                        <div></div>
                       <div onClick={toggleMenu} className='PersonalArea__Account-text'>
                        <p onClick={() => setActive('signUp')} className={`dkjckdjckdjckjd ${ active === 'signUp' && 'active__popup'}`}>MadFan071099</p>
                      </div>
                    </div>
                    {isMenuOpen && (
                    <div className='PersonalArea__toggleMenu'>
                     <div className='PersonalArea__toggleMenu-background'>
                        <div className='PersonalArea__toggleMenu-block-one'>
                        <h3>Sa***@gmail.com</h3>
                        <div className='PersonalArea__toggleMenu-block-one-icons'>
                            <div className='PersonalArea-icon-1 PersonalArea-icon-active'></div>
                            <div><Link className='PersonalArea__Link' to="/CosmoWallet">Cosmo-кошелек</Link></div>
                        </div>
                        <div className='PersonalArea__toggleMenu-block-one-icons'>
                            <div className='PersonalArea-icon-2 PersonalArea-icon-active'></div>
                            <div><Link className='PersonalArea__Link' to="/BuyCosmoCoin">Купить CosmoCoin</Link></div>
                        </div>                        
                        <div className='PersonalArea__toggleMenu-block-one-icons'>
                            <div className='PersonalArea-icon-3 PersonalArea-icon-active'></div>
                            <div><Link className='PersonalArea__Link' to="/CreateReferralLink">Создать реферальную ссылку</Link></div>
                        </div>                 
                        <div className='PersonalArea__toggleMenu-block-one-icons'>
                            <div className='PersonalArea-icon-4 PersonalArea-icon-active'></div>
                            <div><Link className='PersonalArea__Link' to="/ReferralStats">Статистика по рефералам</Link></div>
                        </div>  
                        <div className='PersonalArea__toggleMenu-block-one-icons'>
                            <div className='PersonalArea-icon-5 PersonalArea-icon-active'></div>
                            <div><Link className='PersonalArea__Link' to="/BookUser">Забронировать имя пользователя</Link></div>
                        </div>        
                        <div className='PersonalArea__toggleMenu-block-one-icons'>
                            <div className='PersonalArea-icon-6'></div>
                            <div><Link className='PersonalArea__Link PersonalArea-icon-active' to="/PersonalData">Личные данные</Link></div>
                        </div>   
                        </div>

                        <div className='PersonalArea__toggleMenu-block-three'></div>
                        
                        <div className='PersonalArea__toggleMenu-block-too'>
                            <div className='PersonalArea-icon PersonalArea-icon-active'></div>
                             <div>
                                <Link className='PersonalArea-icon-Link' to='/PersonalArea'>Выйти</Link>
                                </div>
                        </div>

                        </div>
                    </div>
                    )}
                </div>
          </div>
      </header>
    </div>
                    


                    



    </div>
  )
}
export default PersonalArea;