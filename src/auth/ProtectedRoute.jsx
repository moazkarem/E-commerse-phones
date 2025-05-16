import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectedPath, children }) => {
  if (!isAllowed) return <Navigate to={redirectedPath} replace />;
  return children;
};

export default ProtectedRoute;
