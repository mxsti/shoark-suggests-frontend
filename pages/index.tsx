import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import SuggestionList from '../components/SuggestionList';
import suggestionsDummy from '../sampleData';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SHOARK SUGGESTS</title>
      </Head>
      <SuggestionList />
    </div>
  )
}

export default Home
