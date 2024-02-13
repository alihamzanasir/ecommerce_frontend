import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { store } from "./store/root-store";
import Signin from "./pages/Signin";
import SignUp from "./pages/signup";
import { Navigate, BrowserRouter as Router } from "react-router-dom";
import { DefaultLayout } from "./layout";
import Forgot from "./pages/Forgot"
import Ottp from "./pages/Ottp"
import Confarmpasswprd from "./pages/Confarmpassword"
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4900/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        
        {/* <SignUp />
        <Signin /> */}
        {/* <Forgot /> */}
        {/* <Ottp /> */}
        {/* <Confarmpasswprd /> */}

        <Router>
          <DefaultLayout />
        </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
