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
  username: z.string().min(1, { message: "Username is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export function SignUp() {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/sign-in");
  };
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
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
    <section className="w-full h-screen flex p-12 relative">
      <div className="w-1/2 bg-blue-100 rounded-3xl"></div>
      <h3 className="absolute top-10 right-10">
        <MenuButton>
          <Link
            href="/"
            className={`text-gray-900 dark:text-gray-300 text-xl capitalize`}
          >
            Home
          </Link>
        </MenuButton>
      </h3>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 w-[20vw]"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="enter your username..." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Button type="submit" className="text-md">
              Submit
            </Button>
            <p>
              Already have an account?
              <span
                onClick={handleSignInClick}
                className="text-blue-500 ml-2 cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
}

// Add this line to export SignUp as the default export
export default SignUp;
