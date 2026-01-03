import './index.css'
import { Button } from '../Button'

function Tratamentos() {
  function handleClick() {
    alert("Agende sua avaliação para conhecer o tratamento ideal!")
  }

  return (
    <div id='tratamentos' className='tratamentos'>
      <div className='tratamentos-content'>
        <h1>Tratamentos e Procedimentos</h1>
        <p className='tratamentos-intro'>
          Especialistas em rejuvenescimento facial e corporal com 
          as técnicas mais avançadas e seguras do mercado.
        </p>
        
        <div className='tratamentos-grid'>
          <div className='tratamento-card'>
            <h3>Preenchimento Facial</h3>
            <p>
              Ácido hialurônico de alta qualidade para restaurar volume 
              e suavizar linhas de expressão com resultados naturais.
            </p>
          </div>

          <div className='tratamento-card'>
            <h3>Toxina Botulínica</h3>
            <p>
              Tratamento para rugas dinâmicas e prevenção do 
              envelhecimento com técnicas precisas e personalizadas.
            </p>
          </div>

          <div className='tratamento-card'>
            <h3>Bioestimuladores</h3>
            <p>
              Estimulação natural de colágeno para rejuvenescimento 
              progressivo e duradouro da pele.
            </p>
          </div>

          <div className='tratamento-card'>
            <h3>Laser e Luz Intensa</h3>
            <p>
              Tratamentos avançados para manchas, vasos, 
              textura e rejuvenescimento cutâneo.
            </p>
          </div>

          <div className='tratamento-card'>
            <h3>Skinbooster</h3>
            <p>
              Hidratação profunda da pele com resultados de 
              luminosidade e viço imediatos.
            </p>
          </div>

          <div className='tratamento-card'>
            <h3>Harmonização Facial</h3>
            <p>
              Planejamento completo para equilíbrio e harmonia 
              das proporções faciais de forma natural.
            </p>
          </div>

          <div className='tratamento-card'>
            <h3>Fios de Sustentação</h3>
            <p>
              Lifting sem cirurgia para reposicionamento e 
              sustentação dos tecidos faciais.
            </p>
          </div>

          <div className='tratamento-card'>
            <h3>Tratamentos Corporais</h3>
            <p>
              Procedimentos estéticos para modelagem, firmeza 
              e rejuvenescimento da pele corporal.
            </p>
          </div>
        </div>

        <Button text='Agendar avaliação' onClick={handleClick}/>
      </div>
    </div>
  )
}

export { Tratamentos }
