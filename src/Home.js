import React from 'react';
import './App.css';
import  App  from './App'
import Header from './Header';
import Footer from './Footer';
import Slaider from './Slaider';
import Carousel from './Carousel';
import Sliiider from './Sliiiider';
import { Link } from 'react-router-dom';

// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
//   window.addEventListener('scroll'. animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItems.offsetHeight;
//       const animIteOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;

//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if ((YOffset > animIteOffset - animItemPoint) && pageYOffset < (animIteOffset + animItemHeight)) {
//         animItem.classList.add('_active');
//       }else {
//         animItem.classList.remove('_acitve');
//       }
//     }
//   }

//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
//   }
// }

const Auth = () => {
  return (
    <div className="App">
      <Header/>
      <div className='home__header'>
      <div className='header__blocks'>
           
            <div className='header__blocks-one'>
            <div className='header-block__img'></div>
            <div className='header-block__imgToo'></div>
              <div className='header-block__text'>
                  <p>Первый в мире проект, соединяющий в себе все востребованные современной аудиторией форматы и задающий тренды на будущее</p>
              </div>
              <div className='header-block__button'>
                <a href='#'>Создать аккаунт</a>
              </div>
            </div>
              <div className='header__blocks-too'>
                <div className='header__blocks-too-img'>
                    <div className='blocks__image'></div>
                </div>
              </div>
            
          </div>
      </div>
      <main className='main'> 
            <div className='main__down'>
                <p>Листай вниз</p>
                <div className='down__img'></div>
            </div>

            <div style={{marginTop: "133px"}} className='main__title'>
                <h1>Структура социальной сети</h1>
                <p>Социальная сеть «МыКосмос» будет состоять из следующих функциональных разделов и элементов:</p>
            </div>

            <div className='Sliiider'>
              <Sliiider/>

            </div>
            

              <div className='main__auditoria'>
                <div className='auditoria__title'>
                    <h2>Аудитория социальной сети</h2>
                    <p>Проект не ограничивается идеей взаимодействия исключительно с частными пользователями. Он также ориентирован на блогеров, оформляющих свою деятельность в формате юридических лиц, а также на любые форматы бизнеса. Возможные форматы регистрации, предусмотренные проектом МыКосмос, включают в себя:</p>
                </div>

                  <div className='auditoria__blocks'>
                    <div className='auditoria__flex'>
                        <div className='auditoria__user'>
                            <div className='auditoria__img-1'></div>
                              <h3>Частный аккаунт</h3>
                              <p>Для физических лиц</p>
                        </div>
                        <div className='auditoria__user'>
                            <div className='auditoria__img-2'></div>
                              <h3>Сообщество</h3>
                              <p className='auditoria__text'>Для аккаунтов, создающихся вокруг какого-либо интереса или категории контента</p>
                        </div>
                        <div className='auditoria__user'>
                            <div className='auditoria__img-3'></div>
                              <h3>Бизнес аккаунт</h3>
                              <p>Для юридических лиц</p>
                        </div>
                    </div>
                  </div>
              </div>
             
             <div className='Goals'>
                        <div className='Goals__title _anim-items'> 
                          <h2>Стратегические цели проекта</h2>
                          <p>На текущий момент командой МыКосмос сформулированы три основные стратегические задачи, имеющие отношение к дальнейшему развитию проекта:</p>
                    </div>

                    <div style={{marginTop: "50px"}} className='Goals__blokcs'>
                          <div className='Goals__blokcs-flex'>

                            <div className='Goals__blokc'>
                              <div className='Goals__blokc-img-1'></div>
                              <h3 style={{fontSize: "18px", color: "#FFFFFF", fontFamily: "Gilroy"}}>Масштабирование</h3>
                              <p style={{width: "345px", color: "#676666", fontSize: "14px", textAlign: "center",}}>Вывод социальной сети на международный уровень, глобальное продвижение и охват новой аудитории <span style={{color: "#5F4BD9",}}>за пределами русскоязычного сегмента.</span></p>
                            </div>

                            <div className='Goals__blokc'>
                              <div className='Goals__blokc-img-2'></div>
                              <h3 style={{fontSize: "18px", color: "#FFFFFF", fontFamily: "Gilroy"}}>Cosmo-Coin 2.0</h3>
                              <p style={{width: "317px", color: "#676666", fontSize: "14px", textAlign: "center",}}>Запуск новой криптовалюты, создаваемой на основе принципа <span style={{color: "#5F4BD9",}}> Proof of Work.</span> Выпуск собственных карт для майнинга. Запуск процесса <span style={{color: "#5F4BD9",}}>Token Swap,</span> подразумевающий справедливый обмен и полное замещение изначальной Cosmo-Coin.</p>
                            </div>
                            
                            <div className='Goals__blokc'>
                              <div className='Goals__blokc-img-3'></div>
                              <h3 style={{fontSize: "18px", color: "#FFFFFF", fontFamily: "Gilroy"}}>Мета-вселенная</h3>
                              <p style={{width: "345px", color: "#676666", fontSize: "14px", textAlign: "center",}}>Создание нового захватывающего цифрового мира, реализованный с использованием технологии <span style={{color: "#5F4BD9",}}>Blockchain/WEB 3.0,</span> в котором пользователи смогут жить полноценной виртуальной жизнью..</p>
                            </div>

                          </div>
                    </div>
             </div>
      </main>

                  <Footer/>
        </div>
        
        
  )
}

export default Auth