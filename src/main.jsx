import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18next from "i18next"
import global_es from "./traducciones/es/global.json";
import global_en from "./traducciones/en/global.json"
import global_pt from "./traducciones/pt/global.json"

i18next.init({
  interpolation:{escapeValue:false},
  lng:"es",
  resources: {
    es: {
      global:global_es,
    },
    en:{
      global:global_en,
    },
    pt: {
      global:global_pt
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Router> 
  </React.StrictMode>,
)
