import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { Hematologicos } from './pages/Hematologicos'
import { Bioquimicos } from './pages/Bioquimicos'
import { Hormonais } from './pages/Hormonais'
import { Imunologicos } from './pages/Imunologicos'
import Clinicas from './pages/Clinicas'
import Botox from './pages/Botox'
import PreenchimentoLabial from './pages/PreenchimentoLabial'
import MesojectGun from './pages/MesojectGun'
import TerapiaCapilar from './pages/TerapiaCapilar'
import TratamentoManchas from './pages/TratamentoManchas'
import FiosPDO from './pages/FiosPDO'
import UltraformerMPT from './pages/UltraformerMPT'
import LaserLavieen from './pages/LaserLavieen'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Router basename="/lenita-brasil">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clinicas" element={<Clinicas />} />
        <Route path="/exames/hematologicos" element={<Hematologicos />} />
        <Route path="/exames/bioquimicos" element={<Bioquimicos />} />
        <Route path="/exames/hormonais" element={<Hormonais />} />
        <Route path="/exames/imunologicos" element={<Imunologicos />} />
        <Route path="/procedimentos/botox" element={<Botox />} />
        <Route path="/procedimentos/preenchimento-labial" element={<PreenchimentoLabial />} />
        <Route path="/procedimentos/mesojectgun" element={<MesojectGun />} />
        <Route path="/procedimentos/terapia-capilar" element={<TerapiaCapilar />} />
        <Route path="/procedimentos/tratamento-manchas" element={<TratamentoManchas />} />
        <Route path="/procedimentos/fios-pdo" element={<FiosPDO />} />
        <Route path="/procedimentos/ultraformer-mpt" element={<UltraformerMPT />} />
        <Route path="/procedimentos/laser-lavieen" element={<LaserLavieen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
