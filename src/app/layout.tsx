import './globals.css';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import App_wrapper from '@/components/App_wrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ativa Tech',
  description: 'Transformando a educação com tecnologia e metodologias ativas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} suppressHydrationWarning>
        <App_wrapper>
          <Providers>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </Providers>
        </App_wrapper>
      </body>
    </html>
  );
}
