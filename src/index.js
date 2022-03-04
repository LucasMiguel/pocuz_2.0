import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import MainWindow from './templates/mainWindow';

ReactDOM.render(
  <div id='setDarkMode' className=''>
    <div className='bg-[#F0F3F3] dark:bg-[#011627]  h-screen'>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainWindow />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
