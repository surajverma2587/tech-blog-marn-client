import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Routes from "./Routes";
import Navigation from "./components/Navigation";
import UserProvider from "./contexts/UserProvider";

import "./App.css";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Router>
          <Navigation />
          <Routes />
        </Router>
      </UserProvider>
    </ApolloProvider>
  );
};

export default App;
