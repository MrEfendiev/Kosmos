import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import './Slider.css';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="Slider__contaienr Container">
            <div className="Slider">
                <div className="Slider__blocks">
                    <div className="Slider__block-one">
                        <h3>Стандартные публикации</h3>
                        <p>Позволяют размещать фото-контент и короткие видео, как в единичном экземпляре, так и до 11 элементов одновременно.</p>
                    </div>
                    <div className="Slider__block-too">
                        <div className="Slider__img"></div>
                    </div>
                    <div className="Slider__block-three">
                        <div className="Slider__block-three-flex">
                        <h3>Основные функции раздела:</h3>
                        <div className="Slider__block-three-text">
                            <div></div>
                            <div className="Slider__block-three-div-tex">Лайк, поделиться, сохранение в избранное</div>
                        </div>
                        <div className="Slider__block-three-text">
                            <div></div>
                            <div className="Slider__block-three-div-tex">Описание контента, хэштеги</div>
                        </div>
                        <div className="Slider__block-three-text">
                            <div></div>
                            <div className="Slider__block-three-div-tex">Комментарии (в том числе голосовые)</div>
                        </div>
                        <div className="Slider__block-three-text">
                            <div></div>
                            <div className="Slider__block-three-div-tex">Использовать метки</div>
                        </div>
                        <div className="Slider__block-three-text">
                            <div></div>
                            <div className="Slider__block-three-div-tex">Донат</div>
                        </div>
                        <div className="Slider__block-three-text">
                            <div></div>
                            <div className="Slider__block-three-div-tex">Продажа публикации </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}