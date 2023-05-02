import React from 'react';
import Navigation from './Navigation';

type Children = React.ReactChild[] | React.ReactChild[];

const Layout: React.FC<{
  title: string;
  onSaveImage: () => void;
  children: Children;
}> = (props) => {
  return (
    <>
      <Navigation title={props.title} onSaveImage={props.onSaveImage} />
      <main className='mt-[50px]'>{props.children}</main>
    </>
  );
};

export default Layout;
