import { getAuthInfo } from "api/user";
import { useEffect, useState } from "react";
import { ACCESS, getToken, hasToken, REFRESH } from "../services/token";

export default function useUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (hasToken()) {
            getToken().then((token) => {
                token && getAuthInfo(token).then(setUser);
            });
        }
    }, []);

    const logout = () => {
        window.localStorage.removeItem(ACCESS);
        window.localStorage.removeItem(REFRESH);
        window.location.replace("/home");
        setUser(null);
    };

    return { user, logout };
}
