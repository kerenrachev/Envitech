
import './App.css';
import Legend from './components/Legend';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './redux/reducers/reducers'
import thunk from 'redux-thunk';
const store = createStore(Reducers, applyMiddleware(thunk))
function App() {
  return (



    <div className="App">
      <Provider store={store}>
        <Navbar />

        <Legend />
      </Provider>
    </div>
  );
}

export default App;
