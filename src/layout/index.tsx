import { withAuthentication } from "../middleWare";
import PublicPages from "../routes/publicRoute";
import { PrivatePages } from "../routes/privateRoute";
import Header from "../componenets/@commonComponent/header";
import Footer from "../componenets/@commonComponent/footer";

export const DefaultLayout = withAuthentication(() => {
  const adminAccess = false;

  return (
    <div>
      {adminAccess ? <PrivatePages /> : <PublicPages />}
    </div>
  );
});
