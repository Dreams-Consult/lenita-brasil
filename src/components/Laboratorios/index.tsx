import './index.css'

function Laboratorios() {
  function handleLocationClick(unidade: string) {
    alert(`Direcionando para a ${unidade}!`)
  }

  return (
    <div id='laboratorios' className='laboratorios'>
      <div className='laboratorios-content'>
        <h1>Laboratórios Lenita Brasil</h1>
        <p className='laboratorios-intro'>
          Os Laboratórios Lenita Brasil contam com duas unidades prontas para receber você. 
          Realizamos seus exames com rigor técnico, responsabilidade e agilidade, garantindo uma 
          experiência tranquila e segura em todas as etapas do atendimento.
        </p>
        
        <div className='laboratorios-grid'>
          <div className='unidade-card'>
            <div className='card-image'>
              <span className='badge'>UNIDADE BELÉM</span>
            </div>
            <div className='card-info'>
              <p className='endereco'>R. Bernal do Couto, nº 75 - Umarizal</p>
              <button className='location-btn' onClick={() => handleLocationClick('Unidade Belém')}>
                <span className='location-icon'>📍</span>
                Saiba como chegar
              </button>
            </div>
          </div>

          <div className='unidade-card'>
            <div className='card-image'>
              <span className='badge'>UNIDADE CASTANHAL</span>
            </div>
            <div className='card-info'>
              <p className='endereco'>Av. Marechal Deodoro, nº 368 - Ianetama</p>
              <button className='location-btn' onClick={() => handleLocationClick('Unidade Castanhal')}>
                <span className='location-icon'>📍</span>
                Saiba como chegar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Laboratorios }
