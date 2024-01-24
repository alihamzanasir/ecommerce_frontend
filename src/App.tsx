import { useEffect } from "react";
import Card from "./componenets/@commonComponent/card";
import { HomeApi } from "./@api";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import { fetchUserById } from "./store/reducer/homeReducer";

function App() {
  const { homeAPi }: any = useSelector((state) => state);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchUserById());
  }, []);
  console.log(homeAPi);

  return (
    <div style={{ marginTop: "5rem", marginLeft: "4rem" }}>
      <Card />
    </div>
  );
}

export default App;
