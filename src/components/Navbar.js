import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar1">
        <div className="navbar p-3">
          <div className="container d-flex">
            <div className="left">
              <Link to="/">
                <img className="w-100" src="/images/Group 19288.png" alt="rasm" />
              </Link>
            </div>
            <div className="right">
              <img className=" d-lg-none d-sm-block" src="images/list.png" alt="rasm" />
         
              <div className="links d-lg-block d-sm-none ">
                <Link className="me-5 link" to="/#">
                  О НАС
                </Link>
                <Link className="me-5 link " to="/#">
                  СЕРВИСЫ
                </Link>
                <Link className="me-5 link " to="/#">
                  ПРОДУКЦИЯ
                </Link>
                <Link className="me-5 link " to="/#">
                  КОНТАКТЫ
                </Link>
              </div>
                <select name="RUS" id="">
                  <option className="option1" value="RUS">RUS</option>
                  <option className="option1" value="ENG">ENG</option>
                  <option className="option1" value="UZB">UZB</option>
                </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
