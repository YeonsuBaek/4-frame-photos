import type { AppProps } from 'next/app';
import {
  Nanum_Gothic,
  Playfair_Display,
  Black_Han_Sans,
  East_Sea_Dokdo,
  Gugi,
  Do_Hyeon,
} from 'next/font/google';
import '../globals.css';

const nanum = Nanum_Gothic({
  preload: false,
  weight: ['400', '700'],

  variable: '--nanum',
});

const playfair = Playfair_Display({
  preload: false,
  weight: '400',
  variable: '--playfair',
});

const blackHanSans = Black_Han_Sans({
  preload: false,
  weight: '400',
  variable: '--blackhansans',
});

const eastSeaDokdo = East_Sea_Dokdo({
  preload: false,
  weight: '400',
  variable: '--eastseadokdo',
});

const gugi = Gugi({
  preload: false,
  weight: '400',
  variable: '--gugi',
});

const doHyeon = Do_Hyeon({
  preload: false,
  weight: '400',
  variable: '--dohyeon',
});

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={cls(
        nanum.className,
        playfair.variable,
        blackHanSans.variable,
        eastSeaDokdo.variable,
        gugi.variable,
        doHyeon.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
