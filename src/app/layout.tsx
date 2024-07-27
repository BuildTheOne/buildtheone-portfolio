import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import "./icons.css";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | BuildTheOne",
    default: "BuildTheOne",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "A passionate developer, a minimalistic designer, and a challenger.",
  keywords: "web developer,mobile developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inconsolata.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center w-full h-screen bg-gray-200 dark:bg-black md:px-0 md:py-16 overflow-y-auto">
            <div className="w-full md:w-3/5 flex flex-col flex-1 gap-4 text-lg">
              <Navbar />
              <div className="flex-1 flex flex-col px-4 pb-4 md:p-0 gap-4">
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
