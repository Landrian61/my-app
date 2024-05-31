
"use client";
import React from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import Progress from "@/components/form/progress";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

function VerifyEmail() {
    return (
        <div className="flex flex-col justify-between h-full px-8 py-12 lg:px-16">
            <header className="text-center">
                <h1 className="text-xl font-semi-bold">Verify Your Email</h1>
                <p className="mt-1 text-sm text-gray-500">We sent a code to rahmah@nova.tech</p>
            </header>
            <section className="mt-4 flex justify-center">
                <InputOTP maxLength={5} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                    <InputOTPGroup className="flex space-x-2">
                        <InputOTPSlot index={0} className="w-12 h-12 border-2 rounded-md text-center" />
                        <InputOTPSlot index={1} className="w-12 h-12 border-2 rounded-md text-center" />
                        <InputOTPSlot index={2} className="w-12 h-12 border-2 rounded-md text-center" />
                        <InputOTPSlot index={3} className="w-12 h-12 border-2 rounded-md text-center" />
                        <InputOTPSlot index={4} className="w-12 h-12 border-2 rounded-md text-center" />
                    </InputOTPGroup>
                </InputOTP>
            </section>
            <section className="mt-2 text-center">
                <p>Didn’t get the code? <a href="#" className="text-teal-600 font-semibold">Click to resend</a></p>
            </section>
            <section className="mt-0">
                <Button className="w-full bg-teal-600 text-white rounded-md py-2">Continue</Button>
            </section>
            <Progress />
        </div>
    );
}

export default VerifyEmail;
