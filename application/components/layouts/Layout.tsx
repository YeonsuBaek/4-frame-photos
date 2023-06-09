import LAYOUT from '@/models/layout';
import React from 'react';
import Navigation from './Navigation';

const Layout: React.FC<LAYOUT> = (props) => {
  return (
    <>
      <Navigation
        title={props.title}
        onBack={props.onBack}
        onSave={props.onSave}
      />
      <main className='flex items-center justify-center w-screen h-full scrollbar-hide'>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
