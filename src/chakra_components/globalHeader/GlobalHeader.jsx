import {Box, HStack, Link, Image, Button,} from "@chakra-ui/react"
import {useContext, useEffect, useRef} from "react";
import {GlobalContext} from "../../context/globalContext";
import {useLocation, useNavigate} from "react-router-dom";

function GlobalHeader() {
    const context = useContext(GlobalContext);
    const navigate = useNavigate();
    /*const location = useLocation();
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
    }, [location.pathname, location.search]);*/

    const logoutUser = () => {
        context.logoutUser();
        navigate("/login", { replace: true });
    };

    const getMenuItems = () => {
        return (
            context.isLoggedIn ?
                <>
                    <HStack spacing="3" flexGrow="1">
                        <Image h="14" src={getLogoURL()} alt="logo"></Image>
                        <Link href="/contacts" color="white">Пациенты</Link>
                        <Link href="/" color="white">Записи</Link>
                    </HStack>
                    <Link as="a" pr="2" color="white" onClick={logoutUser}>Выйти</Link>
                </> :
                null
        )
    }

    const getLogoURL = () => {
        return `${process.env.REACT_APP_PUBLIC_URL}/images/medical-logo.ico`
    }

    return (
        <>
            <Box bg="blue.300" w="100%" color="white" p="1" pos="static" boxShadow="md">
                <HStack>
                    {getMenuItems()}
                </HStack>
            </Box>
        </>
    )
}

export {GlobalHeader};