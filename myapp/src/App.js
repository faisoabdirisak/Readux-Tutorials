import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/Store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainers from './components/IceCreamContainers';
import NewCAkeContainer from './components/NewCAkeContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer/>
        <CakeContainer />
        <IceCreamContainers />
        <NewCAkeContainer/>
        
      </div>
    </Provider>
  );
}

export default App;
