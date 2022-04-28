import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Vseproduc.css";

class Vseproduc extends Component {
  state = {};

  componentDidMount = () => {
    let categoriya = ["ВСЕ ПРОДУКЦИЯ"],
      i;
    for (i = 0; i < this.props.mahsulot.length; i++) {
      if (!categoriya.includes(this.props.mahsulot[i].category)) {
        categoriya.push(this.props.mahsulot[i].category);
      }
    }
    this.setState({
      categoriya: categoriya,
    });
    console.log(categoriya);
  };

  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <h1 className="mainHr mb-4">Наша продукция</h1>
            <nav className="mb-5 w-75 mx-auto">
              <div className="nav nav-tabs mx-auto" id="nav-tab" role="tablist">
                <button
                  to="#"
                  className="nav-link mx-auto active"
                  id="nav-id1"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-target1"
                  type="button"
                  role="tab"
                >
                  ВСЕ ПРОДУКЦИЯ
                </button>
                <button
                  className="nav-link mx-auto "
                  id="nav-id2"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-target2"
                  type="button"
                  role="tab"
                >
                  Ткацкая резинка
                </button>
                <button
                  className="nav-link mx-auto "
                  id="nav-id3"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-target3"
                  type="button"
                  role="tab"
                >
                  Шнурки, повседневные
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane active"
                id="nav-target1"
                role="tabpanel"
                aria-labelledby="nav-id1"
              >
                <div className="row">
                  {this.props.mahsulot.map((item, index) => (
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
                            src={item.urlImg}
                            className="card-img-top"
                            alt="img"
                          />
                          <hr className="w-100 mx-auto" />
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
              <div
                className="tab-pane fade"
                id="nav-target2"
                role="tabpanel"
                aria-labelledby="nav-id2"
              >
                <div className="row">
                  {this.props.mahsulot
                    .filter((myItem) => myItem.category === "резинка")
                    .map((item, index) => (
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
                            src={`${item.urlImg}`}
                            className="card-img-top"
                            alt="img"
                          />
                          <hr className="w-100 mx-auto" />
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
              <div
                className="tab-pane fade"
                id="nav-target3"
                role="tabpanel"
                aria-labelledby="nav-id3"
              >
                <div className="row">
                  {this.props.mahsulot
                    .filter((myItem) => myItem.category === "Шнурки")
                    .map((item, index) => (
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
                            src={`${item.urlImg}`}
                            className="card-img-top"
                            alt="img"
                          />
                          <hr className="w-100 mx-auto" />
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
        </div>
      </div>
    );
  }
}

export default Vseproduc;
