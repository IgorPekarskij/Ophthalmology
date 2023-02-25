import {useContext, useEffect, useRef} from "react";
import {Link, useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";
import styles from "./GlobalHeader.module.css";

export function GlobalHeader() {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();
    const location = useLocation();
    const didMount = useRef(false);

    useEffect(() => {
        const newPath = `${location.pathname}${location.search? location.search : ''}`;
        checkLogin(newPath);
    }, [context.isLoggedIn]);

    useEffect(() => {
        const newPath = `${location.pathname}${location.search? location.search : ''}`;
        if ( !didMount.current ) {
            didMount.current = true;
        } else {
            if (context.currentPage !== newPath) {
                context.setCurrentPage(newPath);
            }
        }
    }, [location.pathname, location.search]);

    const checkLogin = (path) => {
        context.isLoggedIn
            ? navigate(path, { replace: true })
            : navigate("/login", { replace: true });
    }

    const logoutUser = () => {
        context.logoutUser();
        navigate("/login", { replace: true });
    };

    const getMenuItems = () => {
        return (
            context.isLoggedIn ?
                <>
                    <ul className={styles['menu-items']}>
                        <Link to="/contacts">Пациенты</Link>
                    </ul>
                </> :
            null
        )
    }

    return (
        <header className="slds-global-header_container">
            <div className="slds-global-header slds-grid slds-grid_align-spread">
                <div className="slds-global-header__item">
                    <div className={styles["global-logo"]}>
                        <span className="slds-assistive-text">Salesforce</span>
                    </div>
                </div>
                {getMenuItems()}
                <div className="slds-global-header__item">
                    <ul className="slds-global-actions">
                        {context.isLoggedIn ? (
                            <>
                                <li className="slds-global-actions__item">
                                    <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                        <button
                                            className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action"
                                            title="no new notifications"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <svg
                                                className="slds-button__icon slds-global-header__icon"
                                                aria-hidden="true"
                                            >
                                                <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
                                            </svg>
                                            <span className="slds-assistive-text">
                                                no new notifications
                                            </span>
                                        </button>
                                        <span
                                            aria-hidden="true"
                                            className="slds-notification-badge"
                                        >
                                            0
                                        </span>
                                    </div>
                                </li>
                                <li className="slds-global-actions__item">
                                    <button
                                        className={`slds-button slds-global-actions__item-action ${styles["login-link"]}`}
                                        title="Войти"
                                        onClick={() => logoutUser()}
                                    >
                                        Выйти
                                    </button>
                                </li>
                            </>
                        ) : null}
                    </ul>
                </div>
            </div>
        </header>
    );
}