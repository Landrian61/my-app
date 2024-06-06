import React from 'react';
import FlowVerifyEmail from '../../../components/form/FlowVerifyEmail';
import VerifyEmail from '@/components/form/VerifyEmail';
import AuthLayout from '../layout';

const page = () => {
    return (
        <AuthLayout>
     
                <FlowVerifyEmail />
   
                <VerifyEmail />

    </AuthLayout>
    )
}

export default page;
