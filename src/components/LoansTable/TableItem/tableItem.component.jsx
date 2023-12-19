import React from 'react'
import './tableItem.style.css'

export default function TableItem({ data }) {

  return (
    <div className='table_item'>
      <div className='table_row'>
        <img src={data.mfo} className='row_mfo' />
      </div>
      <div className='table_row'>
        <p className='row_sum'>{data.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}₽</p>
      </div>
      <div className='table_row'>
        <p className='row_inday'>от {data.inDay}% в день</p>
        <div className='row_badge'>
          <p className='badge_text'>{data.badge}</p>
        </div>
      </div>
      <div className='table_row'>
        <p className='row_age'>{data.minAge}-{data.maxAge}лет</p>
      </div>
      <div className='table_row'>
    <div style={{display:"flex",flexWrap:"wrap"}}>
    <a href={data.link}>
          <button className='row_btn'>Получить деньги</button>
        </a>
        <p className='row_advertising'>Реклама.{data.advertising} ИНН {data.TIN}</p>
    </div>
      </div>
    </div>
  )
}