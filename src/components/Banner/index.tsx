import { Button } from '../Button'
import './index.css'
import { motion } from 'framer-motion'

function Banner() {

  function handleClick() {
    alert("Consulta reaizada com sucesso!")
  }

  return (
    <motion.div 
      id='banner' 
      className="banner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='banner-content'>
        <motion.div 
          className='divText'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>CLÍNICA MÉDICA
          DERMATOLÓGICA E
          EXAMES LABRATORIAIS
          DE ALTO PADRÃO</p>
        </motion.div>

        <motion.div 
          className='divButton'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button text='Agende seu horário' onClick={handleClick}/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export { Banner }
