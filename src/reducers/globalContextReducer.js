export function globalContextReducer(state, { type, payload }) {
    console.log("type ", type);
    switch (type) {
        case "SET_LOGGED_IN_USER": {
            console.log("SET_LOGGED_IN_USER", payload);
            const isUserLoggedIn =
                payload.user && payload.user.id && payload.user.id.length > 0;

            const newState = {
                ...state,
                id: payload?.user?.id,
                isLoggedIn: isUserLoggedIn,
                userName: payload?.user?.userName,
                userType: payload?.user?.userType,
            };

            localStorage.setItem("user-data", JSON.stringify(newState));
            return newState;
        }

        case "LOGOUT_USER": {
            console.log("LOGOUT_USER");
            localStorage.removeItem("user-data");
            return {
                ...state,
                isLoggedIn: false,
                userName: "",
                userType: "",
            };
        }

        default: {
            console.log("default");
            return state;
        }
    }
}
