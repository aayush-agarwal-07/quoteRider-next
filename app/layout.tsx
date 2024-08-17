import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footbar from "@/components/shared/Footbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Quote Rider ",
  description:
    "Hello there I am Aayush K Agarwal a full stack developer and I love to build products that make people's life easier.",
  icons: {
    icon: "src/app/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          enableColorScheme={true}
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#808080"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            zIndex={1600}
            showAtBottom={false}
          />
          <Navbar />
          {children}
          <Footbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
