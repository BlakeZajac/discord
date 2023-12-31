import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { SocketProvider } from "@/components/providers/SocketProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";

import { cn } from "@/lib/utils";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord",
  description: "Discord Clone developed by Blake Zajac",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(font.className, "bg-white dark:!bg-[#313338]")}>
          <SocketProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              storageKey="discord-theme"
            >
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </ThemeProvider>
          </SocketProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
