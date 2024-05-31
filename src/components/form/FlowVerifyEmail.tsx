import React from 'react';
import Image from 'next/image';

function FlowVerifyEmail() {
    return (
        <div className="relative">
            <div className="text-2xl font-bold ">
                <span className="text-teal-600 text-md">Nova</span>
                <span className='text-md'>CRM</span>
            </div>
            <ul className="space-y-10 relative my-20">
                <li className="flex items-center relative">
                    <div className="rounded-md border-2 border-gray-400 p-2">
                        <Image src="/person.svg" alt="person" width={24} height={24} />
                    </div>
                    <span className="ml-5">
                        <p className='font-bold text-gray-500'>Your Details</p>
                        <p className='text-sm font-light  text-gray-400'>Name, Email and Password</p>
                    </span>
                    <div className="absolute left-5 top-full w-px h-10 bg-gray-400"></div>
                </li>
                <li className="flex items-center relative">
                    <div className="rounded-md border-2 border-gray-400 p-2 ">
                        <Image src="/email.svg" alt="email" width={24} height={24} />
                    </div>
                    <span className="ml-4">
                        <p className='font-bold text-gray-700'>Verify Email</p>
                        <p className='text-sm font-light  text-gray-500'>Enter your verification code</p>
                    </span>
                    <div className="absolute left-5 top-full w-px h-10 bg-gray-400"></div>
                </li>
                <li className="flex items-center relative">
                    <div className="rounded-md border-2 border-gray-400 p-2 bg-white">
                        <Image src="/groups.svg" alt="groups" width={28} height={24} />
                    </div>
                    <span className="ml-4">
                        <p className='font-bold text-gray-700'>Add Company/Organization</p>
                        <p className='text-sm font-light  text-gray-400'>Add your company/organization</p>
                    </span>
                    <div className="absolute left-5 top-full w-px h-10 bg-gray-400 "></div>
                </li>
                <li className="flex items-center relative">
                    <div className="rounded-md border-2 border-gray-400 p-2 bg-white">
                        <Image src="/rocket.svg" alt="rocket" width={28} height={24} />
                    </div>
                    <span className="ml-4">
                        <p className='font-bold text-gray-700'>Welcome to NovaCRM</p>
                        <p className='text-sm font-light text-gray-400'>Get up and running in 2 minutes</p>
                    </span>
                </li>
            </ul>
            <div className="flex flex-col md:flex-row mt-8 space-y-10 md:space-y-0  md:space-x-80">
                <a href="/" className="underline pr-10 ">Back to Home</a>
                <a href="/signin" className="underline ">Signin</a>
            </div>
        </div>
    );
}

export default FlowVerifyEmail;
