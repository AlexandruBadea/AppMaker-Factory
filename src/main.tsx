import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "./vendor/golden-layout/css/goldenlayout-base.css";
import "./vendor/golden-layout/css/themes/goldenlayout-dark-theme.css";
import "./vendor/golden-layout/css/themes/goldenlayout-light-theme.css";


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
