import React from 'react'
import './cards.style.css'
import { cards } from '../../data/cardsData'
import Card from './Card/card.component'
export default function Cards() {
  return (
    <div className='cards'>
        {cards.map((el) => {
            return(
                <Card data={el} />
            )
        })}
    </div>
  )
}
