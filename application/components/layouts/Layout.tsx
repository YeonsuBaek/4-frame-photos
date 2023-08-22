import LAYOUT from '@/models/layout';
import React from 'react';
import Navigation from './Navigation';

const Layout = ({ onBack, onSave, children }: LAYOUT) => {
  return (
    <>
      <Navigation onBack={onBack} onSave={onSave}>
        네컷사진 만들기
      </Navigation>
      <main className='flex items-center justify-center w-screen h-full scrollbar-hide'>
        {children}
      </main>
    </>
  );
};

export default Layout;
