import { useEffect } from "react";
import { useUserProvider } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useUserProvider();
  const navigate = useNavigate();

  useEffect(() => {
    user && !user?.isAuthenticated && navigate("/authenticate");
  }, []);
  return user?.isAuthenticated ? children : null;
}

export default ProtectedRoute;
