import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// start: STYLE IMPORTS
import './index.css'
import './menu.css'

import './lilypadandwater.css'
import './carousel.css'
// end: STYLE IMPORTS


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
