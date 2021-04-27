import logo from './logo.svg';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <List />
        <Footer />
      </header>
    </div>
  );
}

export default App;
