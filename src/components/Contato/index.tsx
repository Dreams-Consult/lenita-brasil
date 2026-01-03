import './index.css'
import { Button } from '../Button'
import { Input } from '../Input'
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
          <h1>Entre em Contato</h1>
          <p className='contato-intro'>
            Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas. 
            Entre em contato conosco através dos canais abaixo ou preencha o formulário.
          </p>

          <div className='info-block'>
            <h3>📍 Endereço</h3>
            <p>Rua Example, 123 - Centro<br/>São Paulo - SP<br/>CEP: 01234-567</p>
          </div>

          <div className='info-block'>
            <h3>📞 Telefone</h3>
            <p>(11) 98765-4321<br/>(11) 3456-7890</p>
          </div>

          <div className='info-block'>
            <h3>⏰ Horário de Atendimento</h3>
            <p>Segunda a Sexta: 8h às 18h<br/>Sábado: 8h às 12h</p>
          </div>

          <div className='info-block'>
            <h3>✉️ E-mail</h3>
            <p>contato@lenitabrasil.com.br</p>
          </div>
        </div>

        <div className='contato-form'>
          <h2>Envie sua Mensagem</h2>
          <div className='form-group'>
            <label>Nome *</label>
            <Input 
              value={nome} 
              placeholder='Seu nome completo' 
              onChange={(e) => setNome(e.target.value)}
              showSearchIcon={false}
            />
          </div>

          <div className='form-group'>
            <label>Telefone *</label>
            <Input 
              value={telefone} 
              placeholder='(00) 00000-0000' 
              onChange={(e) => setTelefone(e.target.value)}
              showSearchIcon={false}
            />
          </div>

          <div className='form-group'>
            <label>E-mail *</label>
            <Input 
              value={email} 
              placeholder='seu@email.com' 
              onChange={(e) => setEmail(e.target.value)}
              showSearchIcon={false}
            />
          </div>

          <div className='form-group'>
            <label>Mensagem</label>
            <textarea 
              className='textarea-contato'
              value={mensagem} 
              placeholder='Como podemos ajudá-lo?' 
              onChange={(e) => setMensagem(e.target.value)}
              rows={5}
            />
          </div>

          <Button text='Enviar mensagem' onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  )
}

export { Contato }
