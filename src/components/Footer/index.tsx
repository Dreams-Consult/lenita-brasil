import logo from '../../assets/logo-1.png'
import whatsappIcon from '../../assets/whatsapp-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'
import './index.css'

function Footer() {
  function handleWhatsAppClick() {
    window.open('https://wa.me/5591996040003', '_blank')
  }

  function handleInstagramDraClick() {
    window.open('https://www.instagram.com/dra.lenitabrasil', '_blank')
  }

  function handleInstagramLabClick() {
    window.open('https://www.instagram.com/laboratorio_lb/', '_blank')
  }

  function handleLocationClick(unidade: string) {
    alert(`Direcionando para ${unidade}`)
  }

  return (
    <div className="footer">
      <div className="footer-column logo-column">
        <img src={logo} alt='Lenita Brasil' className='footer-logo' />
      </div>

      <div className="footer-column">
        <nav className='footer-nav'>
          <a href='#banner'>Home</a>
          <a href='#sobre'>Dra. Lenita Brasil</a>
          <a href='#clinica'>Clínica</a>
          <a href='#procedimentos'>Procedimentos</a>
          <a href='#laboratorios'>Laboratórios</a>
          <a href='#exames'>Exames</a>
        </nav>
      </div>

      <div className="footer-column cta-column">
        <h2>Viva a experiência de um atendimento exclusivo e cuidadoso</h2>
        <p>
          Agende sua consulta ou exame em uma de nossas clínicas ou 
          laboratórios e permita-se sentir o melhor da sua própria beleza 
          e saúde.
        </p>
        <button className='whatsapp-btn' onClick={handleWhatsAppClick}>
          <img src={whatsappIcon} alt="WhatsApp" className='whatsapp-icon' />
          91 99604-0003
        </button>
      </div>

      <div className="footer-column contact-column">
        <div className='unidade-info'>
          <button className='unidade-badge' onClick={() => handleLocationClick('Unidade Belém')}>
            Unidade Belém
          </button>
          <p>R. Bernal do Couto, nº 75 - Umarizal</p>
        </div>

        <div className='unidade-info'>
          <button className='unidade-badge' onClick={() => handleLocationClick('Unidade Castanhal')}>
            Unidade Castanhal
          </button>
          <p>Av. Marechal Deodoro, nº 368 - Ianetama</p>
        </div>

        <div className='divider'></div>

        <div className='social-footer'>
          <div className='social-item' onClick={handleInstagramDraClick}>
            <img src={instagramIcon} alt="Instagram" className='instagram-icon' />
            <span>@dra.lenitabrasil</span>
          </div>
          <div className='social-item' onClick={handleInstagramLabClick}>
            <img src={instagramIcon} alt="Instagram" className='instagram-icon' />
            <span>@laboratorio_lb</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
