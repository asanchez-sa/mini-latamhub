import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import SidebarComponent from "@/components/core/SidebarComponent";
import NavbarComponent from "@/components/core/NavbarComponent";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          attribute="class"
          defaultTheme="system"
        >
          <TooltipProvider>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
              <SidebarComponent />
              <div className="flex flex-col">
                <NavbarComponent />
                {children}
              </div>
              
            </div>
            {/*  <main className="min-h-screen flex flex-col items-center">
              <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <SidebarComponent />
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                  {children}
                </div>
              </div>
            </main> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
