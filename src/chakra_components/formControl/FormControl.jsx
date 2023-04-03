import {useState} from "react";
import {FormErrorMessage, FormLabel, Input} from "@chakra-ui/react";

function FormControl(props) {
    const {
        name = "",
        label = "",
        type = "text",
        placeholder = "Введите текст",
        isRequired = false,
        showLabel = true,
        value = "",
        errorMessage = "Заполните поле",
        isError = false,
        onChangeHandler = Function.prototype

    } = props;
    const [newValue, setNewValue] = useState(value);

    const changeValueHandler = (e) => {
        setNewValue(e.target.value);
        onChangeHandler({name: name, value: e.target.value});
    };

    return (
        <FormControl isInvalid={isError} isRequired={isRequired}>
            {showLabel ? <FormLabel>{label}</FormLabel> : null}
            <Input name={name}
                   onChange={changeValueHandler}
                   type={type}
                   placeholder={placeholder}
                   value={value}
            />
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    )
}

export {FormControl}