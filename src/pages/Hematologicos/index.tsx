import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import './index.css'

function Hematologicos() {
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
            Exames Hematológicos
          </motion.h1>
          <motion.p
            className='exam-subtitle'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Análises completas do sangue para diagnóstico e acompanhamento da sua saúde
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
            <h2>O que são Exames Hematológicos?</h2>
            <p>
              Os exames hematológicos são análises laboratoriais que avaliam os componentes do sangue, 
              incluindo células vermelhas (hemácias), células brancas (leucócitos) e plaquetas. 
              Esses exames são fundamentais para diagnosticar doenças do sangue, infecções, anemias 
              e distúrbios de coagulação.
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
                <h3>Hemograma Completo</h3>
                <p>Avalia todos os componentes do sangue, identificando anemias, infecções e alterações na coagulação.</p>
              </div>
              <div className='exam-item'>
                <h3>Contagem de Plaquetas</h3>
                <p>Mede a quantidade de plaquetas no sangue, essencial para avaliar a capacidade de coagulação.</p>
              </div>
              <div className='exam-item'>
                <h3>VHS (Velocidade de Hemossedimentação)</h3>
                <p>Detecta processos inflamatórios e infecciosos no organismo.</p>
              </div>
              <div className='exam-item'>
                <h3>Coagulograma</h3>
                <p>Avalia a capacidade de coagulação do sangue, importante antes de cirurgias.</p>
              </div>
              <div className='exam-item'>
                <h3>Tipagem Sanguínea</h3>
                <p>Identifica o grupo sanguíneo (A, B, AB, O) e o fator Rh (positivo ou negativo).</p>
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
              Os exames hematológicos são indicados para check-ups de rotina, investigação de sintomas 
              como fadiga e palidez, pré-operatórios, acompanhamento de doenças crônicas e durante 
              tratamentos que afetam as células sanguíneas.
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
              Contamos com equipamentos de última geração e equipe altamente qualificada, 
              garantindo resultados precisos e rápidos. Todos os exames são realizados com 
              rigoroso controle de qualidade, seguindo os mais altos padrões laboratoriais.
            </p>
          </motion.section>
        </div>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export { Hematologicos }
