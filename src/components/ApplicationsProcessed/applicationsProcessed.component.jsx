import React from 'react'
import './applicationsProcessed.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export default function ApplicationsProcessed() {
    return (
        <div className='applications'>
            <div className='nums'>
                <div className='num_cont'>
                    <p className='num'>4</p>
                </div>
                <div className='num_cont'>
                    <p className='num'>0</p>
                </div>
                <div className='num_cont'>
                    <p className='num'>9</p>
                </div>
            </div>
            <div className='applications_text'>
            <p className='today'>cегодня</p>
            <p className='processed'>Обработано заявок</p>
            </div>
            <div className='circle_check'>
            <FontAwesomeIcon icon={faCheck} fontSize={24} color='#fff' />

            </div>
        </div>
    )
}
