"use client";
import React from "react";
import LoginForm from "@/components/form/Login";
import AuthLayout from "../layout";
export default function LoginPage() {
  return (
    <>
    <AuthLayout>
    <LoginForm/>
    <div className="bg-login-form bg-cover bg-center w-full rounded-r-xl block" ></div>
    </AuthLayout>
  
        </> 
  );
}