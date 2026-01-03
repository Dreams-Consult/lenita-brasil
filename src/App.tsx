import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { About } from './components/About'
import { Clinica } from './components/Clinica'
import { Laboratorios } from './components/Laboratorios'
import { Exames } from './components/Exames'
import { Procedimentos } from './components/Procedimentos'
// import { Contato } from './components/Contato'
import { Footer } from './components/Footer'
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` });

  return (
    <>
      <NavBar isMobile={isMobile} />
      <Banner />
      <About />
      <Clinica />
      <Laboratorios />
      <Exames />
      <Procedimentos />
      
      {/* <Contato /> */}
      <Footer />
    </>
  )
}

export default App
