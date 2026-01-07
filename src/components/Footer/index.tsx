import logo from '../../assets/logo-1.png'
import whatsappIcon from '../../assets/whatsapp-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'
import './index.css'
import { motion } from 'framer-motion'

function Footer() {
  function handleWhatsAppClick() {
    window.open('https://wa.me/5591996040003', '_blank')
  }

  function handleInstagramDraClick() {
    window.open('https://www.instagram.com/dra.lenitabrasil', '_blank')
  }

  function handleInstagramLabClick() {
    window.open('https://www.instagram.com/laboratorio_lb/', '_blank')
  }

  function handleLocationClick(unidade: string) {
    alert(`Direcionando para ${unidade}`)
  }

  return (
    <motion.div 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="footer-column logo-column"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.img 
          src={logo} 
          alt='Lenita Brasil' 
          className='footer-logo'
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
      </motion.div>

      <motion.div 
        className="footer-column"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <nav className='footer-nav'>
          <motion.a 
            href='#banner'
            whileHover={{ scale: 1.1, color: '#F3BB90', x: 10 }}
          >
            Home
          </motion.a>
          <motion.a 
            href='#sobre'
            whileHover={{ scale: 1.1, color: '#F3BB90', x: 10 }}
          >
            Dra. Lenita Brasil
          </motion.a>
          <motion.a 
            href='#clinica'
            whileHover={{ scale: 1.1, color: '#F3BB90', x: 10 }}
          >
            Clínica
          </motion.a>
          <motion.a 
            href='#procedimentos'
            whileHover={{ scale: 1.1, color: '#F3BB90', x: 10 }}
          >
            Procedimentos
          </motion.a>
          <motion.a 
            href='#laboratorios'
            whileHover={{ scale: 1.1, color: '#F3BB90', x: 10 }}
          >
            Laboratórios
          </motion.a>
          <motion.a 
            href='#exames'
            whileHover={{ scale: 1.1, color: '#F3BB90', x: 10 }}
          >
            Exames
          </motion.a>
        </nav>
      </motion.div>

      <motion.div 
        className="footer-column cta-column"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>Viva a experiência de um atendimento exclusivo e cuidadoso</h2>
        <p>
          Agende sua consulta ou exame em uma de nossas clínicas ou 
          laboratórios e permita-se sentir o melhor da sua própria beleza 
          e saúde.
        </p>
        <motion.button 
          className='whatsapp-btn' 
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.1, backgroundColor: '#25D366' }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={whatsappIcon} alt="WhatsApp" className='whatsapp-icon' />
          91 99604-0003
        </motion.button>
      </motion.div>

      <motion.div 
        className="footer-column contact-column"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className='unidade-info'>
          <motion.button 
            className='unidade-badge' 
            onClick={() => handleLocationClick('Unidade Belém')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Unidade Belém
          </motion.button>
          <p>R. Bernal do Couto, nº 75 - Umarizal</p>
        </div>

        <div className='unidade-info'>
          <motion.button 
            className='unidade-badge' 
            onClick={() => handleLocationClick('Unidade Castanhal')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Unidade Castanhal
          </motion.button>
          <p>Av. Marechal Deodoro, nº 368 - Ianetama</p>
        </div>

        <div className='divider'></div>

        <div className='social-footer'>
          <motion.div 
            className='social-item' 
            onClick={handleInstagramDraClick}
            whileHover={{ scale: 1.15, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={instagramIcon} alt="Instagram" className='instagram-icon' />
            <span>@dra.lenitabrasil</span>
          </motion.div>
          <motion.div 
            className='social-item' 
            onClick={handleInstagramLabClick}
            whileHover={{ scale: 1.15, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={instagramIcon} alt="Instagram" className='instagram-icon' />
            <span>@laboratorio_lb</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export { Footer }
