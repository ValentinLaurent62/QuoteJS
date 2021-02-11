import quotes from "./data";
import {useEffect, useState} from "react";

function Quote(props) {
    return (
        <>
            <div className="Quote-texte">
                Texte : {props.text}
            </div>
            <div className="Quote-auteur">
                Auteur : {props.author}
            </div>
        </>
    );
}

export default function Quotes() {
  function getQuote() {
    return quotes.length ? <Quote text={currentQuote.text}
                                   author={currentQuote.author}/> : '';
  }

  const [currIndex, setCurrIndex] = useState(0);
  const currentQuote = quotes[currIndex];
  const jsxQuote = getQuote();

  useEffect(() => document.title = `Citation numéro ${currIndex}`);

  function navigateQuotes(forward = true) {
    if (forward && currIndex >= quotes.length - 1)
      return setCurrIndex(0);
    if (!forward && currIndex === 0)
      return setCurrIndex(quotes.length - 1);

    setCurrIndex(currIndex + (forward ? 1 : -1));
  }

  function deleteQuote() {
    quotes.splice(currIndex, 1);
    navigateQuotes(false);
  }

  return (
    <div>
      {jsxQuote}
      <button onClick={() => navigateQuotes(false)}>prev</button>
      <button onClick={navigateQuotes}>next</button>
      <button onClick={deleteQuote}>del</button>
    </div>
  );
}