import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import SuggestionCard from '../components/SuggestionCard'

const suggestionsDummy = 
  [{
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      name: "Stranger Things",
      streamingService: "Netflix",
      genre: "Drama, Fantasy, Horror",
      rating: "8.7",
  }]

const Home: NextPage = () => {
  const [suggestions, setSuggestions] = useState(suggestionsDummy);

  return (
    <div>
      <Head>
        <title>SHOARK SUGGESTS</title>
      </Head>
      <div className="flex justify-center items-center h-screen">
        {suggestions && suggestions.map((suggestion,index) => {
          const suggestionIndentifier = `s-${index}`;
          <div id={suggestionIndentifier}>
            <SuggestionCard 
              thumbnail={suggestion.thumbnail}
              name={suggestion.name}
              streamingService={suggestion.streamingService}
              genre={suggestion.genre}
              rating={suggestion.rating}
            />
          </div>
        })}
      </div>
    </div>
  )
}

export default Home
