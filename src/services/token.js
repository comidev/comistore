import { tokenRefresh, tokenValidate } from "api/user";

export const ACCESS = "access_token";
export const REFRESH = "refresh_token";

export const hasToken = () => {
    const token = window.localStorage.getItem(ACCESS);
    return Boolean(token);
};

export const getToken = () => {
    const tokenLS = window.localStorage.getItem(ACCESS);
    return tokenValidate(tokenLS)
        .then((res) => {
            if (res.isValid) {
                return { access_token: tokenLS };
            } else {
                const token_R_LS = window.localStorage.getItem(REFRESH);
                return tokenRefresh(token_R_LS);
            }
        })
        .then((res) => {
            if (res.error) {
                window.localStorage.removeItem(ACCESS);
                window.localStorage.removeItem(REFRESH);
                window.location.replace("/home");
                return "";
            } else if (res.refresh_token) {
                const { access_token, refresh_token } = res;
                window.localStorage.setItem(ACCESS, access_token);
                window.localStorage.setItem(REFRESH, refresh_token);
                return access_token;
            } else {
                const { access_token } = res;
                return access_token;
            }
        });
};
