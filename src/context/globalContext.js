import { createContext, useReducer } from "react";
import { globalContextReducer } from "../reducers/globalContextReducer";

export const GlobalContext = createContext();

const defaultState = {
    userName: "",
    isLoggedIn: false,
    userType: "",
};

export const GlobalContextProvider = ({ children }) => {
    const userData = localStorage.getItem("user-data");
    let initState = defaultState;
    if (userData) {
        initState = JSON.parse(userData);
    }
    console.log("initState ", initState);
    const [value, dispatch] = useReducer(globalContextReducer, initState);

    value.setLoggedInUser = (user) => {
        console.log("setLoggedInUser");
        dispatch({ type: "SET_LOGGED_IN_USER", payload: { user } });
    };

    value.logoutUser = () => {
        console.log("setLoggedInUser");
        dispatch({ type: "LOGOUT_USER" });
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};
