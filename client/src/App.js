import React from "react";
import LoginPage from "./components/LoginPage";
import NotePage from "./components/NotePage";
import NoteForm from "./components/NoteForm";
import Header from "./components/Header";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "../sass/main.scss";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={NotePage} />
          <Route path="/note" exact component={NoteForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
