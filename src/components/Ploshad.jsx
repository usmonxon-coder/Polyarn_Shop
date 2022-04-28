import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Ploshad.css";

class Ploshad extends Component {
  render() {
    return (
      <div>
        <div className="ploshad">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-4 w-sm-100">
                <div className="box box1">
                  <h2>01</h2>
                  <h1>Площадь производства 3 500 м2</h1>
                  <p>На нашей фабрике работают более 200 сотрудников</p>
                </div>
              </div>
              <div className="col-lg-4 w-sm-100">
                <div className="box box2">
                  <h2>03</h2>
                  <h1>310 едениц оборудования для производства</h1>
                  <p>
                    Более 1,5 млн пар шнурков, 3 млн. метров шнуров и не менее 3
                    млн. метров различных текстильных лент.
                  </p>
                  <button className="btn">Подробнее</button>
                </div>
              </div>
              <div className="col-lg-4 w-sm-100">
                <div className="box box3">
                  <h2>02</h2>
                  <h1>Площадь производства 3 500 м2</h1>
                  <p>На нашей фабрике работают более 200 сотрудников</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ploshad;
