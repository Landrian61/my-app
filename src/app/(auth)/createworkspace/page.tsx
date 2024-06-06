"use client";
import React from "react";
import Createworkspace from "@/components/form/create-workspace";
import FlowWorkspace from "@/components/form/FlowWorkspace";
import AuthLayout from "../layout";

export default function SignupPage() {
  return (
    <>
    <AuthLayout>
    <FlowWorkspace/>
<Createworkspace/>
    </AuthLayout>     
        </> 
  );
}