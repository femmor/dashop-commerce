import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// boots watch styles
import './bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
