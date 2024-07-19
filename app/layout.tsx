import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import NavbarComponent from "@/components/core/NavbarComponent";
import { Toaster } from "@/components/ui/toaster";
import RightSidebarComponent from "@/modules/feed/components/RightSidebarComponent";
import SidebarComponent from "@/components/core/SidebarComponent";

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
            <div className="flex min-h-screen w-full flex-col">
              <NavbarComponent />
              <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 grid-cols-[20%_60%_20%] lg:grid-cols-[20%_60%_20%]">
                  <div className="hidden md:grid">
                    <SidebarComponent />
                  </div>
                  {children}
                  <div className="hidden md:grid pl-10">
                    <RightSidebarComponent />
                  </div>
                </div>
              </main>
            </div>
          </TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
