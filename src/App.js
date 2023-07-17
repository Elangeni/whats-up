import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Locator from './components/Locator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <Locator/>
      </header>
    </div>
  );
}

export default App;
