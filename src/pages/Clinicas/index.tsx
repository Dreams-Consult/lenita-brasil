import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import bannerImage from '../../assets/clinicas/banner-clinicas.jpg'
import '../Hematologicos/index.css'
import './index.css'

function Clinicas() {
  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` })
  const [currentBelemImage, setCurrentBelemImage] = useState(0)
  const [currentCastanhalImage, setCurrentCastanhalImage] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
  
  // Imagens temporárias - substituir com as imagens reais
  const belemImages = [
    bannerImage,
    bannerImage,
    bannerImage
  ]
  
  const castanhalImages = [
    bannerImage,
    bannerImage,
    bannerImage
  ]
  
  const nextBelemImage = () => {
    setCurrentBelemImage((prev) => (prev + 1) % belemImages.length)
  }
  
  const prevBelemImage = () => {
    setCurrentBelemImage((prev) => (prev - 1 + belemImages.length) % belemImages.length)
  }
  
  const nextCastanhalImage = () => {
    setCurrentCastanhalImage((prev) => (prev + 1) % castanhalImages.length)
  }
  
  const prevCastanhalImage = () => {
    setCurrentCastanhalImage((prev) => (prev - 1 + castanhalImages.length) % castanhalImages.length)
  }

  const openGallery = (images: string[], startIndex: number = 0) => {
    setGalleryImages(images)
    setCurrentGalleryImage(startIndex)
    setIsGalleryOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

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
          <img src={bannerImage} alt='Clínicas Lenita Brasil' className='exam-hero-bg' />
          <div className='exam-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Nossas Clínicas
            </motion.h1>
          </div>
        </div>

        <div className='exam-content'>
          <motion.section 
            className='clinic-section'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>UNIDADE BELÉM</h3>
            <p className='map-address'>R. Bernal do Couto, nº 75 - Umarizal</p>
            <div className='clinic-content-grid'>
              <div className='clinic-text'>
                <p className='clinic-description'>
                  Em nossa clínica, sua experiência começa antes do procedimento. O tratamento exclusivo 
                  tem o olhar atento e a compreensão cuidadosa da Dra. Lenita Brasil para que você conheça 
                  profundamente os procedimentos que mais fazem sentido para a sua história e para a imagem 
                  que você deseja expressar.
                </p>
                <p className='clinic-description'>
                  A técnica é precisa e a abordagem é delicada para respeitar sua anatomia e sua autenticidade. 
                  O resultado nunca é artificial. Priorizamos em todos os protocolos a naturalidade e a harmonia 
                  da sua beleza, sem exageros. Esse é um espaço para quem valoriza qualidade, sutileza e estética avançada.
                </p>
                <p className='clinic-highlight'>
                  A Clínica Lenita Brasil possui duas unidades, para melhor receber você: uma em Belém e outra em Castanhal.
                </p>
              </div>
              <div className='clinic-carousel'>
                <div className='carousel-container'>
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={currentBelemImage}
                      src={belemImages[currentBelemImage]}
                      alt={`Clínica Belém ${currentBelemImage + 1}`}
                      className='carousel-image'
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  <button className='carousel-btn prev' onClick={prevBelemImage}>
                    ‹
                  </button>
                  <button className='carousel-btn next' onClick={nextBelemImage}>
                    ›
                  </button>
                  <div className='carousel-indicators'>
                    {belemImages.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentBelemImage ? 'active' : ''}`}
                        onClick={() => setCurrentBelemImage(index)}
                      />
                    ))}
                  </div>
                </div>
                <button className='view-all-btn' onClick={() => openGallery(belemImages, currentBelemImage)}>Veja todas as fotos</button>
              </div>
            </div>
            <div className='clinic-map-section'>
              <div className='clinic-map'>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6482835947156!2d-48.48634492427895!3d-1.4429258356594636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c3c8c8c8c8d%3A0x1234567890abcdef!2sR.%20Bernal%20do%20Couto%2C%2075%20-%20Umarizal%2C%20Bel%C3%A9m%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="400" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Unidade Belém"
                />
              </div>
            </div>
          </motion.section>

          <motion.section 
            className='clinic-section'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3>UNIDADE CASTANHAL</h3>
            <p className='map-address'>Av. Marechal Deodoro, nº 368 - Ianetama</p>
            <div className='clinic-content-grid'>
              <div className='clinic-text'>
                <p className='clinic-description'>
                  Em nossa clínica, sua experiência começa antes do procedimento. O tratamento exclusivo 
                  tem o olhar atento e a compreensão cuidadosa da Dra. Lenita Brasil para que você conheça 
                  profundamente os procedimentos que mais fazem sentido para a sua história e para a imagem 
                  que você deseja expressar.
                </p>
                <p className='clinic-description'>
                  A técnica é precisa e a abordagem é delicada para respeitar sua anatomia e sua autenticidade. 
                  O resultado nunca é artificial. Priorizamos em todos os protocolos a naturalidade e a harmonia 
                  da sua beleza, sem exageros. Esse é um espaço para quem valoriza qualidade, sutileza e estética avançada.
                </p>
                <p className='clinic-highlight'>
                  A Clínica Lenita Brasil possui duas unidades, para melhor receber você: uma em Belém e outra em Castanhal.
                </p>
              </div>
              <div className='clinic-carousel'>
                <div className='carousel-container'>
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={currentCastanhalImage}
                      src={castanhalImages[currentCastanhalImage]}
                      alt={`Clínica Castanhal ${currentCastanhalImage + 1}`}
                      className='carousel-image'
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  <button className='carousel-btn prev' onClick={prevCastanhalImage}>
                    ‹
                  </button>
                  <button className='carousel-btn next' onClick={nextCastanhalImage}>
                    ›
                  </button>
                  <div className='carousel-indicators'>
                    {castanhalImages.map((_, index) => (
                      <button
                        key={index}
                        className={`indicator ${index === currentCastanhalImage ? 'active' : ''}`}
                        onClick={() => setCurrentCastanhalImage(index)}
                      />
                    ))}
                  </div>
                </div>
                <button className='view-all-btn' onClick={() => openGallery(castanhalImages, currentCastanhalImage)}>Veja todas as fotos</button>
              </div>
            </div>
            <div className='clinic-map-section'>
              <div className='clinic-map'>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6482835947156!2d-47.92634492427895!3d-1.2929258356594636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c3c8c8c8c8d%3A0x1234567890abcdef!2sAv.%20Marechal%20Deodoro%2C%20368%20-%20Ianetama%2C%20Castanhal%20-%20PA!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="400" 
                  style={{ border: 0, borderRadius: '12px' }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Unidade Castanhal"
                />
              </div>
            </div>
          </motion.section>
        </div>

        <AnimatePresence>
          {isGalleryOpen && (
            <motion.div 
              className='gallery-modal'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGallery}
            >
              <button className='gallery-close' onClick={closeGallery}>×</button>
              <div className='gallery-content' onClick={(e) => e.stopPropagation()}>
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentGalleryImage}
                    src={galleryImages[currentGalleryImage]}
                    alt={`Foto ${currentGalleryImage + 1}`}
                    className='gallery-image'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <button className='gallery-nav prev' onClick={prevGalleryImage}>‹</button>
                <button className='gallery-nav next' onClick={nextGalleryImage}>›</button>
                <div className='gallery-counter'>
                  {currentGalleryImage + 1} / {galleryImages.length}
                </div>
                <div className='gallery-thumbnails'>
                  {galleryImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      className={`gallery-thumbnail ${index === currentGalleryImage ? 'active' : ''}`}
                      onClick={() => setCurrentGalleryImage(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export default Clinicas
