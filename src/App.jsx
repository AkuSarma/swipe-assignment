import './App.css';
import React, { useState } from "react";
import Navigation from "./components/Navigation";

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);
  
  return (
    <div>
      <Navigation onTabChange={setCurrentTab} />
      {currentTab === 0 && <div>Invoices Tab Content</div>}
      {currentTab === 1 && <div>Products Tab Content</div>}
      {currentTab === 2 && <div>Customers Tab Content</div>}
    </div>
  );
};

export default App
