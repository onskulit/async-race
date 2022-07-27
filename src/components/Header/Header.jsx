import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="h-14 px-2 flex justify-between items-center text-xl bg-grey-400 shadow-lg">
      <h1 className="font-bold">ASYNC RACE</h1>
      <Navigation />
    </header>
  );
}

export default Header;
