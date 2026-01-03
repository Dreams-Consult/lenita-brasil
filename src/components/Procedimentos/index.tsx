import './index.css'

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
              {/* Placeholder para imagem de Botox */}
            </div>
            <h3>Botox</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              {/* Placeholder para imagem de Preenchimento labial */}
            </div>
            <h3>Preenchimento labial</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              {/* Placeholder para imagem de MesojectGun */}
            </div>
            <h3>MesojectGun</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              {/* Placeholder para imagem de Terapia capilar */}
            </div>
            <h3>Terapia capilar</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              {/* Placeholder para imagem */}
            </div>
            <h3>Bioestimuladores</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              {/* Placeholder para imagem */}
            </div>
            <h3>Harmonização facial</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              {/* Placeholder para imagem */}
            </div>
            <h3>Peeling</h3>
          </div>

          <div className='procedimento-card'>
            <div className='procedimento-image'>
              {/* Placeholder para imagem */}
            </div>
            <h3>Microagulhamento</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Procedimentos }
