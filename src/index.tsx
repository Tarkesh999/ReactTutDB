import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './components/MyComponent';
import AppRouter from './AppRouter';
import Dashboard from './components/DashBoard';
import Registration from './components/Registration';
import Gallery from './components/Gallery';

ReactDOM.render(
  <React.StrictMode>
    {/* <App username={undefined} userType="user"/>
    <MyComponent /> */}
    <AppRouter />
    {/* <Dashboard /> */}
    {/* <Registration /> */}
    {/* <Gallery /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
