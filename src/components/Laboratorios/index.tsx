import './index.css'
import belemImage from '../../assets/BELEM-EDIT-1.png'
import castanhalImage from '../../assets/CASTANHAL-EDIT-1.png'

function Laboratorios() {
  function handleLocationClick(address: string) {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(mapsUrl, '_blank')
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
              <img src={belemImage} alt="Laboratório Unidade Belém" />
              <span className='badge'>UNIDADE BELÉM</span>
            </div>
            <div className='card-info'>
              <p className='endereco'>R. Bernal do Couto, nº 75 - Umarizal</p>
              <button className='location-btn' onClick={() => handleLocationClick('R. Bernal do Couto, 75 - Umarizal, Belém - PA')}>
                <span className='location-icon'>📍</span>
                Saiba como chegar
              </button>
            </div>
          </div>

          <div className='unidade-card'>
            <div className='card-image'>
              <img src={castanhalImage} alt="Laboratório Unidade Castanhal" />
              <span className='badge'>UNIDADE CASTANHAL</span>
            </div>
            <div className='card-info'>
              <p className='endereco'>Av. Marechal Deodoro, nº 368 - Ianetama</p>
              <button className='location-btn' onClick={() => handleLocationClick('Av. Marechal Deodoro, 368 - Ianetama, Castanhal - PA')}>
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
