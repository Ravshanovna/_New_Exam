import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/store";
import Card2 from "./components/card2/Card2"
import Like from "./components/like/Like";
import Korzinka from "./components/korzinka/Korzinka";
import Carousel  from "./components/Carousel/Carousel";
import Raiting from "./components/raiting/Raiting"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/carousel" element={<Carousel/>}/>
            <Route path="/raiting" element={<Raiting/>}/>
            <Route path="/" element={<Card />} />
            <Route path="/Info/:id" element={<Card2 />} />
            <Route path="/like" element={<Like />} />
            <Route path="/korzinka" element={<Korzinka />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
