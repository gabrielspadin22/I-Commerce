import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
const root = ReactDOM.createRoot(document.getElementById('root'));


const firebaseConfig = {
  apiKey: "AIzaSyDKnEk2XbLEtu86XLEFWiEmCXi3ORs0Zwk",
  authDomain: "i-commerce-d0861.firebaseapp.com",
  projectId: "i-commerce-d0861",
  storageBucket: "i-commerce-d0861.appspot.com",
  messagingSenderId: "230319262233",
  appId: "1:230319262233:web:fb01d11d2a8ebe9bd9b888"
};

initializeApp(firebaseConfig);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
