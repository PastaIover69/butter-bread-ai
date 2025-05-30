import React, { useState, useContext } from "react";
import { Link } from "react-router";
import PaymentStyles from "../../assets/css/payment.css";
import { PlanContext } from "../../context";

import sbpLogo from '../../assets/img/sbp-logo.png'
import sberPay from '../../assets/img/SberPay.png'
import SecondImg from '../../assets/img/second.png'

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { planData } = useContext(PlanContext);

  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const [paymentLink, setPaymentLink] = useState('https://www.sberbank.com/promo/sberpay');

  const handlePaymentLink = (link) => {
    setPaymentLink(link);
  };


  return (
    <div className="payment-page">
      <main className="payment-main">
        <div className="container">
          <div className="payment-grid">
            <div className="payment-form">
              <h2>Способ оплаты</h2>

              <div className="payment-methods">
                <button
                  className={`method ${
                    paymentMethod === "card" ? "active" : ""
                  }`}
                 onClick={() => {
                    setPaymentMethod("card");
                    handlePaymentLink('https://www.sberbank.com/promo/sberpay');
                  }}
                >
                  <span className="icon"><img className="sber-logo" src={sberPay} alt="" /></span>
                  SberPay
                </button>

                <button
                  className={`method ${
                    paymentMethod === "СБП" ? "active" : ""
                  }`}
                  onClick={() => {
                    setPaymentMethod("СБП");
                    handlePaymentLink('https://sbp.nspk.ru/');
                  }}
                >
                  <span className="icon"><img className="sbp-logo" src={sbpLogo} alt="" /></span>
                  СБП
                </button>
                

                <button
                  className={`method ${
                    paymentMethod === "crypto" ? "active" : ""
                  }`}
                 onClick={() => {
                    setPaymentMethod("crypto");
                    handlePaymentLink('https://cryptocloud.plus/crypto-processing');
                  }}
                >
                  <span className="icon">₿</span>
                  Криптовалюта
                </button>
              </div>

              

              {paymentMethod === "card" && (
                <div className="alternative-method">
                  <p>
                    После нажатия "Оплатить" вы будете перенаправлены на
                    страницу <span className="text-green">SberPay</span> для завершения платежа.
                  </p>
                </div>
              )}

              {paymentMethod === "СБП" && (
                <div className="alternative-method">
                  <p>
                    После нажатия "Оплатить" вы будете перенаправлены на
                    страницу <span className="text-green">СБП</span> для завершения платежа.
                  </p>
                </div>
              )}

              {paymentMethod === "crypto" && (
                <div className="alternative-method">
                  <p>Выберите криптовалюту для оплаты:</p>
                  <div className="crypto-options">
                    <button
                      className={`crypto-option ${
                        activeOption === "BTC" ? "active" : ""
                      }`}
                      onClick={() => handleOptionClick("BTC")}
                    >
                      Bitcoin (BTC)
                    </button>
                    <button
                      className={`crypto-option ${
                        activeOption === "ETH" ? "active" : ""
                      }`}
                      onClick={() => handleOptionClick("ETH")}
                    >
                      Ethereum (ETH)
                    </button>
                    <button
                      className={`crypto-option ${
                        activeOption === "USDT" ? "active" : ""
                      }`}
                      onClick={() => handleOptionClick("USDT")}
                    >
                      USDT
                    </button>
                  </div>
                </div>
              )}

               <img className='hero-content__second-img' src={SecondImg} alt="" />

              <div className="payment-security">
                <div className="secure-badge">🔒 Безопасная оплата</div>
              </div>
            </div>

            <div className="order-summary">
              <h2>Ваша подписка</h2>

              <div className="plan-card selected">
                <h3>{planData.plan}</h3>
                <div className="price">
                  {planData.price}₽{" "}
                  <span>/ {planData.price > 1000 ? "год" : "месяц"}</span>
                </div>
                <ul className="features">
                  {planData.features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="order-total">
                <div className="total-row">
                  <span>Сумма:</span>
                  <span>{planData.price}₽</span>
                </div>
                
                <div className="total-row grand-total">
                  <span>Итого:</span>
                  <span>{planData.price}₽</span>
                </div>
              </div>

              <Link target="_blank" to={paymentLink} className="pay-button">
                Оплатить {planData.price}₽
              </Link>

              <div className="guarantee">
                <p>✅ 7-дневная гарантия возврата средств</p>
                <p>✅ Можно отменить в любой момент</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
