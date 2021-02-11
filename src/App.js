import {Router, Link} from '@reach/router';
import './App.css';
import Quotes from "./Quotes";
import Form from "./Form";
import FilterQuotes from "./FilterQuotes";
import CheckQuotes from "./CheckQuotes";
import UpdateQuote from "./UpdateQuote";

function App() {
  return (
    <div className="App">
      <h1>
        Mes citations !
      </h1>
      <nav>
        <Link to="/quotes">Les citations</Link><span> - </span>
        <Link to="/filterQuotes">Filtre</Link><span> - </span>
        <Link to="/newQuote">Ajouter une citation</Link><span> - </span>
        <Link to="/delete">Supprimer des citations</Link>
      </nav>
      <Router>
        <Quotes path = '/quotes'/>
        <FilterQuotes path = '/filterQuotes'/>
        <Form path = '/newQuote'/>
        <CheckQuotes path = '/delete'/>
        <UpdateQuote path={'/update/:index'}/>
      </Router>
    </div>
  );
}

export default App;
