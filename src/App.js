import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Main from "./views/Main"
import Otrapagina from './views/Otrapagina';
import Detail from './views/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main/>

          </Route>
          <Route path="/segunda" exact>
            <Otrapagina/>

          </Route>
          <Route exact path="/detalle/:id">
            <Detail />
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
