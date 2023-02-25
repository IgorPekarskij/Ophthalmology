import CookieService from "../services/cookieService";

export function globalContextReducer(state, { type, payload }) {
    const cookieService = new CookieService();
    switch (type) {
        case "SET_LOGGED_IN_USER": {
            const isUserLoggedIn =
                payload.user && payload.user.id && payload.user.id.length > 0;

            const newState = {
                ...state,
                id: payload?.user?.id,
                isLoggedIn: isUserLoggedIn,
                userName: payload?.user?.userName,
                userType: payload?.user?.userType,
            };
            const today = new Date();
            const nextDay = today.setDate(today.getDate() + 1);
            cookieService.setCookie("user-data", JSON.stringify(newState), {expires: nextDay});
            return newState;
        }

        case "LOGOUT_USER": {
            cookieService.removeCookie("user-data");
            return {
                ...state,
                isLoggedIn: false,
                userName: "",
                userType: "",
            };
        }

        case "SET_CURRENT_PAGE": {
            return {
                ...state,
                currentPage: payload.pageRout
            };
        }

        default: {
            return state;
        }
    }
}