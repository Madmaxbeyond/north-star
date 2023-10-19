// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './client/components/Footer'
import Header from './client/components/Header'
import Home from './client/pages/Home'

function App() {

  return (
    <div className='app'>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
