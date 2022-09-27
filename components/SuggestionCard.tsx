import { SiImdb } from 'react-icons/si';

const SuggestionCard = (props: Suggestion) => {
  return(
    <div className="suggestionCard">
      <div className="col-span-1 p-2">
        <img className="suggestionImg" src={props.thumbnail} />
      </div>
      <div className="col-start-2 col-span-2 suggestionInfo grid grid-rows-3">
        <p className="py-2 row-start-1 text-2xl font-bold">{props.name}</p>
        <p className="py-2 row-start-2">{props.genre}</p>
        <p className="py-2 row-start-3">{props.rating} Rating on IMDb</p>
      </div>
      <div className="col-start-4"><a target="_blank" href={`https://www.imdb.com/title/${props.imdbId}`}><SiImdb size={64}/></a></div>
      <div className="col-start-5 text-2xl"> 👍</div>
    </div>
  );
}


export default SuggestionCard;