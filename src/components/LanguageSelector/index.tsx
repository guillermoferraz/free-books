import React from 'react';

const LanguageSelector = () => {
  const handleLanguage = (lang: string) => {
    lang && localStorage.setItem('lng', lang)
    window.location.reload()
  }
  return (
    <div>
      <button onClick={() => handleLanguage('es')} >ES</button>
      <button onClick={() => handleLanguage('en')} >EN</button>
    </div>
  )
}
export default LanguageSelector;