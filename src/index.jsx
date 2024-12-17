import React from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css"; // TailwindCSS burada yüklenmiş olmalı
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
