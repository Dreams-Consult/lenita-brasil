import './index.css'
import BotoxImg from '../../assets/Botox.jpg'
import PreenchimentoImg from '../../assets/PreenchimentoLabial.jpg'
import MesojectGunImg from '../../assets/MesojectGun.jpg'
import TerapiaCapilarImg from '../../assets/TerapiaCapilar.jpg'
import ManchasImg from '../../assets/ManchasRosto.jpg'
import FiosPDOImg from '../../assets/FIOS PDO.jpg'
import UltraformerImg from '../../assets/Ultraformer.jpg'
import LavieeenImg from '../../assets/lavieen.jpg'

function Procedimentos() {
  return (
    <div id='procedimentos' className='procedimentos'>
      <div className='procedimentos-content'>
        <h1>Procedimentos</h1>
        <p className='procedimentos-intro'>
          Na Clínica Lenita Brasil, seu tratamento estético é conduzido com técnica avançada, 
          equipamentos modernos e atenção cuidadosa às suas principais necessidades e desejos. 
          O nosso objetivo é realçar sua beleza natural com segurança e harmonia para alcançar 
          resultados duradouros.
        </p>
        
        <h2 className='procedimentos-subtitle'>O que deseja transformar hoje?</h2>
        
        <div className='procedimentos-grid'>
          <div className='procedimento-card'>
            <div className='procedimento-image'>
              <img src={BotoxImg} alt="Botox" />
            </div>
            <h3>Botox</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              <img src={PreenchimentoImg} alt="Preenchimento labial" />
            </div>
            <h3>Preenchimento labial</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              <img src={MesojectGunImg} alt="MesojectGun" />
            </div>
            <h3>MesojectGun</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              <img src={TerapiaCapilarImg} alt="Terapia capilar" />
            </div>
            <h3>Terapia capilar</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              <img src={ManchasImg} alt="Tratamento de manchas" />
            </div>
            <h3>Tratamento de manchas</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              <img src={FiosPDOImg} alt="Fios de PDO" />
            </div>
            <h3>Fios de PDO</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              <img src={UltraformerImg} alt="Ultraformer MPT" />
            </div>
            <h3>Ultraformer MPT</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              <img src={LavieeenImg} alt="Laser Lavieen" />
            </div>
            <h3>Laser Lavieen</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Procedimentos }
