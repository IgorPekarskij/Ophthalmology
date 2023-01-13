import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";
import styles from "./MainPage.module.css";

export function MainPage() {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();


    return null;
}