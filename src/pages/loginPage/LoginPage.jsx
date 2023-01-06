import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";
import { LoginForm } from "../../components/loginForm";
import { Toast } from "../../components/toast";

import styles from "./LoginPage.module.css";

const testUser = {
    id: "001",
    userName: "Igor Pekarsky",
    userType: "admin",
};

export function LoginPage() {
    const { setLoggedInUser } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastTheme, setToastTheme] = useState("error");
    const [message, setMessage] = useState("");

    const doLogin = (userName, password) => {
        //setShowToast(true);
        if (userName && password) {
            //localStorage.setItem("user-data", JSON.stringify(testUser));
            setLoggedInUser(testUser);
            const url = testUser.userType === "admin" ? "/users" : "/contacts";
            navigate(url, { replace: true });
        } else {
            setToastTheme("error");
            setMessage("Введите имя пользователя и пароль");
            setShowToast(true);
        }
    };

    return (
        <div className={styles.main}>
            {
                <>
                    <div className={styles["welcome-section"]}>
                        <h1>Добро пожаловать в кабинет офтальмолога</h1>
                    </div>
                    <LoginForm doLogin={doLogin} />
                </>
            }
            {showToast ? (
                <Toast
                    closeToast={setShowToast}
                    message={message}
                    theme={toastTheme}
                />
            ) : null}
        </div>
    );
}
