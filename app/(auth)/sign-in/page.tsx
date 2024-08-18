"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { MenuButton } from "@/components/shared/navbar/Menubutton";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Submitted"); // Debugging

    try {
      const response = await fetch("https://quoterider-server.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      console.log("Response Status:", response.status); // Debugging

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        window.location.href = "/dashboard"; // Redirect manually for client-side navigation
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  }

  return (
    <section className="w-full h-screen flex p-7 md:p-12">
      <div
        className="hidden md:block w-1/2 rounded-3xl scale-75 pl-7"
        style={{
          backgroundImage: "url(/assets/Illustration.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute top-10 right-10 lg:right-[10vh]">
        <MenuButton>
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-300 text-lg md:text-xl capitalize"
          >
            Home
          </Link>
        </MenuButton>
      </div>
      <div className="absolute top-10 left-10 lg:left-[10vh] cursor-pointer text-blue-500">
        <Link href="/" className="flex items-center">
          <ArrowLeft />
          <span className="ml-2">Go Back</span>
        </Link>
      </div>
      <div className="w-full md:w-[40%] flex flex-col items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 md:w-[20vw]"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your email..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your password..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="text-md w-full">
              Submit
            </Button>
            <div className="text-sm md:text-base pt-2">
              Don&apos;t have an account?
              <Link
                href="/sign-up"
                className="text-blue-500 ml-2"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
