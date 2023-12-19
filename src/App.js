import React from 'react';
import './App.css';
import Banner from './components/Banner/banner.component';
import Cards from './components/Cards/cards.component';
import LoansTable from './components/LoansTable/loansTable.component';

function App() {
  return (
    <div className="App">
    <Banner />
    <Cards />
    <LoansTable />
    </div>
  );
}

export default App;
