import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './notice.style.css';
import ezaem from '../../assets/ezaem.png';

export default function Modal() {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <>
      {!isClosed && (
        <div className='notice'>
          <img src={ezaem} className='notice_img' />
          <div className='notice_texts'>
            <b className='notice_title'>Вам одобрят 30 000 под 0%!</b>
            <a href='/'>
              <p className='notice_desc'>
                Жмите, чтобы получить деньги <br />
                без отказов и проверок!
              </p>
            </a>
            <p className='notice_tin'>Реклама. ООО МФК«Веритас». ИНН 7706780186</p>
          </div>
          <FontAwesomeIcon icon={faTimes} className='close_icon' onClick={handleClose} />
        </div>
      )}
    </>
  );
}
