import Head from 'next/head';
import { Navigation, Footer } from '../index';

export default function Layout({ children }: any) {
  return (
    <div>
      <Navigation />
      <main>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto my-80'>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
