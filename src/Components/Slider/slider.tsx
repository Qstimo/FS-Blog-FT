import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
    slides: JSX.Element[]; // Принимаем массив JSX элементов для слайдов
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
};

const MySlider: React.FC<SliderProps> = ({ slides }) => {
    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index}>{slide}</div>
            ))}
        </Slider>
    );
}

export default MySlider;