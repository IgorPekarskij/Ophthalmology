import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";
import styles from "./MainPage.module.css";

export function MainPage() {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();

    const getRoutByUserType = () => {
        return context.userType === "admin" ? "/users" : "/contacts";
    };

    useEffect(() => {
        context.isLoggedIn
            ? navigate(getRoutByUserType(), { replace: true })
            : navigate("/login", { replace: true });
    }, []);
    return null;
}
