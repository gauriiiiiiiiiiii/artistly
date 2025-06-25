import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AppProvider } from '@/context/AppContext';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artistly - Connect with World-Class Performing Artists',
  description: 'Discover and book talented performers for your events. From singers and dancers to speakers and entertainers - find the perfect artist for any occasion.',
  keywords: 'artists, performers, booking, events, entertainment, singers, dancers, speakers, DJs',
  authors: [{ name: 'Artistly Team' }],
  openGraph: {
    title: 'Artistly - Connect with World-Class Performing Artists',
    description: 'Discover and book talented performers for your events.',
    type: 'website',
    url: 'https://artistly.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artistly - Connect with World-Class Performing Artists',
    description: 'Discover and book talented performers for your events.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}