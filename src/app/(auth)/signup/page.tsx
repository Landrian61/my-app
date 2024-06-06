import React from 'react';
import dynamic from 'next/dynamic';
import Flow from '../../../components/form/Flow';
import AuthLayout from '../layout';

const SignUp = dynamic(() => import('../../../components/form/SignUp'), { ssr: false });

const Page: React.FC = () => {
  console.log('Page component is rendering');

  return (
    <AuthLayout>
    <>
    <Flow />
      <SignUp />
      </>
      
    </AuthLayout>
  );
};

export default Page;
