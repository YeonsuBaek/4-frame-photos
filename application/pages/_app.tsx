import type { AppProps } from 'next/app';
import {
  Nanum_Gothic,
  Playfair_Display,
  Black_Han_Sans,
  Jua,
  Song_Myung,
  East_Sea_Dokdo,
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
  variable: '--play-fair',
});

const blackHanSans = Black_Han_Sans({
  preload: false,
  weight: '400',
  variable: '--black-han-sans',
});

const jua = Jua({
  preload: false,
  weight: '400',
  variable: '--jua',
});

const songMyung = Song_Myung({
  preload: false,
  weight: '400',
  variable: '--song-myung',
});

const eastSeaDokdo = East_Sea_Dokdo({
  preload: false,
  weight: '400',
  variable: '--east-sea-dokdo',
});

const doHyeon = Do_Hyeon({
  preload: false,
  weight: '400',
  variable: '--do-hyeon',
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
        jua.variable,
        songMyung.variable,
        eastSeaDokdo.variable,
        doHyeon.variable
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
