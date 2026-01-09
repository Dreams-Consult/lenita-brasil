import './index.css'
import BotoxImg from '../../assets/Botox.jpg'
import PreenchimentoImg from '../../assets/PreenchimentoLabial.jpg'
import MesojectGunImg from '../../assets/MesojectGun.jpg'
import TerapiaCapilarImg from '../../assets/TerapiaCapilar.jpg'
import ManchasImg from '../../assets/ManchasRosto.jpg'
import FiosPDOImg from '../../assets/FIOS PDO.jpg'
import UltraformerImg from '../../assets/Ultraformer.jpg'
import LavieeenImg from '../../assets/lavieen.jpg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function Procedimentos() {
  const navigate = useNavigate()

  const procedimentos = [
    { img: BotoxImg, title: 'Botox', link: '/procedimentos/botox' },
    { img: PreenchimentoImg, title: 'Preenchimento labial', link: '/procedimentos/preenchimento-labial' },
    { img: MesojectGunImg, title: 'MesojectGun', link: '/procedimentos/mesojectgun' },
    { img: TerapiaCapilarImg, title: 'Terapia capilar', link: '/procedimentos/terapia-capilar' },
    { img: ManchasImg, title: 'Tratamento de manchas', link: '/procedimentos/tratamento-manchas' },
    { img: FiosPDOImg, title: 'Fios de PDO', link: '/procedimentos/fios-pdo' },
    { img: UltraformerImg, title: 'Ultraformer MPT', link: '/procedimentos/ultraformer-mpt' },
    { img: LavieeenImg, title: 'Laser Lavieen', link: '/procedimentos/laser-lavieen' },
  ]

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
          Procedimentos
        </motion.h1>
        <motion.p 
          className='procedimentos-intro'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Na Clínica Lenita Brasil, seu tratamento estético é conduzido com técnica avançada, 
          equipamentos modernos e atenção cuidadosa às suas principais necessidades e desejos. 
          O nosso objetivo é realçar sua beleza natural com segurança e harmonia para alcançar 
          resultados duradouros.
        </motion.p>
        
        <motion.h2 
          className='procedimentos-subtitle'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          O que deseja transformar hoje?
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
