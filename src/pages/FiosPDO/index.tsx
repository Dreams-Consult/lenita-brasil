import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { ImageCarousel } from '../../components/ImageCarousel'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/procedimentos/fios-de-pdo/BANNER-FIOSPDO.jpg'
import procedimentoImage from '../../assets/procedimentos/fios-de-pdo/FIOS PDO.jpg'
import galeria1 from '../../assets/procedimentos/fios-de-pdo/grdr 2025-11-24 113137.883.JPG'
import whatsappIcon from '../../assets/svg/whatsapp-icon.svg'
import '../Botox/index.css'

function FiosPDO() {
  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` })

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
          <img src={bannerImage} alt='Fios de PDO' className='procedimento-hero-bg' />
          <div className='procedimento-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fios de PDO
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
                Os fios de PDO são uma tecnologia avançada para lifting facial sem cirurgia, 
                promovendo sustentação, reposicionamento dos tecidos e estimulação natural 
                de colágeno para resultados duradouros.
              </p>
              <p className='procedimento-description'>
                O procedimento utiliza fios biorreabsorvíveis que promovem efeito imediato 
                de tração e, ao longo do tempo, estimulam a produção de colágeno, melhorando 
                a firmeza e textura da pele. Ideal para tratamento de flacidez facial e corporal.
              </p>
              <p className='procedimento-description'>
                Com os fios de PDO, a pele ganha sustentação, firmeza e rejuvenescimento 
                de forma natural e progressiva.
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
              <ImageCarousel images={galeriaImages} alt='Fios de PDO' />
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export default FiosPDO
