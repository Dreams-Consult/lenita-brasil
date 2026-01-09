import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/BANNER-PREENCHIMENTO.jpg'
import procedimentoImage from '../../assets/PreenchimentoLabial.jpg'
import whatsappIcon from '../../assets/whatsapp-icon.svg'
import '../Botox/index.css'

function PreenchimentoLabial() {
  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` })

  return (
    <>
      <NavBar isMobile={isMobile} />
      <motion.div 
        className='procedimento-page'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className='procedimento-hero'>
          <img src={bannerImage} alt='Preenchimento Labial' className='procedimento-hero-bg' />
          <div className='procedimento-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Preenchimento Labial
            </motion.h1>
          </div>
        </div>

        <motion.section 
          className='procedimento-content-section'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className='procedimento-layout'>
            <div className='procedimento-text'>
              <p className='procedimento-description'>
                O preenchimento labial é uma abordagem refinada para aumentar o volume, 
                definir o contorno e suavizar linhas ao redor dos lábios, sempre respeitando 
                a harmonia e as proporções naturais do rosto.
              </p>
              <p className='procedimento-description'>
                Utilizamos ácido hialuônico de alta qualidade, aplicado com técnica precisa 
                para resultados naturais e equilibrados. O procedimento é personalizado conforme 
                suas características faciais e objetivos estéticos.
              </p>
              <p className='procedimento-description'>
                Com o tratamento, os lábios ganham volume, definição e hidratação, 
                mantendo a naturalidade e expressão.
              </p>
              <a 
                href='https://wa.me/5591996040003' 
                target='_blank' 
                rel='noopener noreferrer' 
                className='agende-btn'
              >
                <img src={whatsappIcon} alt='WhatsApp' width={24} />
                Agende sua consulta
              </a>
            </div>
            <div className='procedimento-image'>
              <img src={procedimentoImage} alt='Preenchimento Labial' />
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export default PreenchimentoLabial
