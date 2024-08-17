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
import { useRouter } from "next/navigation";
import { MenuButton } from "@/components/shared/navbar/Menubutton";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export function SignIn() {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/sign-up");
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="w-full h-screen flex p-7 md:p-12">
      <div className="hidden md:block w-1/2 bg-blue-100 rounded-3xl"></div>
      <div className="absolute top-10 right-10">
        <MenuButton>
          <Link
            href="/"
            className={`text-gray-900 dark:text-gray-300 text-lg md:text-xl capitalize`}
          >
            Home
          </Link>
        </MenuButton>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
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
            <div className="text-sm md:text-lg pt-2">
              Don't have an account?
              <span
                onClick={handleSignInClick}
                className="text-blue-500 ml-2 cursor-pointer"
              >
                Sign Up
              </span>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}

// Add this line to export SignIn as the default export
export default SignIn;
