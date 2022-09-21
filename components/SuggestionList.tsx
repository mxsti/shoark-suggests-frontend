import React from "react";
import { useState } from "react";
import suggestionsDummy from "../sampleData";
import SuggestionCard from "./SuggestionCard"

const SuggestionList = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(suggestionsDummy);

  const handleClick = () => {

  };

  return (
    <div className="grid grid-cols-4">
      <div className="flex-row space-x-8 px-4 col-span-1">
        <button className='suggestionButton' onClick={() => handleClick}>Zufällige Serie</button>
      </div>

      <div className="col-start-2 col-span-2">
        {suggestions.map((suggestion) => {
          return (
            <div className="p-2">
              <SuggestionCard
                id={suggestion.id}
                thumbnail={suggestion.thumbnail}
                name={suggestion.name}
                streamingService={suggestion.streamingService}
                genre={suggestion.genre}
                rating={suggestion.rating}
                favourite={suggestion.favourite}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default SuggestionList