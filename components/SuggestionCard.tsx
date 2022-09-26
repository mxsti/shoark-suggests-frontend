const SuggestionCard = (props: Suggestion) => {
  return(
    <div className="suggestionCard">
      <div className="col-span-2 p-2">
        <img className="suggestionImg" src={props.thumbnail} />
      </div>
      <div className="col-start-3 col-span-2 suggestionInfo grid grid-rows-3">
        <p className="py-2 row-start-1 text-2xl">{props.name}</p>
        <p className="py-2 row-start-2">{props.genre}</p>
        <p className="py-2 row-start-3">{props.rating} on IMDB</p>
        <p className="py-2 row-start-3">Watch on {props.streamingService}</p>
      </div>
    </div>
  );
}


export default SuggestionCard;