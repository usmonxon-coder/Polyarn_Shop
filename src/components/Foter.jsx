import React from "react";
import { Link } from "react-router-dom";
import "../styles/Foter.css";

class Foter extends React.Component {
  render() {
    return (
      <div>
        <div className="foter">
          <div className="container">
            <h1>Оставьте заявку и мы с вами свяжемся</h1>
            <form>
              <div className="boxes w-50 mx-auto">
                <div className="box1 mb-5 d-flex justify-content-between">
                  <input placeholder="Имя" type="text" />
                  <input placeholder="Фамилия" type="text" />
                </div>
                <div className="box2 mb-5  d-flex justify-content-between">
                  <input placeholder="Номер телефона" type="number" />
                  <input placeholder="Эл. почта" type="email" />
                </div>
                <button type="button" className="btn d-block  mx-auto">Отправить</button>
              </div>
            <hr />
            </form>
            <div className="foter2">
              <div className="brand">
                <Link to="/">
                  <img className="w-100" src="/images/Group 19288.png" alt="rasm" />
                </Link>
              </div>
              <div className="left">
                <div className="links">
                  <Link className="text-decoration-none text-light" to="//">+998 91 611 11 24</Link>
                  <Link to="/"><img src="images/facebook.png" alt="rasm" /></Link>
                  <Link to="/"><img src="images/telegram.png" alt="rasm" /></Link>
                  <Link to="/"><img src="images/instagram.png" alt="rasm" /></Link>
                </div>
              </div>
            </div>
              <hr />
              <h2>Pol Yarn Textile © 2020. Все права защищены</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Foter;
