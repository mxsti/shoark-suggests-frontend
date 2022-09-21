type SuggestionProps = Suggestion & {
  hover: boolean,
}

const SuggestionCard = (props: SuggestionProps) => {
  return(
    <div className={`suggestionCard ${props.hover ? "border-netflixDarkRed" : ""}`}>
      <div className="col-span-2 p-2">
        <img className="suggestionImg" src={props.thumbnail} />
      </div>
      <div className="col-start-3 suggestionInfo">
        <p className="py-2">{props.name}</p>
        <p className="py-2">{props.rating}</p>
        <p className="py-2">{props.streamingService}</p>
        <p className="py-2">{props.genre}</p>
      </div>
    </div>
  );
}


export default SuggestionCard;