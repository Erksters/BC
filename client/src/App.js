import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header/Header";
import Home from "./components/Home/Home";
import RegisterSketchyCrypto from "./components/RegisterSketchyCrypto/RegisterSketchyCrypto";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Switch>
            {/* <Route path="/about" component={About} />
            
            <Route path="/references" component={References} /> */}
            <Route path="/search" component={Search} />
            <Route path="/register" component={RegisterSketchyCrypto} />
            {/* <Route path="/Stats" component={Stats}/>  */}
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
