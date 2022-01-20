import './App.css';
// import UseStateExample from './components/useStateExample'
// import UseEffectExample from './components/useEffectExample'
// import UseReducerExample from './components/useReducerExample'
import UseRefExample from './components/useRefExample'
// import UseMemoExample from './components/useMemoExample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React Hooks</h3>
      </header>
      <div className="ui container Top-margin">
        {/* useState */}
        {/* <UseStateExample /> */}

        {/* useEffect */}
        {/* <UseEffectExample /> */}

        {/* useReducer */}
        {/* <UseReducerExample /> */}

        {/* useRef */}
        <UseRefExample />

        {/* useMemo */}
        {/* <UseMemoExample /> */}
      </div>
    </div>
  );
}

export default App;
