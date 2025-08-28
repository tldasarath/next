import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import BackgroundEffects from '@/components/BackgroundEffects';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Media',
  description: 'Experience the cosmic journey',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen bg-black text-white overflow-x-hidden`}>
        <BackgroundEffects />
        <div className="relative z-10"> {/* This wraps Navbar and main content */}
        
          {children} {/* Your page content is injected here */}
        </div>
      </body>
    </html>
  );
}