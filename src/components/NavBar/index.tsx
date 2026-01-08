import { useState, useEffect } from 'react'
import logo from '../../assets/logo-horizontal.png'
import instagram from '../../assets/instagram-icon.svg'
import whatsapp from '../../assets/whatsapp-icon.svg'
import facebook from '../../assets/facebook-icon.svg'
import { motion, AnimatePresence } from 'framer-motion'

import './index.css'

type NavBarProps = {
  isMobile: boolean
}

function NavBar({ isMobile }: NavBarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState(50)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 50) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setMousePosition(percentage)
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
          '--mouse-x': `${mousePosition}%`
        } as React.CSSProperties}
      >
        <motion.div 
          className='logo-section'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <a href='#banner'>
            <img src={logo} alt='logo' width={200}/>
          </a>
        </motion.div>

        {
          isMobile && (
            <nav className='nav-links'>
              <motion.a 
                href='#sobre'
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Dra. Lenita Brasil
              </motion.a>
              <motion.a 
                href='#clinica'
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Clínica
              </motion.a>
              <motion.a 
                href='#procedimentos'
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Procedimentos
              </motion.a>
              <motion.a 
                href='#laboratorios'
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Laboratórios
              </motion.a>
              <motion.a 
                href='#exames'
                whileHover={{ scale: 1.1, color: '#F3BB90' }}
                transition={{ duration: 0.2 }}
              >
                Exames
              </motion.a>
            </nav>
          )
        }

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
      </motion.div>
    </AnimatePresence>
  )
}

export { NavBar }
