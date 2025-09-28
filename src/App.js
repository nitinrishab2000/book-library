import logo from "./logo.svg";
import "./App.css";
import { BooksProvider } from "./BooksContext";

function App() {
  return (
    <BooksProvider>
      <div className="App"></div>
    </BooksProvider>
  );
}

export default App;
