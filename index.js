import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = 
[
    {message: 'hi, how are you', id:1, likesCount:12},
    {message: 'its my first post', id:2, likesCount:1},
    {message: 'c,gcvhcgvhyckt', id:3, likesCount:32},
    {message: 'mhddgfmyjfy', id:4, likesCount:10},
    {message: 'j,chjc,cggc,', id:5, likesCount:22},
    {message: 'rdhchmtctd', id:6, likesCount:18},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>
);
reportWebVitals();