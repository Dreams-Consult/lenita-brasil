import './index.css'
import BotoxImg from '../../assets/procedimentos/botox/Botox.jpg'
import PreenchimentoImg from '../../assets/procedimentos/preenchimento-labial/PreenchimentoLabial.jpg'
import MesojectGunImg from '../../assets/procedimentos/mesoject-gun/MesojectGun.jpg'
import TerapiaCapilarImg from '../../assets/procedimentos/terapia-capilar/TerapiaCapilar.jpg'
import ManchasImg from '../../assets/procedimentos/tratament-de-manchas/ManchasRosto.jpg'
import FiosPDOImg from '../../assets/procedimentos/fios-de-pdo/FIOS PDO.jpg'
import UltraformerImg from '../../assets/procedimentos/ultraformer-mpt/Ultraformer.jpg'
import LavieeenImg from '../../assets/procedimentos/laser-lavieen/lavieen.jpg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import siteConfig from '../../config/siteConfig.json'

function Procedimentos() {
  const navigate = useNavigate()

  // Mapeamento de imagens importadas
  const imageMap: { [key: string]: string } = {
    'Botox.jpg': BotoxImg,
    'PreenchimentoLabial.jpg': PreenchimentoImg,
    'MesojectGun.jpg': MesojectGunImg,
    'TerapiaCapilar.jpg': TerapiaCapilarImg,
    'ManchasRosto.jpg': ManchasImg,
    'FIOS PDO.jpg': FiosPDOImg,
    'Ultraformer.jpg': UltraformerImg,
    'lavieen.jpg': LavieeenImg,
  }

  const procedimentos = siteConfig.procedimentos.lista.map(proc => ({
    ...proc,
    img: imageMap[proc.img] || proc.img
  }))

  const handleCardClick = (link: string) => {
    navigate(link)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.div 
      id='procedimentos' 
      className='procedimentos'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className='procedimentos-content'>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05, color: '#8C5838' }}
        >
          {siteConfig.procedimentos.titulo}
        </motion.h1>
        <motion.p 
          className='procedimentos-intro'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {siteConfig.procedimentos.intro}
        </motion.p>
        
        <motion.h2 
          className='procedimentos-subtitle'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {siteConfig.procedimentos.subtitulo}
        </motion.h2>
        
        <div className='procedimentos-grid'>
          {procedimentos.map((proc, index) => (
            <motion.div 
              key={index}
              className='procedimento-card'
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10, rotateZ: 2 }}
              onClick={() => handleCardClick(proc.link)}
              style={{ cursor: 'pointer' }}
            >
              <div className='procedimento-image'>
                <img src={proc.img} alt={proc.title} />
              </div>
              <h3>{proc.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export { Procedimentos }
