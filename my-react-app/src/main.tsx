import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Routes, Route,BrowserRouter } from "react-router-dom";

//import Page from './components'
import Page from './components/Page.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/page" element={<Page/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
