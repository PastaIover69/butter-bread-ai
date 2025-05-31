import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { PlanContext } from "../../context";
import SecondImg from '../../assets/img/second.png'
import MainStyle from '../../assets/css/style.css';

export default function Price() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const { setPlanData } = useContext(PlanContext);

  const handleSelectBasicPlan = () => {
    setPlanData({
      plan: 'Базовый',
      price: selectedPlan === 'monthly' ? 249 : 2350, 
      features: [
        'Общение с ИИ на 5 языках',
        'До 10 загружаемых документов/день',
        '100 вопросов в день',
        'Базовые упражнения',
        'Текстовые ответы'
      ],
    });
  };

  const handleSelectPremiumPlan = () => {
    setPlanData({
      plan: 'Премиум',
      price: selectedPlan === 'monthly' ? 499 : 4790, 
      features: [
        'Общение с ИИ на 15+ языках',
        'До 50 загружаемых документов/день',
        'Неограниченные вопросы',
        'Расширенные упражнения',
        'Голосовые ответы',
        'Персональные напоминания'
      ],
    });
  };

  const handleSelectTeacherPlan = () => {
    setPlanData({
      plan: 'Для преподавателей',
      price: selectedPlan === 'monthly' ? 999 : 9490, 
      features: [
        'Все возможности Премиум',
        'До 100 загружаемых документов / день',
        'Создание курсов для студентов',
        'Приоритетная поддержка'
      ],
    });
  };

  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <h1>Выберите подписку</h1>
          <p>Получите полный доступ ко всем возможностям ButterBreadAI</p>
          <img className='hero-content__second-img' src={SecondImg} alt="" />
        </div>
      </section>

      <section className="plans-section">
        <div className="container">
          <div className="plan-switcher">
            <button
              className={selectedPlan === "monthly" ? "active" : ""}
              onClick={() => setSelectedPlan("monthly")}
            >
              Ежемесячная
            </button>
            <button
              className={selectedPlan === "yearly" ? "active" : ""}
              onClick={() => setSelectedPlan("yearly")}
            >
              Годовая <br /> (экономия 20%)
            </button>
          </div>

          <div className="plans-grid">
            <div className="plan-card">
              <h3>Базовый</h3>
              <div className="price">
                {selectedPlan === "monthly" ? "249₽" : "2350₽"}
                <span>/{selectedPlan === "monthly" ? "мес" : "год"}</span>
              </div>
              <ul className="features">
                <li>Общение с ИИ на 5 языках</li>
                <li>До 10 загружаемых документов / день</li>
                <li>100 вопросов в день</li>
                <li>Базовые упражнения</li>
                <li>Текстовые ответы</li>
              </ul>
              <Link 
                to="/payment" 
                className="buy-button" 
                onClick={() => handleSelectBasicPlan()}
              >
                Выбрать
              </Link>
            </div>

            <div className="plan-card popular">
              <div className="popular-badge">Популярный</div>
              <h3>Премиум</h3>
              <div className="price">
                {selectedPlan === "monthly" ? "499₽" : "4790₽"}
                <span>/{selectedPlan === "monthly" ? "мес" : "год"}</span>
              </div>
              <ul className="features">
                <li>Общение с ИИ на 15+ языках</li>
                <li>До 50 загружаемых документов / день</li>
                <li>Неограниченные вопросы</li>
                <li>Расширенные упражнения</li>
                <li>Голосовые ответы</li>
                <li>Персональные напоминания</li>
              </ul>
              <Link 
                to="/payment" 
                className="buy-button" 
                onClick={() => handleSelectPremiumPlan()}
              >
                Выбрать
              </Link>
            </div>

            <div className="plan-card">
              <h3>Для преподавателей</h3>
              <div className="price">
                {selectedPlan === "monthly" ? "999₽" : "9490₽"}
                <span>/{selectedPlan === "monthly" ? "мес" : "год"}</span>
              </div>
              <ul className="features">
                <li>Все возможности Премиум</li>
                <li>До 100 загружаемых документов / день</li>
                <li>Создание курсов для студентов</li>
                <li>Приоритетная поддержка</li>
              </ul>
              <Link 
                to="/payment" 
                className="buy-button" 
                onClick={() => handleSelectTeacherPlan()}
              >
                Выбрать
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-section">
        <div className="container">
          <h2>Способы оплаты</h2>
          <div className="payment-methods">
            <div className="payment-method">
              <div className="icon">💳</div>
              <h3>Банковская карта</h3>
              <p>Visa, Mastercard, Мир</p>
            </div>
            <div className="payment-method">
              <div className="icon">📱</div>
              <h3>Apple Pay / Google Pay</h3>
              <p>Быстрая оплата в один клик</p>
            </div>
            <div className="payment-method">
              <div className="icon">₿</div>
              <h3>Криптовалюта</h3>
              <p>Bitcoin, Ethereum, USDT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Частые вопросы</h2>
          <div className="faq-item">
            <h3>Как происходит оплата?</h3>
            <p>
              После выбора тарифа вы перейдете на безопасную страницу оплаты,
              где сможете ввести данные своей карты или выбрать другой способ
              оплаты.
            </p>
          </div>
          <div className="faq-item">
            <h3>Можно ли отменить подписку?</h3>
            <p>
              Да, вы можете отменить подписку в любой момент в настройках бота.
              Доступ сохранится до конца оплаченного периода.
            </p>
          </div>
          <div className="faq-item">
            <h3>Есть ли бесплатный период?</h3>
            <p>
              Да, все новые пользователи получают 7 дней бесплатного доступа ко
              всем функциям Премиум-тарифа.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}