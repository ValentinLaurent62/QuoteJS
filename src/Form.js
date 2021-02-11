import quotes from "./data";

export default function Form() {
  function addQuote(e) {
    e.preventDefault();

    quotes.push({
      text: e.target.text.value,
      author: e.target.author.value
    });

    e.target.text.value = '';
    e.target.author.value = '';
  }

  return (
    <form onSubmit={addQuote}>
      <label htmlFor="text">Text: </label>
      <input type="text" id="text" name="text"/><br/>
      <label htmlFor="author">Author: </label>
      <input type="text" id="author" name="author"/><br/>

      <button type="submit">OK</button>
      <button type="reset">Reset</button>
    </form>
  );
}