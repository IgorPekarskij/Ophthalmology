import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export function NotFoundPage() {
    return (
        <div className={styles.main}>
            <h1>404 Page note found</h1>
            <Link to="/" className="slds-button slds-button_brand">
                Домашняя страница
            </Link>
        </div>
    );
}
