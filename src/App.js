import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Newspage from "./Pages/Newspage";
import Write from "./Pages/Write";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from './Pages/Portfolio';
import Settings from './Pages/Settings';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/reset" component={Reset} />  */}
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route exact path="/news" component={Newspage} /> */}
          <Route exact path="/portfolio" component={Portfolio} /> 
          <Route exact path="/write" component={Write} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
