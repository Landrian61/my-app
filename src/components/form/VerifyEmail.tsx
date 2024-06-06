"use client";
import React, { useState, useEffect } from 'react';
import Progress from "@/components/progress";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Image from "next/image";

function VerifyEmail() {
  const [email] = useLocalStorage('userEmail', '');
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkVerificationStatus = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:4000/auth/api_admin/admin/verify-email`);
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to check verification status');
        }

        const data = await response.json();
        setIsVerified(data.isVerified);
      } catch (error) {
        setError("Error checking verification status.");
        console.error("Error checking verification status:", error);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      checkVerificationStatus();
    }
  }, [email]);

  return (
    <div className="flex flex-col justify-between h-full px-8 py-12 lg:px-16">
      <header className="text-center">
        <h1 className="text-2xl font-bold">Verify Your Email</h1>
        <p className="mt-2 text-gray-500">
          We have sent an email to {email}, open it and click verify
        </p>
      </header>
      <section className="mt-4 justify-center  px-40">
        <Image src="/verify.png" alt="VerifyEmail" width={200} height={500} />
      </section>
      {loading ? (
        <p className="text-center mt-4">Checking verification status...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <section className="mt-8">
          <AlertDialog open={isVerified} onOpenChange={(open) => setIsVerified(open)}>
            <AlertDialogTrigger className='w-full'>
              <Button className="w-full bg-teal-600 text-white rounded-md py-2">Continue</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Email verified successfully</AlertDialogTitle>
                <AlertDialogDescription>
                  Click continue to proceed to the next step
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Link href="/createworkspace">Continue</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      )}
      <Progress  steps={4 } activeStep={1}/>
    </div>
  );
}

export default VerifyEmail;
