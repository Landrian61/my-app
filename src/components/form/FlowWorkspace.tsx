import React from 'react';
import Image from 'next/image';

function FlowWorkspace() {
  return (
    <div className="relative bg-white  px-10 rounded-l-xl ">
      <div className="text-2xl font-bold py-10">
        <span className="text-teal-600">Nova</span>
        <span>CRM</span>
      </div>
      <ul className="space-y-10 relative ">
        <li className="flex items-center relative">
          <div className="rounded-xl border-2 border-gray-400 p-2 bg-white">
            <Image src="/person.svg" alt="person" width={24} height={24} />
          </div>
          <span className="ml-5">
            <p className='font-medium text-gray-700'>Your Details</p>
            <p className='text-sm font-light  text-gray-400'>Name, Email and Password</p>
            </span>
          <div className="absolute left-5 top-full w-px h-10 bg-gray-400"></div>
        </li>
        <li className="flex items-center relative">
          <div className="rounded-xl border-2 border-gray-400 p-2 bg-white">
            <Image src="/email.svg" alt="email" width={24} height={24} />
          </div>
          <span className="ml-4">
          <p className='font-medium text-gray-700'>Verify Email</p>
            <p className='text-sm font-light  text-gray-400'>Enter your verification code</p>
            </span>
          <div className="absolute left-5 top-full w-px h-10 bg-gray-400"></div>
        </li>
        <li className="flex items-center relative">
          <div className="rounded-xl border-2 border-gray-400 p-2 bg-white">
            <Image src="/groups.svg" alt="groups" width={28} height={24} />
          </div>
          <span className="ml-4">
          <p className='font-bold text-black'>Add Company/Organization</p>
            <p className='text-sm font-bold  text-black'>Add your company/organization</p>
            </span>
          <div className="absolute left-5 top-full w-px h-10 bg-gray-400 "></div>
        </li>
        <li className="flex items-center relative">
          <div className="rounded-xl border-2 border-gray-400 p-2  ">
            <Image src="/rocket.svg" alt="rocket" width={28} height={24} />
          </div>
          <span className="ml-4">
          <p className='font-medium text-gray-700'>Welcome to NovaCRM</p>
            <p className='text-sm font-light text-gray-400'>Get up and running in 2 minutes</p>
            </span>
        </li>
      </ul>
      <div className="flex my-10  mt-28 space-x-20 justify-between">
        <a href="/" className="underline">Back to Home</a>
        <a href="/login" className="underline">Signin</a>
      </div>
    </div>
  );
}

export default FlowWorkspace;