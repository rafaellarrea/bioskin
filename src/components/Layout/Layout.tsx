import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from './Toaster';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;