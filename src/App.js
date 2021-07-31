import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Navigation from "./components/Navigation";
import UserProvider from "./contexts/UserProvider";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </UserProvider>
  );
}

export default App;
