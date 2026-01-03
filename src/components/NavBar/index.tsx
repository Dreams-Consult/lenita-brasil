import { useState, useEffect } from 'react'
import logo from '../../assets/logo-horizontal.png'
import instagram from '../../assets/instagram-icon.svg'
import whatsapp from '../../assets/whatsapp-icon.svg'
import facebook from '../../assets/facebook-icon.svg'

import './index.css'

type NavBarProps = {
  isMobile: boolean
}

function NavBar({ isMobile }: NavBarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  return (
    <div className={`NavBar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className='logo-section'>
        <a href='#banner'>
          <img src={logo} alt='logo' width={200}/>
        </a>
      </div>

      {
        isMobile && (
          <nav className='nav-links'>
            <a href='#sobre'>Dra. Lenita Brasil</a>
            <a href='#clinica'>Clínica</a>
            <a href='#procedimentos'>Procedimentos</a>
            <a href='#laboratorios'>Laboratórios</a>
            <a href='#exames'>Exames</a>
          </nav>
        )
      }

      <div className='social-section'>
        <a href='https://www.instagram.com/dra.lenitabrasil' target='_blank' rel='noopener noreferrer'>
          <img src={instagram} alt='instagram' width={28} />
        </a>
        <a href='https://wa.me/5591996040003' target='_blank' rel='noopener noreferrer'>
          <img src={whatsapp} alt='whatsapp' width={28} />
        </a>
        <a href='https://www.facebook.com/people/Dra-Lenita-Brasil/61579320161159/' target='_blank' rel='noopener noreferrer'>
          <img src={facebook} alt='facebook' width={28} />
        </a>
      </div>
    </div>
  )
}

export { NavBar }
