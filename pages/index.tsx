import type { NextPage } from 'next'
import Head from 'next/head'
import SuggestionList from '../components/SuggestionList';

const Home: NextPage = () => {
  return (
    <div>
      <SuggestionList />
    </div>
  )
}

export default Home
