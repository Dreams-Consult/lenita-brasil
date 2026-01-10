import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/procedimentos/mesoject-gun/BANNER-MASOJECTGUN.jpg'
import procedimentoImage from '../../assets/procedimentos/mesoject-gun/MesojectGun.jpg'
import whatsappIcon from '../../assets/svg/whatsapp-icon.svg'
import '../Botox/index.css'

function MesojectGun() {
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
          <img src={bannerImage} alt='MesojectGun' className='procedimento-hero-bg' />
          <div className='procedimento-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MesojectGun
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
                A MesojectGun é uma tecnologia avançada para aplicação de ativos na pele, 
                permitindo tratamentos de rejuvenescimento, hidratação profunda e estimulação 
                de colágeno de forma precisa e confortável.
              </p>
              <p className='procedimento-description'>
                O procedimento utiliza microinjeções controladas para distribuir uniformemente 
                os ativos na camada ideal da pele, potencializando os resultados. É ideal para 
                tratamento de rugas finas, flacidez e perda de viço.
              </p>
              <p className='procedimento-description'>
                Com a MesojectGun, a pele ganha firmeza, luminosidade e textura uniforme, 
                com resultados progressivos e naturais.
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
              <img src={procedimentoImage} alt='MesojectGun' />
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export default MesojectGun
