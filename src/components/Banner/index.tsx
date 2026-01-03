import { Button } from '../Button'
import './index.css'

function Banner() {

  function handleClick() {
    alert("Consulta reaizada com sucesso!")
  }

  return (
    <div id='banner' className="banner">
      <div className='banner-content'>
        <div className='divText'>
          <p>CLÍNICA MÉDICA
          DERMATOLÓGICA E
          EXAMES LABRATORIAIS
          DE ALTO PADRÃO</p>
        </div>

        <div className='divButton'>
          <Button text='Agende seu horário' onClick={handleClick}/>
        </div>
      </div>
    </div>
  )
}

export { Banner }
