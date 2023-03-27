import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/store";
import Info from "./components/info/Info";
import Like from "./components/like/Like";
import Korzinka from "./components/korzinka/Korzinka";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Card />} />
            <Route path="/Info/:id" element={<Info />} />
            <Route path="/like" element={<Like />} />
            <Route path="/korzinka" element={<Korzinka />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
