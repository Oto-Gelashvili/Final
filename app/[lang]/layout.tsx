import type { Metadata } from 'next';
import './globals.css';
import Header from './components/header/Header';
import { ThemeProvider } from 'next-themes';
import { i18n, type Locale } from '../../i18n-config';
import { getDictionary } from '@/get-dictionary';

export const metadata: Metadata = {
  title: 'ServIt',
  description: 'ServIt service marketplace',
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  const { children } = props;

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="../app/favicon.ico" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header lang={params.lang} dictionary={dictionary.header} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
