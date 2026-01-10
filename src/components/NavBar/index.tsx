import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../assets/logo-horizontal.png'
import instagram from '../../assets/svg/instagram-icon.svg'
import whatsapp from '../../assets/svg/whatsapp-icon.svg'
import facebook from '../../assets/svg/facebook-icon.svg'
import { motion, AnimatePresence } from 'framer-motion'

import './index.css'

type NavBarProps = {
  isMobile: boolean
}

function NavBar({ isMobile }: NavBarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [mousePosition, setMousePosition] = useState(50)
  const [lastMouseY, setLastMouseY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    // No mobile, sempre visível
    if (isMobile) {
      setIsVisible(true)
      return
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const atTop = currentScrollY < 100
      
      if (atTop) {
        setIsVisible(true)
      } else {
        // Se não estiver no topo, verifica a posição do mouse
        setIsVisible(lastMouseY <= 100)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setLastMouseY(e.clientY)
      
      if (window.scrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(e.clientY <= 100)
      }
    }

    handleScroll() // Verifica posição inicial
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setMousePosition(percentage)
  }

  const handleNavClick = (section: string) => {
    if (!isHomePage) {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(section)
        element?.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false) // Fecha o menu após navegar
      }, 500)
    } else {
      const element = document.getElementById(section)
      element?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        setIsMenuOpen(false) // Fecha o menu após scroll
      }, 300)
    }
  }

  return (
    <AnimatePresence>
      <motion.div 
        className={`NavBar ${isVisible ? 'visible' : 'hidden'}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        onMouseMove={handleMouseMove}
        style={{
          ['--mouse-x' as any]: `${mousePosition}%`
        }}
      >
        {isMobile ? (
          <div className='navbar-main-content'>
            <motion.div 
              className='logo-section'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a href='/' onClick={(e) => { 
                e.preventDefault(); 
                navigate('/'); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                <img src={logo} alt='logo' width={200}/>
              </a>
            </motion.div>

            {!isMenuOpen && (
              <div className='mobile-social-center'>
                <motion.a 
                  href='https://www.instagram.com/dra.lenitabrasil' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={instagram} alt='instagram' width={24} />
                </motion.a>
                <motion.a 
                  href='https://wa.me/5591996040003' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={whatsapp} alt='whatsapp' width={24} />
                </motion.a>
                <motion.a 
                  href='https://www.facebook.com/people/Dra-Lenita-Brasil/61579320161159/' 
                  target='_blank' 
                  rel='noopener noreferrer'
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={facebook} alt='facebook' width={24} />
                </motion.a>
              </div>
            )}

            <motion.button 
              className='hamburger-btn'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label='Menu'
            >
              <motion.span 
                animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        ) : (
          <>
            <motion.div 
              className='logo-section'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a href='/' onClick={(e) => { 
                e.preventDefault(); 
                navigate('/'); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                <img src={logo} alt='logo' width={200}/>
              </a>
            </motion.div>
          </>
        )}

        {
          !isMobile && (
            <nav className='nav-links'>
              <motion.a 
                href='#sobre'
                onClick={(e) => { e.preventDefault(); handleNavClick('sobre'); }}
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Dra. Lenita Brasil
              </motion.a>
              <motion.a 
                href='#clinica'
                onClick={(e) => { e.preventDefault(); handleNavClick('clinica'); }}
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Clínica
              </motion.a>
              <motion.a 
                href='#laboratorios'
                onClick={(e) => { e.preventDefault(); handleNavClick('laboratorios'); }}
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Laboratórios
              </motion.a>
              <motion.a 
                href='#exames'
                onClick={(e) => { e.preventDefault(); handleNavClick('exames'); }}
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Exames
              </motion.a>
              <motion.a 
                href='#procedimentos'
                onClick={(e) => { e.preventDefault(); handleNavClick('procedimentos'); }}
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Procedimentos
              </motion.a>
            </nav>
          )
        }

        {
          isMobile && (
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav 
                  className='nav-links-mobile'
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a 
                    href='#sobre'
                    onClick={(e) => { e.preventDefault(); handleNavClick('sobre'); }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Dra. Lenita Brasil
                  </motion.a>
                  <motion.a 
                    href='#clinica'
                    onClick={(e) => { e.preventDefault(); handleNavClick('clinica'); }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clínica
                  </motion.a>
                  <motion.a 
                    href='#laboratorios'
                    onClick={(e) => { e.preventDefault(); handleNavClick('laboratorios'); }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Laboratórios
                  </motion.a>
                  <motion.a 
                    href='#exames'
                    onClick={(e) => { e.preventDefault(); handleNavClick('exames'); }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Exames
                  </motion.a>
                  <motion.a 
                    href='#procedimentos'
                    onClick={(e) => { e.preventDefault(); handleNavClick('procedimentos'); }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Procedimentos
                  </motion.a>
                  
                  <div className='mobile-social-section'>
                    <motion.a 
                      href='https://www.instagram.com/dra.lenitabrasil' 
                      target='_blank' 
                      rel='noopener noreferrer'
                      whileTap={{ scale: 0.9 }}
                    >
                      <img src={instagram} alt='instagram' width={24} />
                    </motion.a>
                    <motion.a 
                      href='https://wa.me/5591996040003' 
                      target='_blank' 
                      rel='noopener noreferrer'
                      whileTap={{ scale: 0.9 }}
                    >
                      <img src={whatsapp} alt='whatsapp' width={24} />
                    </motion.a>
                    <motion.a 
                      href='https://www.facebook.com/people/Dra-Lenita-Brasil/61579320161159/' 
                      target='_blank' 
                      rel='noopener noreferrer'
                      whileTap={{ scale: 0.9 }}
                    >
                      <img src={facebook} alt='facebook' width={24} />
                    </motion.a>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          )
        }

        {
          !isMobile && (
            <div className='social-section'>
              <motion.a 
                href='https://www.instagram.com/dra.lenitabrasil' 
                target='_blank' 
                rel='noopener noreferrer'
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={instagram} alt='instagram' width={28} />
              </motion.a>
              <motion.a 
                href='https://wa.me/5591996040003' 
                target='_blank' 
                rel='noopener noreferrer'
                whileHover={{ scale: 1.3, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={whatsapp} alt='whatsapp' width={28} />
              </motion.a>
              <motion.a 
                href='https://www.facebook.com/people/Dra-Lenita-Brasil/61579320161159/' 
                target='_blank' 
                rel='noopener noreferrer'
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={facebook} alt='facebook' width={28} />
              </motion.a>
            </div>
          )
        }
      </motion.div>
    </AnimatePresence>
  )
}

export { NavBar }
