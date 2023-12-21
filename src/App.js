import React from "react";
import "./App.css";
import Banner from "./components/Banner/banner.component";
import Cards from "./components/Cards/cards.component";
import LoansTable from "./components/LoansTable/loansTable.component";
import FaqTabs from "./components/FaqTabs/faqTabs.component";
import FaqAccordion from "./components/FaqAccordion/faqAccordion.component";

function App() {
  return (
    <div className="App">
      <Banner />
      <Cards />
      <LoansTable />
        <FaqTabs />
        <FaqAccordion />
    </div>
  );
}

export default App;
