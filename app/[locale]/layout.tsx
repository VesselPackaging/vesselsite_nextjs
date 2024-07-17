import '../../styles/globals.css';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Metadata } from 'next'
import {NextIntlClientProvider, useMessages } from 'next-intl';
import '../../i18n';

export const metadata: Metadata = {
  title: 'TricorBraun Canada',
  description: "Shop Cans"
};

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = useMessages();

    return (
      <html lang={locale}>
          <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
              <div className='main'>
                  <div className='vesselbg'/>
              </div>
  
              <main className='app'>
                  <Nav />
                    {children}
                  <Footer />
              </main>
              </NextIntlClientProvider>
          </body>
      </html>
    )
}

// export default RootLayout