import React from 'react'; // Keep this line only once!
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure index.css is being imported here
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
