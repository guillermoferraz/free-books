import React from 'react';

/* components */
import LanguageSelector from '../LanguageSelector';
import Search from '../Search';

const Navbar = () => {
  return (
    <div>
      <LanguageSelector/>
      <Search/>
    </div>
  )
}
export default Navbar;