import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router';
import { PlanProvider } from './context';

import Header from './components/views/Header';
import Main from './components/pages/Main';
import Price from './components/pages/Price';
import Payment from './components/pages/Payment';
import Footer from './components/views/Footer';
import Style from './assets/css/style.css'

const tgBotLink = 'https://t.me/ButterBreadAI_bot?start=src=site';
const tgBotLinkSupport = 'https://t.me/pastalover69';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
}

function App() {
  return (
    
    <PlanProvider>
    <Router basename="/butter-bread-ai">
      <div className="app">
        <ScrollToTop />
        <Header tgBotLink={tgBotLink}/>
        <Routes>
          <Route path="/" element={<Main tgBotLink={tgBotLink} />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer tgBotLink={tgBotLink} tgBotLinkSupport={tgBotLinkSupport}/>
      </div>
    </Router>
    </PlanProvider>
  );
}


export default App;