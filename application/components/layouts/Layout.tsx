import LAYOUT from '@/models/layout';
import React from 'react';
import Navigation from './Navigation';

const Layout: React.FC<LAYOUT> = (props) => {
  return (
    <>
      <Navigation
        title={props.title}
        onBack={props.onBack}
        onSaveImage={props.onSaveImage}
      />
      <main className='flex items-center justify-center w-full h-full overflow-scroll scrollbar-hide'>
        {props.children}
      </main>
    </>
  );
};

export default Layout;
