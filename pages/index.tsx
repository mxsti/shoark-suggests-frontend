import type { NextPage } from 'next'
import Head from 'next/head'
import SuggestionCard from '../components/SuggestionCard'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SHOARK SUGGESTS</title>
      </Head>
      <SuggestionCard />
    </div>
  )
}

export default Home
