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

function Procedimentos() {
  const procedimentos = [
    { img: BotoxImg, title: 'Botox' },
    { img: PreenchimentoImg, title: 'Preenchimento labial' },
    { img: MesojectGunImg, title: 'MesojectGun' },
    { img: TerapiaCapilarImg, title: 'Terapia capilar' },
    { img: ManchasImg, title: 'Tratamento de manchas' },
    { img: FiosPDOImg, title: 'Fios de PDO' },
    { img: UltraformerImg, title: 'Ultraformer MPT' },
    { img: LavieeenImg, title: 'Laser Lavieen' },
  ]

  return (
    <motion.div 
      id='procedimentos' 
      className='procedimentos'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
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
          transition={{ duration: 0.6, delay: 0.2 }}
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10, rotateZ: 2 }}
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
