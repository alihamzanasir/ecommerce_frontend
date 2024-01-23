import Home from "./pages/home";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "./store/reducer/authReducer";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import Header from "./componenets/@commonComponent/header";
function App() {
  const GET_LOCATIONS = gql`
    query GetUserByID($id: ID!, $token: String!) {
      getUserByID(id: $id) {
        userId
        title
        body
      }
      getToken(token: $token) {
        name
      }
    }
  `;
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(loginApi());
  }, []);

  const { authReducer }: any = useSelector((state) => state);
  const { authData } = authReducer;
  console.log(authData);

  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { id: "1", token: "skndfklnskl" },
  });

  return <Home />;
}

export default App;
