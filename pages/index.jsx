import React from 'react';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Me } from '../components/Me';
import { Projects } from '../components/Projects';
import { Tecnologies } from '../components/Tecnologies';

export default function Home({data, reposData}) {

  return (
    <div>
      <Head>
        <title>Rodrigo Nahid</title>
      </Head>
      <Header />
      <Banner />
      <Tecnologies />
      <Me data={data} />
      <Projects data={reposData}/>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://api.github.com/users/rodrigonahid`);
  const data = await res.json();

  const repos = await(fetch(`https://gh-pinned-repos.egoist.sh/?username=rodrigonahid`))
  const reposData = await repos.json();
  
  if (!data || !reposData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, reposData }, // will be passed to the page component as props
  }
}
