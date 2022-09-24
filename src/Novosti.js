    import React from 'react'
    import Footer from './Footer'
    import Header from './Header'
    import './App.css';

    export default function Novosti() {
    return (
        <div className='Novosti'>
            <Header/>
            <div className='Novosti__Container Container'>
            <div className='Novosti__title'>
                <h1>Новости</h1>
            </div>
            <div className='Novosti__block'>
                <div className='Novosti__block-flex'>
                <div className='Novosti__block-title'>
                <h3>Right Outdoor Media</h3>
                <p>В данный момент наш департамент маркетинга завершает разработку стратегии продвижения социальной сети «МыКосмос» и медиа-планирование 2022-2023. Параллельно с этим, компания определяется с ключевым партнером для реализации данной стратегии. <br/> <br/> В рамках этого процесса сегодня состоялась встреча с топ-менеджментом известного рекламного агентства «Right Outdoor Media», специализирующегося на наружной рекламе и интеграциях в наиболее значимые бизнес-форумы и мероприятия. В частности, в их портфеле:</p>
                <div className='Novosti__block-text'>
                    <div className='Novosti__block-background'></div>
                    <p className='Novosti__block-div-text'>Международный Экономический Форум в Санкт-Петербурге</p>
                </div>
                <div className='Novosti__block-text'>
                    <div className='Novosti__block-background'></div>
                    <p className='Novosti__block-div-text'>Дальневосточный Экономический Форум</p>
                </div>
                <div className='Novosti__block-text'>
                    <div className='Novosti__block-background'></div>
                    <p className='Novosti__block-div-text'>Многолетнее партнерство и информационное сотрудничество со Skolkovo</p>
                </div>
                <div className='Novosti__block-text-ab'>
                <p style={{width: "1086px",}}>Мы обсудили возможные варианты и условия сотрудничества и, в итоге, достигли предварительных договоренностей по некоторым из направлений. На следующую неделю запланирована повторная встреча, на которой уже более детально будут обсуждены наиболее актуальные и эффективные форматы для продвижения, а также конкретные сроки рекламной кампании.Будем держать вас в курсе событий.</p>
                </div>
                </div>
                <div className='Novosti__block-image'>
                    <div className='Novosti__block-img'></div>
                </div>
                </div>
            </div>
                
            </div>
            <Footer/>
        </div>
    )
    }
