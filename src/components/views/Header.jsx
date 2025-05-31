import React from 'react';
import {Link} from 'react-router';


export default function Header({tgBotLink}) {


   return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">ButterBreadAI</Link>
        <nav>
          <Link className='secondary-button' to="/">Главная</Link>
          <Link className='secondary-button' to="/pricing">Подписка</Link>
          <a target="_blank" href={tgBotLink} className="cta-button text-white tg-bot_link">Перейти в бота</a>
        </nav>
       
      </div>
    </header>
  );
}
