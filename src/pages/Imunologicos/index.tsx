import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import '../Hematologicos/index.css'

function Imunologicos() {
  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` })

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
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exames Imunológicos
          </motion.h1>
          <motion.p
            className='exam-subtitle'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Avaliação do sistema imunológico e detecção de doenças infecciosas
          </motion.p>
        </div>

        <div className='exam-content'>
          <motion.section 
            className='exam-section'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>O que são Exames Imunológicos?</h2>
            <p>
              Os exames imunológicos avaliam a resposta do sistema imunológico a infecções, alergias e 
              doenças autoimunes. Essas análises detectam anticorpos, antígenos e outros marcadores que 
              indicam a presença de agentes infecciosos, alergias ou distúrbios imunológicos, sendo 
              essenciais para diagnóstico preciso e acompanhamento de tratamentos.
            </p>
          </motion.section>

          <motion.section 
            className='exam-section'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Principais Exames Oferecidos</h2>
            <div className='exam-list'>
              <div className='exam-item'>
                <h3>Sorologias Virais</h3>
                <p>Detectam anticorpos contra vírus como HIV, Hepatites B e C, rubéola, toxoplasmose.</p>
              </div>
              <div className='exam-item'>
                <h3>Fator Reumatoide</h3>
                <p>Auxilia no diagnóstico de artrite reumatoide e outras doenças autoimunes.</p>
              </div>
              <div className='exam-item'>
                <h3>Proteína C Reativa (PCR)</h3>
                <p>Marcador de inflamação e infecção, importante para diagnóstico e monitoramento.</p>
              </div>
              <div className='exam-item'>
                <h3>FAN (Fator Antinuclear)</h3>
                <p>Rastreamento de doenças autoimunes como lúpus e esclerodermia.</p>
              </div>
              <div className='exam-item'>
                <h3>IgE Total e Específica</h3>
                <p>Avalia alergias respiratórias, alimentares e dermatológicas.</p>
              </div>
              <div className='exam-item'>
                <h3>ASLO</h3>
                <p>Detecta infecção estreptocócica recente, importante para diagnóstico de febre reumática.</p>
              </div>
            </div>
          </motion.section>

          <motion.section 
            className='exam-section'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Quando Realizar?</h2>
            <p>
              Recomendados para investigação de infecções, diagnóstico de doenças autoimunes, avaliação 
              de alergias, pré-natal, check-ups ocupacionais, pré-transplantes e acompanhamento de 
              tratamentos imunossupressores.
            </p>
          </motion.section>

          <motion.section 
            className='exam-section exam-highlight'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Nosso Diferencial</h2>
            <p>
              Utilizamos técnicas imunológicas avançadas como quimioluminescência e ELISA de última 
              geração, proporcionando alta sensibilidade e especificidade nos resultados. Nosso laboratório 
              segue rigorosos protocolos de biossegurança e controle de qualidade, garantindo resultados 
              confiáveis para decisões clínicas importantes.
            </p>
          </motion.section>
        </div>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export { Imunologicos }
