import logo from './logo.svg';
//import {useOrderCountHook} from 'vinhookslib'
import {useOrderCountHook} from 'vinhookslib'
import './App.css';

function App() {
  let orderHook = useOrderCountHook();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>count:{orderHook.orderCount.count}</h1>
      <button onClick={orderHook.changeOrderCount}>Click</button>
    </div>
  );
}

export default App;
