import quotes from "./data";

export default function UpdateQuote(props) {
  function update(e) {
    e.preventDefault();
    quotes[props.index] = {
      text: e.target.text.value,
      author: e.target.author.value
    };
  }

  return (
    <form onSubmit={update}>
      <label htmlFor="text">Text: </label>
      <input type="text" id="text" name="text"/><br/>
      <label htmlFor="author">Author: </label>
      <input type="text" id="author" name="author"/><br/>

      <button type="submit">Update</button>
    </form>
  );
}