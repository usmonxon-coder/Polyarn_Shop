import React, { Component } from "react";
import "../styles/Xarita.css";

class Xarita extends Component {
  render() {
    return (
      <div>
        <div className="xarita py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 offset-lg-1 order-lg-1 order-2">
                <div className="box1">
                  <h1>География экспорта</h1>
                  <hr />
                  <p>
                    Наша компания активно развивает внешнеторговые связи и
                    заинтересована в сотрудничестве как с ближним так и дальним
                    зарубежьем.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 order-lg-2 order-1 rasm">
                <img className="w-100" src="images/Group 19283.png" alt="rasm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Xarita;
