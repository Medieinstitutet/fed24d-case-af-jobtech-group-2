import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DigiLayoutBlock } from '@digi/arbetsformedlingen-react';
import { LayoutBlockVariation } from '@digi/arbetsformedlingen';

export const Layout = () => {
  return (
    <>
    <DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </DigiLayoutBlock>
    </>
  );
};
