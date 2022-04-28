import React from "react";
import { Link } from "react-router-dom";
import "../styles/Krupniy.css";

class Krupniy extends React.Component {
  render() {
    return (
      <div>
        <div className="krupniy text-center">
          <div className="container">
            <h1 className="w-md-50 mx-auto">
              Крупнейший экспортер текстильных изделий
            </h1>
            <p className="w-md-50 mx-auto mb-5">
              У нас вы найдёте эластичную ленту, текстильную резинку, а так же –
              шнурки и верёвки
            </p>
            <button className="btn">Контакты</button>
            <div className="boxes">
              <div className="box box1">
                <h2 className="mainHr mb-4">текстильная резинка</h2>
                <p>
                  Текстильная резинка представляет собой качественную эластичную
                  тесьму, она широко применяется в швейном производстве.
                </p>
                <Link className="link" to="/">подробнее</Link>
              </div>
              <div className="box box2">
                <h2 className="mainHr mb-4">Шнурки</h2>
                <p>
                  Мы производим обувные шнурки для повседневной, военной,
                  рабочей, спортивной, классической и детской обуви.
                </p>
                <Link className="link" to="">подробнее</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Krupniy;
