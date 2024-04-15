import './App.css';
import { Book } from './components/book/Book';

function App() {
  return (
    <div className="App">
      <Book name="react" year={2023} price={12000} />
      <Book name="angular" year={2021} price={13000} />
      <Book name="vue" year={2020} price={14000}>
        additional text
      </Book>
    </div>
  );
}

export default App;
