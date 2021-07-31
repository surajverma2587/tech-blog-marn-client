import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes />
    </Router>
  );
}

export default App;
