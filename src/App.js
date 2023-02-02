import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import CreateProject from "./pages/Project/CreateProject";
import { LayoutProject } from './Layouts/LayoutProject';
import GetAllProject from "./pages/Project/GetAllProject";
import "./assets/css/styleCss.css";
export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <SignIn exact path="/signin" />
          <SignUp exact path="/signup" />
          <LayoutProject exact path="/create" Component={CreateProject} />
          <LayoutProject exact path="/getproject" Component={GetAllProject} />
          <SignIn exact path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
