"use client"
import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Separator } from "@/components/ui/separator"
import  Progress  from "@/components/form/progress"
import Image from "next/image"

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
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
})

function SignUp(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Nanyonga Rahmah",
      email: "rahmah@nova.tech",
      password: "wERe4542@y6"
    },
  })
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <div className="flex flex-col justify-center  bg-white -md pl-20  pt-20">
        <h3 className="text-center text-4xl">Welcome to NovaCRM!</h3>
        <p className="text-center pt-1 pb-6 text-md text-slate-500">Best Tool for Business Management</p>
        <Button type="button" variant="outline">
          <span>
          <Image src="/google.svg" alt="Instagram" width={60} height={24} />
          </span>
          <span>
          Sign in with Google
          </span>
          </Button>
          <div className="p-2 grid grid-cols-3 ">
          <span className="col-span-1 pt-5">     <Separator /></span>
        <span className="text-center my-2 col-span-1"> OR </span>
          <span className="col-span-1 pt-5 ">     <Separator /></span>
          </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-l">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-l">Email</FormLabel>
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
                  <FormLabel className="text-l">Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="shadcn" {...field} className="rounded-xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full ">Continue</Button>
          </form>
        </Form>
      <h5 className="mt-2 mb-6 text-gray-500 font-weight-400 text-center text-xs">By clicking on signup, you agree to NovaCRM's  terms of service and Privacy policy</h5>
      <Progress/>
      </div>
    </>
  )
}

export default SignUp
