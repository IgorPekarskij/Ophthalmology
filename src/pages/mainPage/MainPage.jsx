import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";
import {Text} from "@chakra-ui/react"
import styles from "./MainPage.module.css";

export function MainPage() {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();


    return (<>
        <Text fontSize="xl" textAlign="center">Main page</Text>
    </>);
}