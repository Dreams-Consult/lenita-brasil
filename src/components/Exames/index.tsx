import './index.css'

function Exames() {
  function handleCategoryClick(category: string) {
    alert(`Você selecionou: ${category}`)
  }

  return (
    <div id='exames' className='exames'>
      <div className='exames-content'>
        <h1>Exames</h1>
        <p className='exames-intro'>
          Nossos laboratórios estão entre os mais completos do Pará. Todos oferecem excelência 
          técnica, equipamentos modernos e de alta precisão, com rapidez na entrega de todos os 
          resultados. Conheça abaixo a nossa lista de exames convencionais disponíveis.
        </p>
        
        <div className='exames-categories'>
          <button className='category-btn' onClick={() => handleCategoryClick('Hematológicos')}>
            Hematológicos
          </button>
          <button className='category-btn' onClick={() => handleCategoryClick('Bioquímicos')}>
            Bioquímicos
          </button>
          <button className='category-btn' onClick={() => handleCategoryClick('Hormonais')}>
            Hormonais
          </button>
          <button className='category-btn' onClick={() => handleCategoryClick('Imunológicos')}>
            Imunológicos
          </button>
        </div>
      </div>
    </div>
  )
}

export { Exames }
