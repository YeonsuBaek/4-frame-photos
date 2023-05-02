import Form from '@/components/Form';
import React from 'react';
import Layout from '../../components/layouts/Layout';
import Optionbar from '../../components/layouts/Optionbar';

const MakingPage = () => {
  return (
    <>
      <Layout title='네컷사진 만들기'>
        <div className='h-[1000px]'>
          <Form />
        </div>
      </Layout>
      <Optionbar />
    </>
  );
};

export default MakingPage;
