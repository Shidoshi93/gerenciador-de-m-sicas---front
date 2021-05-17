import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Error from '../pages/Error'
import { Switch, Route } from "react-router-dom";

function Router () {
    return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
  
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact/:name/:sobrenome?">
            <Contact />
          </Route>

          <Route>
            <Error />
          </Route>
        </Switch>
    );
  };
  
  export default Router;