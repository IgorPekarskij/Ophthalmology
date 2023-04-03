import { useState } from "react";
import {Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Divider, Flex} from "@chakra-ui/react";

function LoginForm({doLogin}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const changeValueHandler = (data) => {
        switch (data.target.name) {
            case "password" :
                setPassword(data.target.value);
                break;

            case "userName" :
                setUserName(data.target.value);
                break;
        }
    }

    const doSubmit = (key) => {
        if(key.keyCode === 13) {
            doLogin(userName, password);
        }
    }

    return (
        <>
            <Box
                p="3"
                borderWidth='1px'
                borderRadius='lg'
                bg="white"
                boxShadow="md"
                w="100%"
                onKeyUp={doSubmit}
            >
                <FormControl>
                    <FormLabel>Имя пользователя</FormLabel>
                    <Input
                        name="userName"
                        onChange={changeValueHandler}
                        placeholder="Введите ваше имя пользователя"
                        value={userName}
                    />
                    <FormErrorMessage>Заполните имя пользователя</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel>Пароль</FormLabel>
                    <Input name="password"
                           onChange={changeValueHandler}
                           type="password"
                           placeholder="Введите ваш пароль"
                           value={password}
                    />
                    <FormErrorMessage>Заполните пароль</FormErrorMessage>
                </FormControl>
                <Divider/>
                <Button w="100%" mt="4" colorScheme='blue' onClick={() => doLogin(userName, password)}>Войти</Button>
            </Box>
        </>
    );
}

export {LoginForm}