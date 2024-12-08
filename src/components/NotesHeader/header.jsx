import React from 'react';
import Search from './search';
import Title from './title';

function Header({ onSearchChange }) {
  return (
    <div className='note-app__header'>
      <Title />
      <Search onSearchChange={onSearchChange} />
    </div>
  );
}

export default Header;