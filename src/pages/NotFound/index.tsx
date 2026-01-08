import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import './index.css'

function NotFound() {
  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` })
  const navigate = useNavigate()

  return (
    <>
      <NavBar isMobile={isMobile} />
      <motion.div 
        className='not-found-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className='not-found-content'>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Página não encontrada
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A página que você está procurando não existe ou foi movida.
          </motion.p>
          <motion.button
            className='back-home-btn'
            onClick={() => navigate('/')}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, backgroundColor: '#8C5838' }}
            whileTap={{ scale: 0.95 }}
          >
            Voltar para Home
          </motion.button>
        </div>
      </motion.div>
      <Footer />
    </>
  )
}

export { NotFound }
