// ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import UseVerifyToken from "../hook/verifyToken";

export default function ProtectedRoute() {
  const { loading } = UseVerifyToken();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">جار التحقق...</div>;
  }

  return <Outlet />;
}
