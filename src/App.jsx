import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import * as pages from "./pages";
import "./App.css";

export default () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            <Link to="/">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Switch>
            <Route path="/"    exact component={pages.Foo}/>
            <Route path="/bar" exact component={pages.Bar}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
