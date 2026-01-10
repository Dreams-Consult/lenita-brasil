import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { ImageCarousel } from '../../components/ImageCarousel'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/procedimentos/laser-lavieen/BANNER-LAVIEEN.jpg'
import procedimentoImage from '../../assets/procedimentos/laser-lavieen/lavieen.jpg'
import galeria1 from '../../assets/procedimentos/laser-lavieen/lavieen-galeria-1.jpg'
import whatsappIcon from '../../assets/svg/whatsapp-icon.svg'
import '../Botox/index.css'

function LaserLavieen() {
  const isMobile = useMediaQuery({ query: `(max-width: 1100px)` })

  const galeriaImages = [procedimentoImage, galeria1]

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
          <img src={bannerImage} alt='Laser Lavieen' className='procedimento-hero-bg' />
          <div className='procedimento-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Laser Lavieen
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
                O Laser Lavieen é uma tecnologia de última geração para tratamentos faciais 
                multifuncionais, incluindo rejuvenescimento, remoção de manchas, vasos, 
                acne e melhora da textura da pele.
              </p>
              <p className='procedimento-description'>
                Com múltiplos comprimentos de onda, o equipamento permite tratamentos 
                personalizados e precisos para cada tipo de pele e necessidade. Os protocolos 
                são seguros, eficazes e com mínimo tempo de recuperação.
              </p>
              <p className='procedimento-description'>
                Com o Laser Lavieen, a pele ganha uniformidade, luminosidade e 
                rejuvenescimento visível, com segurança e conforto.
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
              <ImageCarousel images={galeriaImages} alt='Laser Lavieen' />
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export default LaserLavieen
