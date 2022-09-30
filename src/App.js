import { useInput } from './hooks/useInput';
import { InputProvider } from './contexts/InputContext';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';


function App() {

  const [ inputOfSearch, onChangeSearch ] = useInput("");
  const [inputOfImage, onChangeImage ] = useInput("");


  return (
    <div className="App">
      <InputProvider {...{ inputOfSearch, onChangeSearch, inputOfImage, onChangeImage }}>
        <Header />
        <Body />
      </InputProvider>
    </div>
  );
}

export default App;
