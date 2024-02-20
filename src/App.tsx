import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { store } from "./store/root-store";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultLayout } from "./layout";
import "./index.css";
import Simple from "./simple";
import { useEffect } from "react";
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4900/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <DefaultLayout />
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
