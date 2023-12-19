import React, { useState } from 'react';
import './loansTable.style.css';
import { loanData } from '../../data/loansData';
import TableItem from './TableItem/tableItem.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownShortWide, faArrowUpShortWide } from '@fortawesome/free-solid-svg-icons';

export default function LoansTable() {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(criteria);
      setSortOrder('asc');
    }
  };

  const sortedData = () => {
    if (sortBy) {
      return loanData.slice().sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];

        if (sortOrder === 'asc') {
          return aValue - bValue;
        } else {
          return bValue - aValue;
        }
      });
    } else {
      return loanData;
    }
  };

  const renderSortIcon = (column) => {
    if (sortBy === column) {
      return sortOrder === 'asc' ? (
        <FontAwesomeIcon icon={faArrowUpShortWide} />
      ) : (
        <FontAwesomeIcon icon={faArrowDownShortWide} />
      );
    }
    return null;
  };

  return (
    <div className='loans_table'>
      <div className='table_tabs'>
        <div className="table_tab">
          <p className='tab_name'>МФО</p>
        </div>
        <div className="table_tab" onClick={() => handleSort('sum')}>
          <p className='tab_name'>Сумма {renderSortIcon('sum')}</p>
        </div>
        <div className="table_tab" onClick={() => handleSort('inDay')}>
          <p className='tab_name'>Ставка в день {renderSortIcon('inDay')}</p>
        </div>
        <div className="table_tab" onClick={() => handleSort('maxAge')}>
          <p className='tab_name'>Возраст заемщика {renderSortIcon('maxAge')}</p>
        </div>
        <div className="table_tab">
          <p className='tab_name'>Заявки</p>
        </div>
      </div>
      {sortedData().map((item) => {
        return <TableItem data={item} />;
      })}
    </div>
  );
}
