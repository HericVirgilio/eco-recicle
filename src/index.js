import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Plastico from './Pages/plastico/index.jsx';
import Baterias from './Pages/bateria/index.jsx';
import Eletronicos from "./Pages/eletronicos"
import Metal from "./Pages/metal"
import Vidro from "./Pages/vidro"
import Papel from "./Pages/papel"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "plastico",
    element: <Plastico />
  },
  {
    path: "baterias",
    element: <Baterias/>
  },
  {
    path: "eletronicos",
    element: <Eletronicos/>
  },
  {
    path: "metal",
    element: <Metal/>
  },
  {
    path: "vidro",
    element: <Vidro/>
  },
  {
    path: "papel",
    element: <Papel/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
