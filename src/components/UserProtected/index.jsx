import { Navigate } from "react-router-dom";

export default function UserProcted({ children }) {
    const { username } = {};
    return !Boolean(username) ? <Navigate to="/home" replace /> : children;
}
