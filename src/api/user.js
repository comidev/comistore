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

//TODO: Requieren token
export const getAuthInfo = (token) => {
    return fetch(`${USERS}/auth/info`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        if (!res.ok) console.log("getAuthInfo is NOT ok!");
        return res.json();
    });
};

export const updatePassword = (passwords, userId, token) => {
    return fetch(`${USERS}/${userId}/password`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(passwords),
    }).then((res) => {
        if (!res.ok) {
            console.log("updatePassword is NOT ok!");
            if (res.status === 401) {
                return { passwordIncorrect: true };
            }
            return res.json();
        }
        return { correct: true };
    });
};
export const tokenRefresh = (token) => {
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
export const tokenValidate = (token) => {
    return fetch(`${USERS}/token/validate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        return res.json();
    });
};
