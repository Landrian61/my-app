import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm ,SubmitHandler} from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner";
import Link from "next/link"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import {Button} from "@/components/ui/button"
  import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({

  email: z.string(),
  password: z.string().min(8),
})
type FormData = z.infer<typeof formSchema>;
export default  function LoginForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
       
        email: "rahmah@nova.tech",
        password: "wERe4542@y6"
      },
    })
   
    
    const onSubmit: SubmitHandler<FormData> = async (values) => {
      setErrorMessage(null);
      setIsSubmitting(true);
      try {
        const response = await fetch(
          "http://localhost:4000/auth/api_admin/admin/login",
          {
           method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          }
        );
  
        if (!response.ok) {
          const errorText = await response.text();
     toast.error("An error occurred during login");
        }
  
        const data = await response.json();
        console.log("Signin successful:", data);
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => {
          router.push("/verifyEmail");
        }, 1000)
        // Handle successful signup (e.g., redirect, show success message)
      } catch (error: unknown) {
        console.error("Signup error:", error);
        if (error instanceof Error) {
          (setErrorMessage(error.message));
        } else {
         (setErrorMessage("An unknown error occurred."));
        }
      } finally {
        setIsSubmitting(false);
      }
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
  
  return (
    <>
    <div className="px-10 py-5  bg-white  rounded-l-xl">
        <div className="header flex justify-between mb-10 text-xl">
            <div className="brand"><span className="text-teal-600 font-bold">Nova</span><span className="font-black">CRM</span></div>
            <div ><span className="text-gray-400">Don't have account?</span><span className="font-bold"> <Link href="/">Register</Link></span></div>
        </div>
        <div className="form w-full flex flex-col px-20">
        <h3 className="text-center text-3xl font-medium">Welcome to NovaCRM!</h3>
        <p className="text-center py-2 px-3 text-x font-normal text-gray-500">Best Tool for business management</p>
        <Button type="submit" variant="outline" className="w-full  my-3" > <Image src="/google.svg" alt="person" width={50} height={24} />Sign in with Google</Button>
      
        <div className="p-2 grid grid-cols-3 ">
          <span className=" pt-5">     <Separator /></span>
        <span className="text-center my-2 "> OR </span>
          <span className=" pt-5 ">     <Separator /></span>
          </div>
        
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-10">
       
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel  className="text-xl">Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} className="rounded-xl"/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel  className="text-xl">Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} className="rounded-xl"  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
         <Link href="">   <h3>Forgot Password?</h3></Link>
        </div>
        {errorMessage && (
                <div className="text-red-500 text-center">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="text-green-500 text-center">{successMessage}</div>
              )}
             <Button type="submit" className="w-full mb-4 mt-8">
            {form.formState.isSubmitting ? "Signing  in..." : "Sign in"}
          </Button>
      </form>
    </Form>
    </div>
    
    </div>
    </>
  )
}