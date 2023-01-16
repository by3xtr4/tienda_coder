import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBkYHnyDJzz9ujTyt3HfwKz9n1apazAEIM",
  authDomain: "coderhouse-react-c9e70.firebaseapp.com",
  projectId: "coderhouse-react-c9e70",
  storageBucket: "coderhouse-react-c9e70.appspot.com",
  messagingSenderId: "620646894",
  appId: "1:620646894:web:889c7653d43b4c54f03eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
