import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ImageCarousel from './components/ImageCarousel'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ImageCarousel />
  </React.StrictMode>,
)
