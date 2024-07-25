import '../styles/globals.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { openSans } from '../constants';

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${openSans.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
