"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import Progress from "@/components/progress";
import Image from "next/image";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

function SignUp() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: "Nanyonga Rahmah",
    //   email: "rahmah@nova.tech",
    //   password: "wERe4542@y6",
    // },
  });

  const [_, setEmail] = useLocalStorage('userEmail', '');

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("http://localhost:4000/auth/api_admin/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        toast.error("An error occurred during signup");
        return;
      }

      setEmail(values.email);
      toast.success("Signup successful! Please verify your email to continue");
      router.push("/verifyEmail"); 

    } catch (error) {
      console.error("Error during signup:", error);
      if (error instanceof Error) {
        toast.error("An error occurred during signup");
      } else {
        toast.error("An unknown error occurred");
      }
    }
  }

  return (
    <div className="flex flex-col justify-center bg-white py-10 px-20 rounded-r-xl">
      <h3 className="text-center text-4xl">Welcome to NovaCRM!</h3>
      <p className="text-center pt-1 pb-6 text-md text-slate-500">Best Tool for Business Management</p>
      <Button type="button" variant="outline">
        <span>
          <Image src="/google.svg" alt="Google" width={60} height={24} />
        </span>
        <span>Sign up with Google</span>
      </Button>
      <div className="p-2 grid grid-cols-3">
        <span className="col-span-1 pt-5">
          <Separator />
        </span>
        <span className="text-center my-2 col-span-1"> OR </span>
        <span className="col-span-1 pt-5">
          <Separator />
        </span>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-l">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} className="rounded-xl" />
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
                  <Input placeholder="Email Address" {...field} className="rounded-xl" />
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
                  <Input type="password" placeholder="Password" {...field} className="rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mb-4 mt-8">
            {form.formState.isSubmitting ? "Signing up..." : "Continue"}
          </Button>
        </form>
      </Form>
      <p className="mt-2 mb-6 text-gray-500 font-weight-400 text-center text-xs">
        By clicking on signup, you agree to NovaCRM's terms of service and Privacy policy
      </p>
      <Progress steps={4} activeStep={0} />
    </div>
  );
}

export default SignUp;
