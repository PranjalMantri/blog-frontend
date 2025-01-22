import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../store/auth.store";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  if (!isLoggedIn) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
}

export default ProtectedRoutes;
