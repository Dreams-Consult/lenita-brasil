import './index.css'
import belemImage from '../../assets/BELEM-EDIT-1.png'
import castanhalImage from '../../assets/CASTANHAL-EDIT-1.png'
import { motion } from 'framer-motion'

function Laboratorios() {
  function handleLocationClick(address: string) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(mapsUrl, '_blank')
  }

  return (
    <motion.div 
      id='laboratorios' 
      className='laboratorios'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className='laboratorios-content'>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, color: '#8C5838' }}
        >
          Laboratórios Lenita Brasil
        </motion.h1>
        <motion.p 
          className='laboratorios-intro'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Os Laboratórios Lenita Brasil contam com duas unidades prontas para receber você. 
          Realizamos seus exames com rigor técnico, responsabilidade e agilidade, garantindo uma 
          experiência tranquila e segura em todas as etapas do atendimento.
        </motion.p>
        
        <div className='laboratorios-grid'>
          <motion.div 
            className='unidade-card'
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className='card-image'>
              <img src={belemImage} alt="Laboratório Unidade Belém" />
              <span className='badge'>UNIDADE BELÉM</span>
            </div>
            <div className='card-info'>
              <p className='endereco'>R. Bernal do Couto, nº 75 - Umarizal</p>
              <motion.button 
                className='location-btn' 
                onClick={() => handleLocationClick('R. Bernal do Couto, 75 - Umarizal, Belém - PA')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className='location-icon'>📍</span>
                Saiba como chegar
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className='unidade-card'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <div className='card-image'>
              <img src={castanhalImage} alt="Laboratório Unidade Castanhal" />
              <span className='badge'>UNIDADE CASTANHAL</span>
            </div>
            <div className='card-info'>
              <p className='endereco'>Av. Marechal Deodoro, nº 368 - Ianetama</p>
              <motion.button 
                className='location-btn' 
                onClick={() => handleLocationClick('Av. Marechal Deodoro, 368 - Ianetama, Castanhal - PA')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className='location-icon'>📍</span>
                Saiba como chegar
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export { Laboratorios }
