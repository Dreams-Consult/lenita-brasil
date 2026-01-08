import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Hematologicos } from './pages/Hematologicos'
import { Bioquimicos } from './pages/Bioquimicos'
import { Hormonais } from './pages/Hormonais'
import { Imunologicos } from './pages/Imunologicos'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Router basename="/lenita-brasil">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exames/hematologicos" element={<Hematologicos />} />
        <Route path="/exames/bioquimicos" element={<Bioquimicos />} />
        <Route path="/exames/hormonais" element={<Hormonais />} />
        <Route path="/exames/imunologicos" element={<Imunologicos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
