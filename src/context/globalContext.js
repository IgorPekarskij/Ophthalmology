import { createContext, useReducer } from "react";
import { globalContextReducer } from "../reducers/globalContextReducer";
import CookieService from "../services/cookieService";

export const GlobalContext = createContext();

const defaultState = {
    userName: "",
    isLoggedIn: false,
    userType: "",
    currentPage: "/"
};

export const GlobalContextProvider = ({ children }) => {
    const userData = CookieService.getCookie("user-data");
    let initState = defaultState;
    if (userData) {
        initState = JSON.parse(userData);
    }
    const [value, dispatch] = useReducer(globalContextReducer, initState);

    value.setLoggedInUser = (user) => {
        dispatch({ type: "SET_LOGGED_IN_USER", payload: { user } });
    };

    value.logoutUser = () => {
        dispatch({ type: "LOGOUT_USER" });
    };

    value.setCurrentPage = (page) => {
        dispatch({ type: "SET_CURRENT_PAGE", payload: { pageRout: page}});
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};