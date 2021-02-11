import {useState} from "react";
import quotes from "./data";

export default function FilterQuotes() {
  const [filter, setFilter] = useState();

  return (
    <div>
      <ol>
        {quotes.filter(quote => new RegExp(filter).test(quote.author.toLowerCase())).map(quote =>
          <li>{quote.text} — {quote.author}</li>
        )}
      </ol>

      <input type="text" onChange={(e) => {
        try {
          setFilter(e.target.value.toLowerCase());
        }
        catch (e) {
          console.error(e);
        }
      }}/>
    </div>
  );
}