import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";
import { LoginForm } from "../../components/loginForm";
import { Toast } from "../../components/toast";
import UserService from "../../http/userService";

import styles from "./LoginPage.module.css";

export function LoginPage() {
    const { setLoggedInUser } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastTheme, setToastTheme] = useState("error");
    const [message, setMessage] = useState("");

    const doLogin = (userName, password) => {
        if (userName && password) {
            console.log('userName ', userName)
            console.log('password ', password)
            try {
                const user = UserService.checkCredentials(userName, password);
                setLoggedInUser(user);
                const url = user.userType === "admin" ? "/users" : "/contacts";
                navigate(url, {replace: true});
            } catch (e) {
                showToastMessage("error", e.message);
            }
        } else {
            showToastMessage("error", "Введите имя пользователя и пароль");
        }
    };

    const showToastMessage = (theme, message) => {
        setToastTheme(theme);
        setMessage(message);
        setShowToast(true);
    }

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