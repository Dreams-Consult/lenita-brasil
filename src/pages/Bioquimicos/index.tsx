import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import '../Hematologicos/index.css'

function Bioquimicos() {
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
            Exames Bioquímicos
          </motion.h1>
          <motion.p
            className='exam-subtitle'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Análises detalhadas das substâncias químicas presentes no organismo
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
            <h2>O que são Exames Bioquímicos?</h2>
            <p>
              Os exames bioquímicos avaliam as substâncias químicas presentes no sangue e em outros 
              fluidos corporais. Essas análises são essenciais para diagnosticar e monitorar doenças 
              metabólicas, renais, hepáticas, cardiovasculares e nutricionais, fornecendo informações 
              vitais sobre o funcionamento do organismo.
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
                <h3>Glicemia</h3>
                <p>Mede os níveis de glicose no sangue, fundamental para diagnóstico e controle de diabetes.</p>
              </div>
              <div className='exam-item'>
                <h3>Colesterol e Triglicerídeos</h3>
                <p>Avalia os níveis de gorduras no sangue, importantes para saúde cardiovascular.</p>
              </div>
              <div className='exam-item'>
                <h3>Ureia e Creatinina</h3>
                <p>Avaliam a função renal, detectando problemas nos rins.</p>
              </div>
              <div className='exam-item'>
                <h3>TGO e TGP</h3>
                <p>Enzimas hepáticas que avaliam a função do fígado e detectam lesões hepáticas.</p>
              </div>
              <div className='exam-item'>
                <h3>Ácido Úrico</h3>
                <p>Identifica níveis elevados que podem causar gota e problemas renais.</p>
              </div>
              <div className='exam-item'>
                <h3>Eletrólitos</h3>
                <p>Avaliam sódio, potássio e outros minerais essenciais para o equilíbrio do organismo.</p>
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
              Recomendados para check-ups periódicos, investigação de sintomas como fadiga e náuseas, 
              acompanhamento de doenças crônicas (diabetes, hipertensão), avaliação de risco cardiovascular 
              e monitoramento de tratamentos medicamentosos que afetam órgãos vitais.
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
              Utilizamos equipamentos automatizados de última geração que garantem precisão e rapidez 
              nos resultados. Nossa equipe técnica especializada realiza controles de qualidade rigorosos 
              em todas as etapas do processo analítico.
            </p>
          </motion.section>
        </div>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export { Bioquimicos }
