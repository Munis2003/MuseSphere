import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Videopage from './components/Videopage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/video/:id" element={<Videopage/>} />
    </Routes>
    </>
  )
}

export default App