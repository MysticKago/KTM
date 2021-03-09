import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import Overview from "./components/Overview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cover from "./components/Cover";
import Footer2 from "./components/Footer2";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Cover />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
        <Footer2 />
      </div>
    </Router>
  );
}


export default App;
