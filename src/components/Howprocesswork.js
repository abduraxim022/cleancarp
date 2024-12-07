import React from "react";
import { Bridge, Clear, Delivery, Document, Phone, Van, Warderobe } from "../svgformatter";
import { useTranslation } from 'react-i18next';

export default function Howprocesswork() {
  const { t } = useTranslation(); 

  return (
    <div className="container">
      <div className="qanday-section">
        <h1 data-aos="flip-up">{t('how_it_works')}</h1>
        <div className="qanday-div_cards">
          <div  className="qanday-cards">
            {/* Card 1 */}
            <div data-aos="fade-right" className="qanday-card">
              <div className="qanday-rows">
                <Phone />
                <h4>{t('call_us')}</h4>
              </div>
              <p>{t('call_us_text')}</p>
            </div>
            {/* Card 2 */}
            <div data-aos="fade-right" className="qanday-card">
              <div className="qanday-rows">
                <Van />
                <h4>{t('place_order')}</h4>
              </div>
              <p>{t('place_order_text')}</p>
            </div>
            {/* Card 3 */}
            <div data-aos="fade-right" className="qanday-card">
              <div className="qanday-rows">
                <Document />
                <h4>{t('contract')}</h4>
              </div>
              <p>{t('contract_text')}</p>
            </div>
            {/* Card 4 */}
            <div data-aos="fade-right" className="qanday-card">
              <div className="qanday-rows">
                <Bridge />
                <h4>{t('pickup')}</h4>
              </div>
              <p>{t('pickup_text')}</p>
            </div>
            {/* Card 5 */}
            <div data-aos="fade-right" className="qanday-card">
              <div className="qanday-rows">
                <Clear />
                <h4>{t('cleaning')}</h4>
              </div>
              <p>{t('cleaning_text')}</p>
            </div>
            {/* Card 6 */}
            <div data-aos="fade-right" className="qanday-card">
              <div className="qanday-rows">
                <Warderobe />
                <h4>{t('drying')}</h4>
              </div>
              <p>{t('drying_text')}</p>
            </div>
            {/* Card 7 */}
            <div data-aos="fade-right" className="qanday-card">
              <div className="qanday-rows">
                <Delivery />
                <h4>{t('delivery')}</h4>
              </div>
              <p>{t('delivery_text')}</p>
            </div>
            {/* Button */}
            <div data-aos="fade-right" className="qanday-card">
              <div className="qanday-rows">
                <a href="#contact1">
                  <button className="btn-order">{t('order_now')}</button>
                </a>
              </div>
              <p>{t('trust_us')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
