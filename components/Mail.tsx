import React from "react";
import { ArrowRight } from "lucide-react";

const Mail = () => {
    return (
        <div className="mb-24 md:float-right lg:m-auto p-8 relative z-10 top-[20vh] sm:top-0">
            <div className="flex md:w-64 font-medium tracking-medium flex-col gap-3 border-2 border-neutral-500 rotate-3 dark:border-white/20  p-4 rounded-lg">
                <h1 className="opacity-70 text-sm">👋 Thanks for visiting my site!</h1>
                <h1 className=" text-xl">Glad to have you here.</h1>
                <a href="mailto:aayushagarwal297@gmail.com?body=Hello" target="_blank" className="flex cursor-pointer text-sm items-center gap-2 duration-200 group">
                    Send me an email <ArrowRight className=" duration-200 group-hover:translate-x-3" />
                </a>
            </div>
        </div>
    );
};

export default Mail;