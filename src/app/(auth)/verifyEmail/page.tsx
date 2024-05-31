import React from 'react';
import FlowVerifyEmail from '../../../components/form/FlowVerifyEmail';
import VerifyEmail from '@/components/form/VerifyEmail';
import SecondaryLayout from '../secondary-layout';

const page = () => {
    return (
        <SecondaryLayout>
        <div className='grid grid-cols-2 p-20 bg-white divide-x-2 divide-dashed rounded-md shadow-xl border-gray-500 w-auto'>
            <div className='col-span-1 flex justify-center items-center'>
                <FlowVerifyEmail />
            </div>
            <div className='col-span-1 flex justify-center items-center'>
                <VerifyEmail />
            </div>
        </div>
    </SecondaryLayout>
    )
}

export default page;
