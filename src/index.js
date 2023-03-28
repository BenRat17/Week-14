import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Movies from './components/movies';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import StarRating from './components/stars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <h1>Movie Reviews</h1>
<Movies></Movies>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
