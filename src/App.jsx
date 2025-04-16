import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './componenets/NavBar'
import Router from './componenets/Router'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <main>
        <Router />
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
