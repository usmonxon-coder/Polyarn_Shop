import React, { Component } from "react";
import "../styles/Rezinka.css";

class Rezinka extends Component {
  state = {};
  componentDidMount() {
    let arr = window.location.href.split("/");
    let id = +arr[arr.length - 1];
    let item = this.props.produc.find((item) => item.id === id);
    console.log(item);
    this.setState({
      produc: item,
    });
  }
  render() {
    return (
      <div>
        <div className="rezinka">
          <div className="container">
            <h1>Текстильная резинка</h1>
            <hr />
            <div className="row align-items-center mb-5">
              <div className="col-lg-4 col-md-5 mb-5">
                <div className="box">
                  <img
                    src={this.state.produc && this.state.produc.urlImg}
                    alt="rasm"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 offset-lg-0 offset-md-1">
                <h2>{this.state.produc && this.state.produc.link}</h2>
                <p>
                  Фабрика Рэдтекс готова предложить вязаную резинку оптом от
                  производителя. Вязаная резинка наиболее бюджетный вариант в
                  своей категории товаров. Мы производим эластичную ленту от 4
                  до 50 мм.
                </p>
              </div>
            </div>
            <button className="btn btn-danger d-block  mx-auto">
              Заказать сейчас
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Rezinka;
