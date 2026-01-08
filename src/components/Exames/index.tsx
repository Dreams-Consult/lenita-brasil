import './index.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Exames() {
  const navigate = useNavigate()

  function handleCategoryClick(category: string) {
    navigate(`/exames/${category}`)
  }

  return (
    <motion.div 
      id='exames' 
      className='exames'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className='exames-content'>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, color: '#8C5838' }}
        >
          Exames
        </motion.h1>
        <motion.p 
          className='exames-intro'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Nossos laboratórios estão entre os mais completos do Pará. Todos oferecem excelência 
          técnica, equipamentos modernos e de alta precisão, com rapidez na entrega de todos os 
          resultados. Conheça abaixo a nossa lista de exames convencionais disponíveis.
        </motion.p>
        
        <div className='exames-categories'>
          <motion.button 
            className='category-btn' 
            onClick={() => handleCategoryClick('hematologicos')}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.15, backgroundColor: '#8C5838', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
          >
            Hematológicos
          </motion.button>
          <motion.button 
            className='category-btn' 
            onClick={() => handleCategoryClick('bioquimicos')}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.15, backgroundColor: '#8C5838', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
          >
            Bioquímicos
          </motion.button>
          <motion.button 
            className='category-btn' 
            onClick={() => handleCategoryClick('hormonais')}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.15, backgroundColor: '#8C5838', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
          >
            Hormonais
          </motion.button>
          <motion.button 
            className='category-btn' 
            onClick={() => handleCategoryClick('imunologicos')}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.15, backgroundColor: '#8C5838', color: '#fff' }}
            whileTap={{ scale: 0.95 }}
          >
            Imunológicos
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export { Exames }
