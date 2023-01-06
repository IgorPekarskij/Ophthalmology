import { Outlet } from "react-router-dom";
import { GlobalHeader } from "../globalHeader";
import styles from "./MainLayout.module.css";

export function MainLayout(props) {
    return (
        <div className={styles.main}>
            <GlobalHeader />
            <div className={styles.content}>
                <Outlet />
            </div>
        </div>
    );
}
