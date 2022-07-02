import { API_URL } from "api";

const USERS = `${API_URL}/users`;

export const login = (user) => {
    return fetch(`${USERS}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then((res) => {
        if (!res.ok) console.log("login is NOT ok!");
        return res.json();
    });
};

export const existsUsername = (username) => {
    return fetch(`${USERS}/validate/username`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
    }).then((res) => {
        if (!res.ok) console.log("existsUsername is NOT ok!");
        return res.json();
    });
};

export const getAuthInfo = (token) => {
    return fetch(`${USERS}/auth/info`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        if (!res.ok) console.log("getAuthInfo is NOT ok!");
        if (res.status === 401) return getTokens(getAuthInfo);
        return res.json();
    });
};

const getTokensByTokenRefresh = (token) => {
    return fetch(`${USERS}/token/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        if (!res.ok) console.log("getTokensByTokenRefresh is NOT ok!");
        return res.json();
    });
};

export const getTokens = (apiFunction) => {
    const refreshToken = window.localStorage.getItem("refresh_token");
    return getTokensByTokenRefresh(refreshToken).then(
        ({ access_token, refresh_token }) => {
            window.localStorage.setItem("access_token", access_token || "");
            window.localStorage.setItem("refresh_token", refresh_token || "");
            if (access_token) {
                return apiFunction(access_token).then((res) => res.json());
            }
        }
    );
};
