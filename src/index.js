import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PositionProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PositionProvider>
      <App />
    </PositionProvider>
  </React.StrictMode>
);

reportWebVitals();
