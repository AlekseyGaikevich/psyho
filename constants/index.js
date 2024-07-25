import { Open_Sans, Montserrat } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const links = {
  tel: '+375 (33) 641-44-13',
  viber: 'viber://chat?number=%2B375336414413',
  tg: 'https://t.me/smur_fox',
  instagram: 'https://www.instagram.com/dr_chernobaeva_?igsh=MXBudHY3bjE5cGM5aw==',
};

