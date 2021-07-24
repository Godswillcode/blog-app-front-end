import Home from "./Pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import Settings from "./Pages/settings/Settings";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>

        <Route path="/login">{user ? <Home /> : <Login />}</Route>

        <Route path="/write">{user ? <Write /> : <Register />}</Route>

        <Route path="/settings">
          <Settings />
        </Route>

        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
