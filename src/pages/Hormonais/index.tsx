import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { YouTubePlayer } from '../../components/YouTubePlayer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/exames/banner-exames.jpg'
import whatsappIcon from '../../assets/svg/whatsapp-icon.svg'
import siteConfig from '../../config/siteConfig.json'
import '../Hematologicos/index.css'

function Hormonais() {
  const isMobile = useMediaQuery({ query: `(max-width: 1100px)` })
  const examData = siteConfig.exames.categorias.hormonais

  return (
    <>
      <NavBar isMobile={isMobile} />
      <motion.div 
        className='exam-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className='exam-hero'>
          <img src={bannerImage} alt='Exames Hormonais' className='exam-hero-bg' />
          <div className='exam-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {examData.titulo}
            </motion.h1>
          </div>
        </div>

        <motion.section 
          className='exam-intro-section'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className='exam-intro-content'>
            <h2>{examData.titulo}</h2>
            <ul className='exam-intro-list'>
              {examData.lista.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <a href={`https://wa.me/${siteConfig.contato.whatsapp}`} target='_blank' rel='noopener noreferrer' className='agende-btn'>
              <img src={whatsappIcon} alt='WhatsApp' width={24} />
              <span>Agende seu exame</span>
            </a>
          </div>
          {examData.video && (
            <div className='exam-intro-video'>
              <YouTubePlayer 
                videoUrl={examData.video}
                orientation={examData.videoOrientation as 'horizontal' | 'vertical' | 'auto'}
                title={examData.titulo}
              />
            </div>
          )}
        </motion.section>

        <div className='exam-content'>
          <motion.section 
            className='exam-section'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Principais Exames Oferecidos</h2>
            <div className='exam-list'>
              {examData.examesDetalhados.map((exame, index) => (
                <motion.div 
                  key={index}
                  className='exam-item'
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3>{exame.nome}</h3>
                  <p>{exame.descricao}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export { Hormonais }
