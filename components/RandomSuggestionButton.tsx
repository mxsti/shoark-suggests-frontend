const RandomSuggestionButton = (props) => {

    const scrollToRandomSuggestion = () => {
        const scrollTo = props.suggestions[Math.floor(Math.random()*props.suggestions.length)];
        document.getElementById(`s-${scrollTo.id}`).scrollIntoView({behavior: "smooth"});
    };

    return (
        <button onClick={scrollToRandomSuggestion} className="suggestionButton">Zufällige Serie</button>
    )
}

export default RandomSuggestionButton