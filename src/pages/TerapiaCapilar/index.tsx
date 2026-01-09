import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/BANNER-TERAPIACAPILAR.jpg'
import procedimentoImage from '../../assets/TerapiaCapilar.jpg'
import whatsappIcon from '../../assets/whatsapp-icon.svg'
import '../Botox/index.css'

function TerapiaCapilar() {
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
          <img src={bannerImage} alt='Terapia Capilar' className='procedimento-hero-bg' />
          <div className='procedimento-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Terapia Capilar
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
                A terapia capilar é um tratamento especializado para fortalecer os fios, 
                estimular o crescimento e combater a queda capilar, utilizando tecnologias 
                avançadas e ativos de alta performance.
              </p>
              <p className='procedimento-description'>
                O protocolo inclui estimulação do couro cabeludo, nutrição profunda e 
                bioestimulação dos folículos pilosos para resultados duradouros. Cada 
                tratamento é personalizado conforme o diagnóstico e necessidades individuais.
              </p>
              <p className='procedimento-description'>
                Com a terapia capilar, os cabelos ganham força, densidade e vitalidade, 
                com redução significativa da queda.
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
              <img src={procedimentoImage} alt='Terapia Capilar' />
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export default TerapiaCapilar
