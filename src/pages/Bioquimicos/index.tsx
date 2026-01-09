import { NavBar } from '../../components/NavBar'
import { Contato } from '../../components/Contato'
import { Footer } from '../../components/Footer'
import { YouTubePlayer } from '../../components/YouTubePlayer'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import bannerImage from '../../assets/banner-exames.jpg'
import whatsappIcon from '../../assets/whatsapp-icon.svg'
import siteConfig from '../../config/siteConfig.json'
import './index.css'

function Bioquimicos() {
  const isMobile = useMediaQuery({ query: `(min-width: 1100px)` })
  const examData = siteConfig.exames.bioquimicos

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
          <img src={bannerImage} alt='Exames Bioquímicos' className='exam-hero-bg' />
          <div className='exam-hero-overlay'>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {examData.titulo}
            </motion.h1>
          </div>
        </div>

        <motion.section 
          className='exam-intro-section'
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className='exam-intro-content'>
            <h2>{examData.titulo}</h2>
            <ul className='exam-intro-list'>
              {examData.lista.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <a 
              href={`https://wa.me/${siteConfig.contato.whatsapp}`}
              target='_blank' 
              rel='noopener noreferrer'
              className='agende-btn'
            >
              <img src={whatsappIcon} alt='WhatsApp' width={24} />
              Agende seu exame
            </a>
          </div>
          {examData.video && (
            <div className='exam-intro-video'>
              <YouTubePlayer 
                videoUrl={examData.video}
                orientation={examData.videoOrientation as 'vertical' | 'horizontal'}
                title={`Vídeo Explicativo ${examData.titulo}`}
              />
            </div>
          )}
        </motion.section>

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
              Os exames bioquímicos são análises laboratoriais que avaliam as substâncias químicas presentes no organismo, 
              como glicose, colesterol, enzimas, hormônios e outros componentes. Esses testes são fundamentais para 
              diagnóstico de diversas condições, monitoramento de doenças crônicas e avaliação da saúde geral.
            </p>
          </motion.section>

          <motion.section 
            className='exam-section'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Principais Exames Bioquímicos</h2>
            <div className='exam-list'>
              {examData.examesDetalhados.map((exame, index) => (
                <div key={index} className='exam-item'>
                  <h3>{exame.nome}</h3>
                  <p>{exame.descricao}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            className='exam-section'
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Quando Realizar Exames Bioquímicos?</h2>
            <p>
              Exames bioquímicos são recomendados em diversas situações:
            </p>
            <ul>
              <li>Check-ups preventivos anuais</li>
              <li>Acompanhamento de doenças crônicas (diabetes, hipertensão, colesterol alto)</li>
              <li>Avaliação pré-operatória</li>
              <li>Investigação de sintomas específicos</li>
              <li>Monitoramento de tratamentos medicamentosos</li>
              <li>Avaliação da função de órgãos vitais (fígado, rins, coração)</li>
            </ul>
          </motion.section>
        </div>

        <Contato />
      </motion.div>
      <Footer />
    </>
  )
}

export { Bioquimicos }
