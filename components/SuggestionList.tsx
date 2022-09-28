import React, { useEffect } from "react";
import { useState } from "react";
import suggestionsDummy from "../sampleData";
import ApiCall from "../utils/apicall";
import SuggestionCard from "./SuggestionCard"

const SuggestionList = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>(null);

  useEffect(() => {
    ApiCall()
      .then((data) => {
        setSuggestions(shuffleArray(data));
      })
  }, []);

  const shuffleArray = (suggestions: Suggestion[]) => {
    let array = suggestions;
    // durstenfeld shuffle (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // scroll to in native JS, because...
  const scrollToRandomSuggestion = () => {
    const scrollTo = suggestions[Math.floor(Math.random() * suggestions.length)];

    // remove background from all suggestions
    const allDivs = document.getElementsByClassName("suggestionDiv");
    for (let i = 0; i < allDivs.length; i++) {
      allDivs.item(i).classList.add("opacity-25");
    }

    // scroll random element into view and set background
    const htmlElement = document.getElementById(`s-${scrollTo.imdbId}`);
    htmlElement.scrollIntoView({ behavior: "smooth", block: "center" });
    htmlElement.classList.remove("opacity-25");
  };

  return (
    <div className="grid grid-cols-4">
      <div className="flex-row space-x-8 px-4 col-span-1">
        <button className='suggestionButton' onClick={scrollToRandomSuggestion}>Zufällige Serie</button>
      </div>

      <div className="col-start-2 col-span-2">
        {suggestions && suggestions.map((suggestion) => {
          const identifier = `s-${suggestion.imdbId}`
          return (
            <div id={identifier} className="p-2 rounded-lg suggestionDiv">
              <SuggestionCard
                imdbId={suggestion.imdbId}
                thumbnail={suggestion.thumbnail}
                name={suggestion.name}
                genre={suggestion.genre}
                rating={suggestion.rating}
                runtime={suggestion.runtime}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default SuggestionList