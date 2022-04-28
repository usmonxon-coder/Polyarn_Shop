import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Carousel from "./components/Carousel";
import Foter from "./components/Foter";
import Krupniy from "./components/Krupniy";
import Navbar from "./components/Navbar";
import Nawaproduc from "./components/Nawaproduc";
import Ploshad from "./components/Ploshad";
import Vseproduc from "./components/Vseproduc";
import Xarita from "./components/Xarita";
import "./styles/Mainhr.css";
import React, { Component } from "react";
import Rezinka from "./components/Rezinka";
import Xatolik from "./components/Xatolik";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends Component {
  state = {
    producs: [
      {
        id: 1,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (1).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 2,
        category: "резинка",
        urlImg: "/images/Group 19300.png",
        link: "Вязанная резинка",
      },
      {
        id: 3,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (4).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 4,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (1).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 5,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (5).png",
        link: "Ткацкая резинка",
      },
      {
        id: 6,
        category: "Шнурки",
        urlImg: "/images/Rectangle 61.png",
        link: "Шнурки, повседневные",
      },
      {
        id: 7,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (3).png",
        link: "Ткацкая резинка",
      },
      {
        id: 8,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (2).png",
        link: "Жаккардовая резинка",
      },
      {
        id: 9,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (1).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 10,
        category: "резинка",
        urlImg: "/images/Group 19300.png",
        link: "Вязанная резинка",
      },
      {
        id: 11,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (4).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 12,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (1).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 13,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (5).png",
        link: "Ткацкая резинка",
      },
      {
        id: 14,
        category: "Шнурки",
        urlImg: "/images/Rectangle 61.png",
        link: "Шнурки, повседневные",
      },
      {
        id: 15,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (3).png",
        link: "Ткацкая резинка",
      },
      {
        id: 16,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (2).png",
        link: "Жаккардовая резинка",
      },
      {
        id: 17,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (1).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 18,
        category: "резинка",
        urlImg: "/images/Group 19300.png",
        link: "Вязанная резинка",
      },
      {
        id: 19,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (4).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 20,
        category: "Шнурки",
        urlImg: "/images/Rectangle 11 (1).png",
        link: "Шнурки, повседневные",
      },
      {
        id: 21,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (5).png",
        link: "Ткацкая резинка",
      },
      {
        id: 22,
        category: "Шнурки",
        urlImg: "/images/Rectangle 61.png",
        link: "Шнурки, повседневные",
      },
      {
        id: 23,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (3).png",
        link: "Ткацкая резинка",
      },
      {
        id: 24,
        category: "резинка",
        urlImg: "/images/Rectangle 11 (2).png",
        link: "Жаккардовая резинка",
      },
      {
        id: 25,
        category: "tayyor",
        urlImg: "/images/Rectangle 11 (3).png",
        link: "tayyor mahsulot ",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Krupniy />
                  <Ploshad />
                  <Nawaproduc />
                  <Carousel />
                  <Xarita />
                </>
              }
            />
            <Route
              path="/vseproduc"
              element={<Vseproduc mahsulot={this.state.producs} />}
            />
            <Route
              path="/Rezinka/:id"
              element={<Rezinka produc={this.state.producs} />}
            />
            <Route path="*" element={<Xatolik />} />
          </Routes>
          <Foter />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
