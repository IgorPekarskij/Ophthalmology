import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";
import { LoginForm } from "../../chakra_components/loginForm";
//import { Toast } from "../../components/toast";
//import {Toast} from '../../chakra_components/toast'
import UserService from "../../http/userService";
import {showToast} from "../../services/util"

import styles from "./LoginPage.module.css";

export function LoginPage() {
    const { setLoggedInUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    const doLogin = (userName, password) => {
        console.log('userName ', userName)
        console.log('password ', password)
        if (userName && password) {
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
        showToast({status:theme, message:message})
    }

    return (
        <div className={styles.main}>
            {
                <>
                    <div className={styles["welcome-section"]}>
                        <h1>Добро пожаловать в кабинет офтальмолога</h1>
                    </div>
                    <div className={styles["login-form"]}>
                        <LoginForm doLogin={doLogin} />
                    </div>
                </>
            }
        </div>
    );
}