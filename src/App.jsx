import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h2>About</h2>} />
        <Route path="/contact" element={<h2>contact page</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

hello world this is test


export default App
