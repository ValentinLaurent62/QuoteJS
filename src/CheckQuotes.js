import quotes from "./data";

export default function CheckQuotes() {
  const checks = quotes.map(() => false);

  function handleCheck(e) {
    checks[e.target.value] = e.target.checked;
  }

  function deleteQuotes(e) {
    e.preventDefault();
    checks.forEach((checked, index) => {
      if (checked) {
        quotes.splice(index, 1);
      }
    })
  }

  return (
    <form onSubmit={deleteQuotes}>
      <fieldset>
        <legend>Delete this:</legend>

        {quotes.map((quote, index) => <div>
          <input
            type="checkbox"
            id={"quote-" + index}
            value={index}
            onChange={handleCheck}
          />
          <label htmlFor={"quote-" + index}>{quote.text} — {quote.author}</label>
        </div>)}
      </fieldset>

      <input type="submit"/>
    </form>
  )
}