import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// HashRouter is used (URLs like /#/projects) instead of BrowserRouter because
// this is a static GitHub Pages site with no server-side rewrite rules.
// With BrowserRouter, refreshing on a route like /projects would 404 on
// GitHub Pages unless you add a 404.html redirect trick. HashRouter avoids
// that entirely and works out of the box.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
