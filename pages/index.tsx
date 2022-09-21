import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import RandomSuggestionButton from '../components/RandomSuggestionButton';
import SuggestionCard from '../components/SuggestionCard'
import suggestionsDummy from '../sampleData';

const Home: NextPage = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(suggestionsDummy);
  
  return (
    <div>
      <Head>
        <title>SHOARK SUGGESTS</title>
      </Head>
      <div className="grid grid-cols-4">

        <div className="flex-row space-x-8 px-4 col-span-1">
          <RandomSuggestionButton suggestions={suggestions} />
          <RandomSuggestionButton suggestions={suggestions} />
        </div>

        <div className="col-start-2 col-span-2">

        {suggestions.map((suggestion) => {
          const suggestionIdentifier = `s-${suggestion.id}`
          return(

            <div id={suggestionIdentifier} className="p-2">
              <SuggestionCard 
                id={suggestion.id}
                thumbnail={suggestion.thumbnail}
                name={suggestion.name}
                streamingService={suggestion.streamingService}
                genre={suggestion.genre}
                rating={suggestion.rating}
                hover={false}
              />
            </div>
          )
        })}

        </div>
      </div>
    </div>
  )
}

export default Home
