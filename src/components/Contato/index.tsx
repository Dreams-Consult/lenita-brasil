import './index.css'
import { Button } from '../Button'
import whatsapp from '../../assets/whatsapp-icon.svg'
import { useState } from 'react'

function Contato() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit() {
    if (nome && telefone && email) {
      alert(`Obrigado pelo contato, ${nome}! Retornaremos em breve.`)
      setNome('')
      setTelefone('')
      setEmail('')
      setMensagem('')
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.')
    }
  }

  return (
    <div id='contato' className='contato'>
      <div className='contato-content'>
        <div className='contato-info'>
          <h1>Estamos prontos<br/>para cuidar de você.</h1>
          <p className='contato-intro'>
            Quer agendar uma consulta, exame ou saber mais<br/>
            sobre nossos tratamentos? Preencha o formulário<br/>
            e fale com nossa equipe.
          </p>

          <p className='contato-whatsapp-label'>Ou entre em contato pelo whatsaap</p>
          
          <a href='https://wa.me/5591996040003' target='_blank' rel='noopener noreferrer' className='whatsapp-link'>
            <img src={whatsapp} alt='WhatsApp' width={32} />
            <span>91 99604-0003</span>
          </a>
        </div>

        <div className='contato-form'>
          <div className='form-group'>
            <input 
              type='text'
              className='form-input'
              value={nome} 
              placeholder='Seu Nome' 
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <input 
              type='email'
              className='form-input'
              value={email} 
              placeholder='Seu E-mail' 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <input 
              type='tel'
              className='form-input'
              value={telefone} 
              placeholder='Seu Telefone' 
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <textarea 
              className='form-textarea'
              value={mensagem} 
              placeholder='Mensagem' 
              onChange={(e) => setMensagem(e.target.value)}
              rows={4}
            />
          </div>

          <div className='form-button-wrapper'>
            <Button text='Enviar' onClick={handleSubmit}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contato }
