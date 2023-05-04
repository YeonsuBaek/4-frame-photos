import LAYOUT from '@/models/layout';
import React from 'react';
import Navigation from './Navigation';

const Layout: React.FC<LAYOUT> = (props) => {
  return (
    <>
      <Navigation title={props.title} onSaveImage={props.onSaveImage} />
      <main className='mt-[50px]'>{props.children}</main>
    </>
  );
};

export default Layout;
