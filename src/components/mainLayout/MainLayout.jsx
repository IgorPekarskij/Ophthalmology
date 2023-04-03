import {useContext, useEffect, useRef} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {GlobalContext} from "../../context/globalContext";
import { GlobalHeader } from "../../chakra_components/globalHeader";
import styles from "./MainLayout.module.css";

export function MainLayout(props) {
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

    return (
        <div className={styles.main}>
            {context.isLoggedIn ? <GlobalHeader /> : null}
            <Outlet />
        </div>
    );
}