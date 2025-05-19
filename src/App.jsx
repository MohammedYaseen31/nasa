import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Forgot from './components/Forgot'
import Home from './components/Home'
import Card from './components/Card'
import Rover from './components/Rover'
import Mars from './components/Mars'
import RoverCards from './components/RoverCards'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Landing/>} path='/'/>
          <Route element={<Home/>} path='/home'/>
          <Route element={<Card/>} path='/card'/>
          <Route element={<Rover/>} path='/rover'/>
          <Route element={<Mars/>} path='/mars'/>
          <Route element={<RoverCards/>} path='/rovercards'/>
          <Route element={<Forgot/>} path='forgot'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
