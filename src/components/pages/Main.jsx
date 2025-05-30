import React, {useState, useContext} from 'react'
import {Link} from 'react-router';
import { PlanContext } from '../../context';

import MainImg from '../../assets/img/butter-bg.png';
import SecondImg from '../../assets/img/second.png'
import ThirdImg from '../../assets/img/third.png'

export default function Main({tgBotLink}) {
  const [activeTab, setActiveTab] = useState('features');
  
    return (
      <main className="home-page">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Персональный AI-помощник для изучения языков в <span className='text-blue'>Telegram</span> мессенджере</h1>
              <p>Интеллектуальный бот, который адаптируется под ваши материалы и помогает учиться эффективне
                прямо в Telegram!
              </p>
              <p>
                ...и всё это — с вкуснейшим бутербродом с маслом! 
              </p>
              <p className='hero-content_descr'>
                Просто отправьте боту учебный материал, а потом спокойно пейте чай ☕ — он уже трудится над понятными объяснениями и чек-листами.
              </p>
             
              <div className="hero-buttons">
                <a target="_blank" href={tgBotLink} className="cta-button">Начать в Telegram</a>
                <Link to="/pricing" className="secondary-button">Выбрать подписку</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={MainImg} alt="ButterBreadAI в Telegram" />
            </div>
          </div>
        </section>
  
        <section className="tabs-section">
          <div className="container">
            <div className="tabs">
              <button 
                className={activeTab === 'features' ? 'active' : ''}
                onClick={() => setActiveTab('features')}
              >
                Возможности
              </button>
              <button 
                className={activeTab === 'how-it-works' ? 'active' : ''}
                onClick={() => setActiveTab('how-it-works')}
              >
                Как это работает
              </button>
              <button 
                className={activeTab === 'advantages' ? 'active' : ''}
                onClick={() => setActiveTab('advantages')}
              >
                Преимущества
              </button>
              

            </div>
  
            <div className="tab-content">
              {activeTab === 'features' && (
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="icon">💬</div>
                    <h3>Живое общение</h3>
                    <p>Общайтесь с ИИ на изучаемом языке в текстовом или голосовом формате* <br /> (*в скором времени)</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon">📚</div>
                    <h3>Персональные материалы</h3>
                    <p>Загружайте свои учебники и PDF-файлы, бот будет использовать их для обучения</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon">🔍</div>
                    <h3>Умные ответы</h3>
                    <p>Получайте ответы на вопросы из ваших учебных материалов</p>
                  </div>
                  <div className="feature-card">
                    <div className="icon">⏰</div>
                    <h3>Напоминания</h3>
                    <p>Персонализированные уведомления помогут сохранить регулярность занятий</p>
                  </div>
                </div>
              )}
  
              {activeTab === 'how-it-works' && (
                <div className="how-it-works">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Загрузите свои материалы</h3>
                      <p>Отправьте боту учебники, PDF-файлы или заметки в формате PDF, DOCX или TXT</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>ИИ анализирует контент</h3>
                      <p>Наш алгоритм разбивает текст на смысловые блоки и создает векторные представления</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Задавайте вопросы</h3>
                      <p>Получайте точные ответы, основанные на ваших материалах, а не общие знания из интернета</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Совершенствуйте язык</h3>
                      <p>Практикуйтесь в диалогах, получайте исправления и персонализированные упражнения</p>
                    </div>
                  </div>
                </div>
              )}
  
              {activeTab === 'advantages' && (
                <div className="advantages">
                  <h2>Почему наш бот лучше других?</h2>
                  <ul>
                    <li>
                      <strong>Адаптивность</strong> - учится на ваших материалах, а не использует шаблонные фразы
                    </li>
                    <li>
                      <strong>Гибкость</strong> - поддерживает текстовые и голосовые взаимодействия
                    </li>
                    <li>
                      <strong>Персонализация</strong> - напоминания и упражнения подстраиваются под ваш прогресс
                    </li>
                    <li>
                      <strong>Технологичность</strong> - использует современные AI-модели для точных ответов
                    </li>
                    <li>
                      <strong>Удобство</strong> - работает прямо в Telegram, не требует установки дополнительных приложений
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <img className='hero-content__second-img' src={SecondImg} alt="" />
          </div>
        </section>
  
        <section className="cta-section">
          <div className="container">
            <h2>Готовы начать учиться по-новому?</h2>
            <img className='cta-section-third__img' src={ThirdImg} alt="" />
            <p>Попробуйте ButterBreadAI прямо сейчас - первые 7 дней бесплатно!</p>
            <div className="buttons">
              <a target="_blank"  href={tgBotLink} className="cta-button">Начать в Telegram</a>
              <Link to="/pricing" className="secondary-button">Выбрать тариф</Link>
            </div>
          </div>
        </section>
      </main>
    );
}
