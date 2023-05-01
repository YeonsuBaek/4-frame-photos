import React from 'react';
import Navigation from './Navigation';

const Layout: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <Navigation title={props.title} />
      <main className='mt-[50px]'>{props.children}</main>
    </>
  );
};

export default Layout;
