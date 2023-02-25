import { useState } from "react";
import { InputField } from "../inputField";

import styles from "./LoginForm.module.css";

export function LoginForm(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const sectionStyles = [styles.main, "slds-modal", "slds-fade-in-open"];

    const changeValueHandler = (data) => {
        switch (data.name) {
            case "password" :
                setPassword(data.value);
                break;

            case "userName" :
                setUserName(data.value);
                break;
        }
    }

    const doSubmit = (key) => {
        if(key.keyCode === 13) {
            props.doLogin(userName, password);
        }
    }

    return (
        <>
            <section
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                className={sectionStyles.join(" ")}
                onKeyUp={doSubmit}
            >
                <div className="slds-modal__container">
                    <div className="slds-modal__content slds-p-around_large slds-modal__content_headless">
                        <div className="slds-m-bottom_medium">
                            <InputField
                                name="userName"
                                onChangeHandler={changeValueHandler}
                                label="Имя пользователя"
                                placeholder="Введите ваше имя пользователя"
                            />
                        </div>

                        <InputField
                            name="password"
                            onChangeHandler={changeValueHandler}
                            type="password"
                            label="Пароль"
                            placeholder="Введите ваш пароль"
                        />
                    </div>
                    <div className="slds-modal__footer">
                        <button
                            className="slds-button slds-button_brand"
                            onClick={() => props.doLogin(userName, password)}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}