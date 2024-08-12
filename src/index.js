import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import '../public/stylesheets/bootstrap.min.css';
// import './stylesheets/font-awesome.min.css';
import './index.css';
import './responsive.css';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
reportWebVitals();