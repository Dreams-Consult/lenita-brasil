import './index.css'
import avatar from '../../assets/Imagem-Lenita.png'

function About() {
  return (
    <div id='sobre' className='sobre'>
      <div className='sobre-image'>
        <img className='avatar' src={avatar} alt='avatar' />
      </div>

      <div className='sobre-text'>
        <h1>Dra. Lenita Brasil</h1>
        <p>
          Médica e referência na integração entre saúde e bem-estar, a Dra. Lenita Brasil está à frente da clínica e da rede de laboratórios especializados em tratamentos estéticos individualizados e exames laboratoriais. Seu compromisso é promover equilíbrio, autoestima e qualidade de vida, sempre com acolhimento e resultados naturais.
        </p>
        <div className='button-container'>
          <button className='agende-btn'>Agende sua consulta</button>
        </div>
      </div>
    </div>
  )
}

export { About }
