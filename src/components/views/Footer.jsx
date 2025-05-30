import React from 'react'
import { Link } from 'react-router';

export default function Footer({tgBotLink, tgBotLinkSupport}) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>ButterBreadAI</h4>
            <p>Персональный AI-помощник <br /> для эффективного изучения языков</p>
          </div>
          <div className="footer-column">
            <h4>Ссылки</h4>
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/pricing">Подписка</Link></li>
              <li><a target="_blank" href={tgBotLink}>Telegram бот</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li><a href="mailto:support@ButterBreadAI.com">support@butterbreadai.com</a></li>
              <li><a target="_blank"  href={tgBotLinkSupport}>Telegram поддержка</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 ButterBreadAI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
