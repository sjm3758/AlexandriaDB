import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Catalog from "./Components/Catalog";
import MyBooks from "./Components/MyBooks";
import Search from "./Components/Search";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AdminView from "./Components/AdminView";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/mybooks" component={MyBooks} />
          <Route path="/search" component={Search} />
          <Route path="/adminview" component={AdminView} />
        </Switch>
      </Router>
    </div>
  );
}
 
export default App;
 
