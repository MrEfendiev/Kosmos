import React from 'react'
import './App.css';
import Footer from './Footer';
import Header from './Header';

export default function Team() {
  return (
    <div className='Team'>
        <div className='Team__container'>
            <Header/>
            <div className='Team__title'>
                <h2>Команда</h2>
            </div>
            <div className='Team__image'>
                <div className='Team__image-block'>
                    <div className='Team__image-block-img'></div>
                    <h3>Юровский Виктор </h3>
                    <p>Операционный директор</p>
                </div>
                <div className='Team__image-block'>
                    <div className='Team__image-block-img'></div>
                    <h3>Фороносов Дмитрий</h3>
                    <p>Руководитель направления токеномики</p>
                </div>
                <div className='Team__image-block'>
                    <div className='Team__image-block-img'></div>
                    <h3>Шаммедова Вероника  </h3>
                    <p>Руководитель юридического департамента</p>
                </div>
                <div className='Team__image-block'>
                    <div className='Team__image-block-img'></div>
                    <h3>Садыков Фаррух</h3>
                    <p>Руководитель направления дизайна</p>
                </div>
                <div className='Team__image-block'>
                    <div className='Team__image-block-img'></div>
                    <h3>Гаджисаидов Халид</h3>
                    <p>Руководитель направления разработки продукта</p>
                </div>
                <div className='Team__image-block'>
                    <div className='Team__image-block-img'></div>
                    <h3>Кулешова Ольга</h3>
                    <p>Руководитель клиентской службы</p>
                </div>
                <div className='Team__image-block'>
                    <div className='Team__image-block-img'></div>
                    <h3>Аитова Рената </h3>
                    <p>Руководитель направления разработки продукта</p>
                </div>
                <div className='Team__image-block'>
                    <div className='Team__image-block-img'></div>
                    <h3>Гаджисаидов Халид  </h3>
                    <p style={{width: "202px", textAlign: "center"}}>Руководитель направления разработки продукта</p>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}
