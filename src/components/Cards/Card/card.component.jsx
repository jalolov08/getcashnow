import React from 'react';
import '../cards.style.css';

export default function Card({ data }) {
    return (
        <div className='card'>
            <div className='card_logo_container'>
                <img src={data.photo} className='card_logo' />
            </div>
            <div className='card_title_container'>
                <p className='card_title'>{data.title}</p>
            </div>
            <div className='card_texts_container'>
                <h1 className='card_up_to'>До {data.upTo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} <br /> рублей </h1>
                <p className='card_from'>от {data.from}% в день</p>
                <p className='card_from'>от {data.minAge} до {data.maxAge} лет</p>
                <a href={data.link} target='__blank'>
                    <button className='card_btn'>
                        Получить деньги
                    </button>
                </a>
                <p className='card_tin'>Реклама.{data.advertising} ИНН {data.TIN}</p>
            </div>

        </div>
    );
}
