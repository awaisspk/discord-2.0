import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firestore";
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/" replace />;
  }
