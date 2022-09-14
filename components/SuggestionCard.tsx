import { useEffect, useState } from "react";

type Suggestion = {
    thumbnail: string,
    name: string,
    streamingService: string,
    genre: string,
    rating: string,
}

const suggestionsDummy: Suggestion[] = 
    [{
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        name: "Stranger Things",
        streamingService: "Netflix",
        genre: "Drama, Fantasy, Horror",
        rating: "8.7",
    }]

const SuggestionCard = () => {
    const [suggestions, setSuggestions] = useState<Suggestion[]>(null);
    useEffect(() => {
      console.log(suggestions);
      setSuggestions(suggestionsDummy);
    });

    return(
      <div className="flex justify-center items-center h-screen">
        {suggestions && suggestions.map((suggestion, index) => (
          <div className="grid gap-2 grid-cols-4 suggestionCard">
            <div className="col-span-2 p-2">
              <img className="suggestionImg" src={suggestion.thumbnail} />
            </div>
            <div className="col-start-3 suggestionInfo">
              <p className="py-2">{suggestion.name}</p>
              <p className="py-2">{suggestion.rating}</p>
              <p className="py-2">{suggestion.streamingService}</p>
              <p className="py-2">{suggestion.genre}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default SuggestionCard;