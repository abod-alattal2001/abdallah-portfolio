// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider> {/* تغليف التطبيق */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
