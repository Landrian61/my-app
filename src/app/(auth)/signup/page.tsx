
import React from 'react';
import Flow from '../../../components/form/Flow';
import SignUp from '../../../components/form/SignUp';
import SecondaryLayout from '../secondary-layout';

const Page: React.FC = () => {
    return (
        <SecondaryLayout>
            <div className='grid grid-cols-2 p-20 bg-white divide-x-2 divide-dashed rounded-md shadow-xl border-gray-500'>
                <div className='col-span-1 flex justify-center items-center'>
                    <Flow />
                </div>
                <div className='col-span-1 flex justify-center items-center'>
                    <SignUp />
                </div>
            </div>
        </SecondaryLayout>
    )
}

export default Page;
