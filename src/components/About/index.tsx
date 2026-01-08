import './index.css'
import avatar from '../../assets/Imagem-Lenita.png'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div 
      id='sobre' 
      className='sobre'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className='sobre-image'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <img className='avatar' src={avatar} alt='avatar' />
      </motion.div>

      <motion.div 
        className='sobre-text'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          whileHover={{ scale: 1.05, color: '#8C5838' }}
          transition={{ duration: 0.3 }}
        >
          Dra. Lenita Brasil
        </motion.h1>
        <p>
          Médica e referência na integração entre saúde e bem-estar, a Dra. Lenita Brasil está à frente da clínica e da rede de laboratórios especializados em tratamentos estéticos individualizados e exames laboratoriais. Seu compromisso é promover equilíbrio, autoestima e qualidade de vida, sempre com acolhimento e resultados naturais.
        </p>
        <motion.div 
          className='button-container'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className='agende-btn'>Agende sua consulta</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export { About }
