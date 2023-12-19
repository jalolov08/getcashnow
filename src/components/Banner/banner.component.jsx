import React from 'react'
import './banner.style.css'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ApplicationsProcessed from '../ApplicationsProcessed/applicationsProcessed.component';

export default function Banner() {
  return (
    <div className='banner'>
      <div className="banner_cont">
        <div>
          <a href='/'>  <img src={logo} className='logo' /></a>
          <h1 className='banner_title'>Деньги </h1>
          <span className='banner_subtitle'>получить онлайн</span>
          <div className='benefits'>
            <div className='benefit'>
              <FontAwesomeIcon icon={faCheck} fontSize={18} />
              <p className='benefit_text'>Без выходных</p>
            </div>
            <div className='benefit'>
              <FontAwesomeIcon icon={faCheck} fontSize={18} />
              <p className='benefit_text'>Без лишних проверок</p>
            </div>
            <div className='benefit'>
              <FontAwesomeIcon icon={faCheck} fontSize={18} />
              <p className='benefit_text'>С любой кредитной историей!</p>
            </div>
          </div>
        </div>
        <div className='application'>
          <ApplicationsProcessed />
        </div>
      </div>
    </div>
  )
}
