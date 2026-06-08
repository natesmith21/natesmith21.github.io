import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'
import NavBar from './componenets/NavBar'
import Router from './componenets/Router'

function App() {

  return (
    <>
    <HashRouter>
      <NavBar />
      <main>
        <Router />
      </main>
    </HashRouter>
    </>
  )
}

export default App
