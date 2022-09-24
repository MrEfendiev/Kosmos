import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './App.css';
import { Link } from 'react-router-dom';


export default function () {
  return (
    <div className='ICO'>
        <Header/>
        <div className='ICO__container'>
            <div className='ICO__title'>
                <h1>Для IСO-инвесторов</h1>
                <h2>Привлекательность проекта МыКосмос и сопряженной с ним CosmoCoin для потенциальных инвестиций определяется следующими основными факторами:</h2>
                <div className='ICO__margin'>
                <div className='ICO__text'>
                    <div className='ICO-background-block'></div>
                    <p>Финансовая устойчивость и независимость социальной сети МыКосмос от крипто-блока и крипто-инвестиций. Прогнозный срок выхода социальной сети на «операционный ноль» – 5 месяцев (без учета раундов ICO)</p>
                </div>
                <div className='ICO__text'>
                    <div className='ICO-background-block'></div>
                    <p>Высокий уровень диверсификации в проекте, определяемый наличием большого количества «фиатных» центров прибыли</p>
                </div>
                <div className='ICO__text'>
                    <div className='ICO-background-block'></div>
                    <p>Наличие экономически значимого потенциала рынка. Функционал проекта МыКосмос охватывает освободившиеся ниши рынка пользовательского внимания после блокировок и отключения инструментов монетизации альтернативными интернет-площадками</p>
                </div>
                <div className='ICO__text'>
                    <div className='ICO-background-block'></div>
                    <p>Наличие в проекте уникальных инструментов и технологий, не предлагаемых в данный момент ни одним из проектов</p>
                </div>
                <div className='ICO__text'>
                    <div className='ICO-background-block'></div>
                    <p>Прозрачность и легальность проекта. МыКосмос существует официально и полностью соответствует всем требованиям российского законодательства</p>
                </div>
                <div className='ICO__text'>
                    <div className='ICO-background-block'></div>
                    <p>Наличие долгосрочных перспектив. Проект «МыКосмос» не является однодневным и подкреплен четко сформулированной программой развития на ближайшие 10 лет</p>
                </div>
                <div className='ICO__button'>
                    <Link className='ICO-button__Link' to="/BuyCosmoCoin">Купить CosmoCoin</Link>
                </div>

                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
