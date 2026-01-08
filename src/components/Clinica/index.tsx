import './index.css'
import { Button } from '../Button'
import clinicImage from '../../assets/CLINICA.jpg'
import { motion } from 'framer-motion'

function Clinica() {
  function handleClick() {
    alert("Consulta agendada com sucesso!")
  }

  return (
    <motion.div 
      id='clinica' 
      className='clinica'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className='clinica-content'>
        <motion.div 
          className='clinica-text'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.h1
            whileHover={{ scale: 1.05, color: '#8C5838' }}
            transition={{ duration: 0.3 }}
          >
            Clínica Lenita Brasil
          </motion.h1>
          <p>
            Em nossa clínica, sua experiência começa antes do
            procedimento. O tratamento exclusivo tem o olhar
            atento e a compreensão cuidadosa da Dra. Lenita
            Brasil para que você conheça profundamente os
            procedimentos que mais fazem sentido para a sua
            história e para a imagem que você deseja expressar.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button text='Saiba mais' onClick={handleClick}/>
          </motion.div>
        </motion.div>
        <motion.div 
          className='clinica-image'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={clinicImage} alt='Clínica Lenita Brasil' />
        </motion.div>
      </div>
    </motion.div>
  )
}

export { Clinica }
