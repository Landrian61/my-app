"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Progress from "@/components/progress";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2).max(50),
});

type FormData = z.infer<typeof formSchema>;

export default function CreateWorkspace() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "SprintUg",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(
        "http://localhost:4000/api_workspace/create-workspace",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        toast.error("An error occurred during workspace creation");
      }

      const data = await response.json();
      setSuccessMessage("Workspace created successfully!");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("CreateWorkspace error:", error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="workspace flex flex-col justify-center rounded-r-xl p-24 bg-white">
        <h3 className="text-3xl">What would you like to name your workspace?</h3>
        <p className="mt-2 mb-3 text-xl text-gray-400">
          Your workspace is where you can find your team and manage their activities
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-20">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl">Workspace name</FormLabel>
                  <FormControl>
                    <Input placeholder="SprintUg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-44 items-center">
              <Button type="submit" disabled={isSubmitting}>
                Continue
              </Button>
              <Link href="/">
                <p className="text-primary text-xl">Join a Workspace instead</p>
              </Link>
            </div>
            {errorMessage && (
              <div className="text-red-500 mt-2">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="text-green-500 mt-2">{successMessage}</div>
            )}
          </form>
        </Form>
        <Progress steps={4} activeStep={2} />
      </div>
    </>
  );
}