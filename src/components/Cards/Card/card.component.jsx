import React from 'react';
import '../cards.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCoins, faPercent } from '@fortawesome/free-solid-svg-icons';

export default function Card({ data }) {
  return (
    <div className='card'>
      <div className='card_logo_container'>
        <img src={data.photo} className='card_logo' alt='Card Logo' />
      </div>
      <div className='card_title_container'>
        <p className='card_title'>{data.title}</p>
      </div>
      <div className='card_texts_container'>
        <h1 className='card_up_to'>
          <FontAwesomeIcon icon={faPercent} className='card_icon' /> До{' '}
          {data.upTo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} <br /> рублей
        </h1>
        <p className='card_from'>
          <FontAwesomeIcon icon={faCoins} className='card_icon' /> от {data.from}% в день
        </p>
        <p className='card_from'>
          <FontAwesomeIcon icon={faCalendarCheck} className='card_icon' /> от {data.minAge} до {data.maxAge} лет
        </p>
        <a href={data.link} target='_blank' rel='noopener noreferrer'>
          <button className='card_btn'>Получить деньги</button>
        </a>
        <p className='card_tin'>
          Реклама.{data.advertising} ИНН {data.TIN}
        </p>
      </div>
    </div>
  );
}
