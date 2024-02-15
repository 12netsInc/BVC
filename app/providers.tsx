"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children, session }: { children: React.ReactNode, session: Session }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
