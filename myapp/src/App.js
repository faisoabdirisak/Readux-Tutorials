import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/Store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainers from './components/IceCreamContainers';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer />
        <IceCreamContainers/>
        
      </div>
    </Provider>
  );
}

export default App;
