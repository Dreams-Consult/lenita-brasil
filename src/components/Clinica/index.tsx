import './index.css'
import { Button } from '../Button'
import clinicImage from '../../assets/CLINICA.jpg'

function Clinica() {
  function handleClick() {
    alert("Consulta agendada com sucesso!")
  }

  return (
    <div id='clinica' className='clinica'>
      <div className='clinica-content'>
        <div className='clinica-text'>
          <h1>Clínica Lenita Brasil</h1>
          <p>
            Em nossa clínica, sua experiência começa antes do
            procedimento. O tratamento exclusivo tem o olhar
            atento e a compreensão cuidadosa da Dra. Lenita
            Brasil para que você conheça profundamente os
            procedimentos que mais fazem sentido para a sua
            história e para a imagem que você deseja expressar.
          </p>
          <Button text='Saiba mais' onClick={handleClick}/>
        </div>
        <div className='clinica-image'>
          <img src={clinicImage} alt='Clínica Lenita Brasil' />
        </div>
      </div>
    </div>
  )
}

export { Clinica }
