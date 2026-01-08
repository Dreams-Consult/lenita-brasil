import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import '../Hematologicos/index.css'

function Hormonais() {
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
            Exames Hormonais
          </motion.h1>
          <motion.p
            className='exam-subtitle'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Avaliação completa do sistema endócrino e equilíbrio hormonal
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
            <h2>O que são Exames Hormonais?</h2>
            <p>
              Os exames hormonais medem os níveis de hormônios no sangue, substâncias produzidas por 
              glândulas endócrinas que regulam diversas funções do organismo. Esses exames são fundamentais 
              para diagnosticar distúrbios da tireoide, problemas reprodutivos, desequilíbrios metabólicos 
              e outras condições relacionadas ao sistema endócrino.
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
                <h3>TSH e T4 Livre</h3>
                <p>Avaliam a função da tireoide, detectando hipo ou hipertireoidismo.</p>
              </div>
              <div className='exam-item'>
                <h3>Testosterona</h3>
                <p>Importante para avaliação da função reprodutiva masculina e feminina.</p>
              </div>
              <div className='exam-item'>
                <h3>Estradiol e Progesterona</h3>
                <p>Hormônios femininos essenciais para fertilidade e ciclo menstrual.</p>
              </div>
              <div className='exam-item'>
                <h3>Cortisol</h3>
                <p>Hormônio do estresse, avalia função adrenal e distúrbios metabólicos.</p>
              </div>
              <div className='exam-item'>
                <h3>Prolactina</h3>
                <p>Importante para investigação de infertilidade e distúrbios menstruais.</p>
              </div>
              <div className='exam-item'>
                <h3>Insulina</h3>
                <p>Avalia resistência insulínica e risco de diabetes tipo 2.</p>
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
              Indicados para investigação de alterações de peso, fadiga crônica, problemas de fertilidade, 
              irregularidades menstruais, sintomas de menopausa, suspeita de disfunção tireoidiana e 
              acompanhamento de tratamentos hormonais.
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
              Contamos com metodologias de dosagem hormonal de alta sensibilidade e especificidade, 
              garantindo resultados confiáveis mesmo para hormônios em baixas concentrações. Nossa equipe 
              especializada interpreta os resultados considerando fatores individuais como idade, sexo e 
              fase do ciclo menstrual.
            </p>
          </motion.section>
        </div>
      </motion.div>
      <Contato />
      <Footer />
    </>
  )
}

export { Hormonais }
