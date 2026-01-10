import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { ImageCarousel } from '../../components/ImageCarousel'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/procedimentos/ultraformer-mpt/BANNER-ULTRAFORMER.jpg'
import procedimentoImage from '../../assets/procedimentos/ultraformer-mpt/Ultraformer.jpg'
import galeria1 from '../../assets/procedimentos/ultraformer-mpt/ultraformer-galeria-1.jpg'
import galeria2 from '../../assets/procedimentos/ultraformer-mpt/ultraformer-galeria-2.jpg'
import whatsappIcon from '../../assets/svg/whatsapp-icon.svg'
import '../Botox/index.css'

function UltraformerMPT() {
  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` })

  const galeriaImages = [procedimentoImage, galeria1, galeria2]

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
          <img src={bannerImage} alt='Ultraformer MPT' className='procedimento-hero-bg' />
          <div className='procedimento-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ultraformer MPT
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
                O Ultraformer MPT é uma tecnologia de ponta em ultrassom microfocado para 
                lifting facial e corporal não invasivo, promovendo firmeza, redução de gordura 
                localizada e rejuvenescimento profundo.
              </p>
              <p className='procedimento-description'>
                O equipamento atua em múltiplas profundidades da pele, estimulando a contração 
                das fibras de colágeno e elastina, resultando em efeito lifting imediato e 
                progressivo. Ideal para flacidez facial, pescoço, corpo e redução de medidas.
              </p>
              <p className='procedimento-description'>
                Com o Ultraformer MPT, a pele ganha firmeza, sustentação e contorno 
                definido, com resultados naturais e duradouros.
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
              <ImageCarousel images={galeriaImages} alt='Ultraformer MPT' />
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export default UltraformerMPT
