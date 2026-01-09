import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/BANNER-MANCHAS.jpg'
import procedimentoImage from '../../assets/ManchasRosto.jpg'
import whatsappIcon from '../../assets/whatsapp-icon.svg'
import '../Botox/index.css'

function TratamentoManchas() {
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
          <img src={bannerImage} alt='Tratamento de Manchas' className='procedimento-hero-bg' />
          <div className='procedimento-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tratamento de Manchas
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
                Essa é uma abordagem de alta procura para clarear e uniformizar 
                o tom da pele, reduzindo manchas causadas pelo sol, melasma 
                ou marcas antigas.
              </p>
              <p className='procedimento-description'>
                Para alcançar resultados de excelência, trabalhamos em 
                camadas: primeiro com o controle da inflamação (se houver), 
                depois iniciando o clareamento de forma gradual, sem abrir mão 
                da proteção e manutenção do procedimento. O protocolo inclui 
                dermocosméticos de alta performance e tecnologias específicas.
              </p>
              <p className='procedimento-description'>
                Com o tratamento, a pele ganha luminosidade, uniformidade e 
                suavidade de forma segura e contínua.
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
              <img src={procedimentoImage} alt='Tratamento de Manchas' />
            </div>
          </div>
        </motion.section>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export default TratamentoManchas
