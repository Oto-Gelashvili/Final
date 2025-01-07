import type { Metadata } from 'next';
import './globals.css';
import Header from './components/header/Header';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'ServIt',
  description: 'ServIt service marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
