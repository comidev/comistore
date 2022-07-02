import { getAuthInfo } from "api/user";
import { useEffect, useState } from "react";

export default function useUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = window.localStorage.getItem("access_token");
        if (token) {
            getAuthInfo(token).then((res) => {
                if (!res) {
                    //?------
                    window.location.replace("/home");
                } else {
                    setUser(res);
                }
            });
        }
    }, []);

    const logout = () => {
        window.localStorage.setItem("access_token", "");
        window.localStorage.setItem("refresh_token", "");
        window.location.replace("/home");
        setUser(null);
    };
    return { user, logout };
}
