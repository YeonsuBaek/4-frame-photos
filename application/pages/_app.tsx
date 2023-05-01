import type { AppProps } from 'next/app';
import { Nanum_Gothic } from 'next/font/google';
import '../globals.css';

const nanum = Nanum_Gothic({
  preload: false,
  weight: ['400', '700'],

  variable: '--nanum',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nanum.className}>
      <Component {...pageProps} />
    </main>
  );
}
