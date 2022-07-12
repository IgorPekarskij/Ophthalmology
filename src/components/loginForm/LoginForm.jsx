import { useState } from "react";
import { InputField } from "../inputField";

import styles from "./LoginForm.module.css";

export function LoginForm(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const sectionStyles = [styles.main, "slds-modal", "slds-fade-in-open"];

    return (
        <>
            <section
                role="dialog"
                tabindex="-1"
                aria-modal="true"
                aria-label="Meaningful description of the modal content"
                className={sectionStyles.join(" ")}
            >
                <div className="slds-modal__container">
                    <button
                        className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse"
                        onClick={() => props.closeLoginForm()}
                    >
                        <svg
                            className="slds-button__icon slds-button__icon_large"
                            aria-hidden="true"
                        >
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                        </svg>
                        <span className="slds-assistive-text">
                            Cancel and close
                        </span>
                    </button>
                    <div
                        className="slds-modal__content slds-p-around_large slds-modal__content_headless"
                        id="modal-content-id-1"
                    >
                        <div className="slds-m-bottom_medium">
                            <InputField
                                onChangeHandler={setUserName}
                                label="Имя пользователя"
                                placeholder="Введите ваше имя пользователя"
                            />
                        </div>

                        <InputField
                            onChangeHandler={setPassword}
                            type="password"
                            label="Пароль"
                            placeholder="Введите ваш пароль"
                        />
                    </div>
                    <div className="slds-modal__footer">
                        <button
                            className="slds-button slds-button_neutral"
                            aria-label="Cancel and close"
                            onClick={() => props.closeLoginForm()}
                        >
                            Отмена
                        </button>
                        <button
                            className="slds-button slds-button_brand"
                            onClick={() => props.doLogin(userName, password)}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </section>
            <div
                className="slds-backdrop slds-backdrop_open"
                role="presentation"
            ></div>
        </>
    );
}
