import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = {};
  
    if (!name.trim()) newErrors.name = t("Ismingizni kiriting");
  
    const phoneRegex = /^\+998\d{9}$/;
    if (!phone.trim()) {
      newErrors.phone = t("Iltimos, telefon raqamingizni kiriting");
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = t("Iltimos, telefon raqamingizni to‘g‘ri kiriting");
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
      const message = `Ismingiz: ${name}%0ATelefon raqamingiz: ${phone}`;
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
  
      try {
        const response = await fetch(url);
        if (response.ok) {
          toast.success(t("Sizning ma'lumotingiz yuborildi!"), {
            position: "top-right",
          });
          setName("");
          setPhone("+998");
        } else {
          toast.error(t("Ma'lumot yuborishda hatolik yuz berdi"), {
            position: "top-right",
          });
        }
      } catch {
        toast.error(t("An error occurred, please try again."), {
          position: "top-right",
        });
      }
    }
  };
  

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (input.startsWith("+998")) {
      setPhone(input);
    } else if (input === "") {
      setPhone("+998");
    }
  };

  return (
    <div id="contact1" className="container">
      <div className="contact-info">
        <div className="contact-img"></div>
        <div className="form-div">
          <form onSubmit={handleSubmit} className="form-container">
            <h2>{t("leave_your_information")}</h2>
            <div className="input-div">
              <div className="form-group">
                <input
                  placeholder={t("name")}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() =>
                    setErrors((prevErrors) => ({ ...prevErrors, name: null }))
                  }
                  className={errors.name ? "input-error" : ""}
                />
                <span className={`error-text ${errors.name ? "visible" : ""}`}>
                  {errors.name}
                </span>
              </div>

              <div className="form-group">
                <input
                  className={`in2 ${errors.phone ? "input-error" : ""}`}
                  placeholder="Telefon raqamingiz"
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  onFocus={() =>
                    setErrors((prevErrors) => ({ ...prevErrors, phone: null }))
                  }
                />
                <span className={`error-text ${errors.phone ? "visible" : ""}`}>
                  {errors.phone}
                </span>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              {t("Submit")}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
