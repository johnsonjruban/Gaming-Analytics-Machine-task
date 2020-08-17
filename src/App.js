import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import  NavigationBar from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import ListUser from "./components/ListUser";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const history = useHistory();
  return (
    <React.Fragment>
        <Router history={history}>
        <Provider store={store}>
          <NavigationBar />
          <Jumbotron />
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/listuser" component={ListUser} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          </Provider>
        </Router>
      </React.Fragment>
  )
}
export default App;