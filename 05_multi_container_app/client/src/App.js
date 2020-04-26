import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// components
import HomePage from "./pages/HomePage/HomePage";
import ExamplePage from "./pages/ExamplePage/ExamplePage";

function App() {
  return (
    <div className="container">
      <header></header>
      <main>
        <Switch>
          <Route exact path="/example" component={ExamplePage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
