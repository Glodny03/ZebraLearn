import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Logo from "./components/Logo/Logo";
import IconsContainer from "./components/IconsContainer/IconsContainer";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Learn from "./components/Learn/Learn";
import Congratulations from "./components/Congratulations/Congratulations";
import Game from "./components/Game/Game";
import "./css/index.css";

function App() {
  return (
      <BrowserRouter>
        <>
          <Logo/>
          <IconsContainer/>
          <Route exact path="/" component={Login}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/learn" component={Learn}/>
          <Route exact path="/congratulations" component={Congratulations}/>
          <Route exact path="/game" component={Game}/>
        </>
      </BrowserRouter>
  );
}

export default App;
