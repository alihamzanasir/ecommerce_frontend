import { withAuthentication } from "../middleWare";
import PublicPages from "../routes/publicRoute";
import { PrivatePages } from "../routes/privateRoute";
import Header from "../componenets/@commonComponent/header";
import Footer from "../componenets/@commonComponent/footer";
import { useEffect } from "react";

export const DefaultLayout = withAuthentication(() => {
  const adminAccess = true;

  return (
    <div>
      <Header />
      {adminAccess ? <PrivatePages /> : <PublicPages />}
      <Footer />
    </div>
  );
});
