import React from 'react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Me } from '../components/Me';
import { Tecnologies } from '../components/Tecnologies';

export default function Home({data}) {

  return (
    <div>
      <Header />
      <Banner />
      <Tecnologies />
      <Me data={data} />
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/users/rodrigonahid`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}