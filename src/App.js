import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Header/>
    <div className="App">
      <Switch>
        <Route exact path="/">
          
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
