import './index.css'
import searchLogo from '../../assets/search-icon.svg'

type InputProps = {
  value: string,
  placeholder?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  showSearchIcon?: boolean,
}

function Input({ value, placeholder, onChange, showSearchIcon = true }:InputProps) {
  return (
    <div className='input-wrapper'>
      <input value={value} placeholder={placeholder} onChange={onChange} />
      {showSearchIcon && <img className='search-logo' src={searchLogo} width={25}/>}
    </div>
  )
}

export { Input }
