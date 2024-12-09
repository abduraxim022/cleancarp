import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Sidebar } from "primereact/sidebar"; 
import logo from "../images/logo.png";
import "primereact/resources/themes/saga-blue/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css"; 

const { Option } = Select;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); 

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className="nb">
      <nav className="navbar">
        <div className="container container1">
          <div>
          <a href="#main">
            <img src={logo} alt={t("logoAlt")} className="navbar-logo" />
          </a>
          </div>
         

          <div className="links-nav">
            <div className="navbar-links">
              <a href="#main" className="nav-link" onClick={handleLinkClick}>
                {t("main")}
              </a>
              <a href="#about" className="nav-link" onClick={handleLinkClick}>
                {t("about")}
              </a>
              <a href="#service" className="nav-link" onClick={handleLinkClick}>
                {t("services")}
              </a>
              <a href="#comment" className="nav-link" onClick={handleLinkClick}>
                {t("comments")}
              </a>
              <a href="#faq" className="nav-link" onClick={handleLinkClick}>
                {t("faq")}
              </a>
            </div>

            <div className="navbar-right">
              <Select
                defaultValue={i18n.language}
                style={{ width: 120, marginLeft: "10px" }}
                onChange={handleLanguageChange}
              >
                <Option value="uz">Uz</Option>
                <Option value="ru">Рус</Option>
                <Option value="en">En</Option>
              </Select>
              <div className="menu-icon" onClick={toggleMenu}>
                &#9776;
              </div>

              <a className="contact1" href="#contact1">
                <button className="contact-button">{t("contact")}</button>
              </a>
            </div>
          </div>
        </div>

        <Sidebar visible={isOpen} onHide={toggleMenu} position="right">
          <a href="#main" className="nav-link" onClick={handleLinkClick}>
            {t("main")}
          </a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>
            {t("about")}
          </a>
          <a href="#service" className="nav-link" onClick={handleLinkClick}>
            {t("services")}
          </a>
          <a href="#comment" className="nav-link" onClick={handleLinkClick}>
            {t("comments")}
          </a>
          <a href="#faq" className="nav-link" onClick={handleLinkClick}>
            {t("faq")}
          </a>
          <a className="contact1" href="#contact1">
            <button className="contact-button">{t("contact")}</button>
          </a>
        </Sidebar>
      </nav>
    </div>
  );
}
