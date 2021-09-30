import React from 'react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Me } from '../components/Me';
import { Tecnologies } from '../components/Tecnologies';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Tecnologies />
      <Me />
    </div>
  )
}
