import LAYOUT from '@/models/layout';
import React from 'react';
import Navigation from './Navigation';

const Layout = ({ title, onBack, onSave, children }: LAYOUT) => {
  return (
    <>
      <Navigation title={title} onBack={onBack} onSave={onSave} />
      <main className='flex items-center justify-center w-screen h-full scrollbar-hide'>
        {children}
      </main>
    </>
  );
};

export default Layout;
