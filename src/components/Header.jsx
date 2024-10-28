import React from 'react';

const Header = ({ findNote }) => {
  return (
  <>
    <header className='note-app__header'>
        <h1>Notes .</h1>
        <input type="text" placeholder='Cari catatan...' onChange={findNote}/>
    </header>
  </>
  );
}

export default Header;