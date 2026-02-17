import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './about'
import UseEffect from './assets/UseEffect'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/useEffect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App
