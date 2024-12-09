  import React from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
  import nigora from '../images/nigora.jpg'
  import muxlisa from '../images/muhlisa.webp'
  import lobar from '../images/lobar.jpg'
  import barno from '../images/barno.jpg'
  import bonu from '../images/bonu.jpg'
  import samiya from '../images/samiya.jpg'
  import { useTranslation } from "react-i18next";


  export default function Comment() {
    const { t } = useTranslation();
    const getSliderSettings = () => {
      return {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 467,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          
          
        ],
      };
    };

    return (
      <div id="comment" className="comment-section">
        <div className="container">
          <h1 className="comenth1" data-aos= "flip-up">{t("comments")}</h1>
          <div className="slick-slider-wrapper">
            <Slider {...getSliderSettings()}>
              <div className="testimonial-card">
                <div className="comment-image_container">
              <img width={"100px"} height={"100px"} src={nigora}/>
              <div>
                <h2>Nigora</h2>
                <span>{t("telegram_username", { username: "@nigora_dostva" })}</span>
              </div>
                </div>
                <p>{t("nigora_feedback")}</p>
              </div>
              <div className="testimonial-card">
              <div className="comment-image_container">
                <img width={"100px"} height={"100px"} src={muxlisa} alt="Muxlisa" />
                <div>
                  <h2>Muxlisa</h2>
                  <span>{t("telegram_username", { username: "@prsens" })}</span>
                </div>
              </div>
                <p>{t("muxlisa_feedback")}</p>
              </div>
              <div className="testimonial-card">
              <div className="comment-image_container">
                <img width={"100px"} height={"100px"} src={lobar} alt="Lobar" />
                <div>
                  <h2>Lobar</h2>
                  <span>{t("telegram_username", { username: "@hyot" })}</span>
                </div>
              </div>
                <p>{t("lobar_feedback")}</p>
              </div>
              <div className="testimonial-card">
              <div className="comment-image_container">
                <img width={"100px"} height={"100px"} src={barno} alt="Barno" />
                <div>
                  <h2>Barno</h2>
                  <span>{t("telegram_username", { username: "@barno" })}</span>
                </div>
              </div>
                <p>{t("barno_feedback")}</p>
              </div>
              <div className="testimonial-card">
              <div className="comment-image_container">
                <img width={"100px"} height={"100px"} src={bonu} alt="Bonu" />
                <div>
                  <h2>Bonu</h2>
                  <span>{t("telegram_username", { username: "@bonu_hamidova" })}</span>
                </div>
              </div>
                <p>{t("bonu_feedback")}</p>
              </div>
              <div className="testimonial-card">
              <div className="comment-image_container">
                <img width={"100px"} height={"100px"} src={samiya} alt="Samiya" />
                <div>
                  <h2>Samiya</h2>
                  <span>{t("telegram_username", { username: "@samiya_smm" })}</span>
                </div>
              </div>
                <p>{t("samiya_feedback")}</p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
