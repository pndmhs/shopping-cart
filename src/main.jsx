import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource-variable/inter'
import Router from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
