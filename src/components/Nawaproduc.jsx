import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Nawaproduc.css";

class Nawaproduc extends Component {
  state = {
    producs: [
      { id: 1, urlImg: "Rectangle 11 (1).png", link: "Шнурки, повседневные" },
      { id: 2, urlImg: "Group 19300.png", link: "Вязанная резинка" },
      { id: 3, urlImg: "Rectangle 11 (4).png", link: "Шнурки, повседневные" },
      { id: 4, urlImg: "Rectangle 11 (1).png", link: "Шнурки, повседневные" },
      { id: 5, urlImg: "Rectangle 11 (5).png", link: "Ткацкая резинка" },
      { id: 6, urlImg: "Rectangle 61.png", link: "Шнурки, повседневные" },
      { id: 7, urlImg: "Rectangle 11 (3).png", link: "Ткацкая резинка" },
      { id: 8, urlImg: "Rectangle 11 (2).png", link: "Жаккардовая резинка" },
    ],
  };
  render() {
    return (
      <div>
        <div className="produc">
          <div className="container">
            <div className="tabs d-flex align-items-center justify-content-between">
              <NavLink className="link1" to="/#">
                Наша продукция
              </NavLink>
              <NavLink className="link active" to="Vseproduc">
                Вся продукция
              </NavLink>
            </div>
            <div className="row">
              {this.state.producs.map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-6 col-sm-12 mb-4 boxes"
                >
                  <Link
                    className="text-decoration-none"
                    to={`/Rezinka/${item.id}`}
                  >
                    <div className="card" style={{ width: "15rem" }}>
                      <img
                        src={`images/${item.urlImg}`}
                        className="card-img-top"
                        alt="img"
                      />
                      <hr />
                      <div className="card-body">
                        <Link to="/" className="link">
                          {item.link}
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Nawaproduc;
