import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "../../components/loginForm";
import { Toast } from "../../components/toast";

import styles from "./LoginPage.module.css";

export function LoginPage() {
    //const cssClasses = [styles.main];
    const navigate = useNavigate();
    const [showLoginForm, setShowLoginFrom] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const closeLoginForm = () => {
        setShowLoginFrom(false);
    };

    const doLogin = (userName, password) => {
        setShowToast(true);
        navigate("/users");
    };

    return (
        <div className={styles.main}>
            {showLoginForm ? (
                <LoginForm doLogin={doLogin} closeLoginForm={closeLoginForm} />
            ) : (
                <div className={styles["welcome-section"]}>
                    <h1>Добро пожаловать в кабинет врача офтальмолога</h1>
                    <button
                        className="slds-button slds-button_brand"
                        onClick={() => setShowLoginFrom(true)}
                    >
                        Войти в кабинет
                    </button>
                </div>
            )}
            {showToast ? (
                <Toast
                    closeToast={setShowToast}
                    message="Поздравляю вы залогинены"
                    theme="success"
                />
            ) : null}
        </div>
    );
}
