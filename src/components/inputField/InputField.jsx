import {forwardRef, useState, useImperativeHandle} from "react";

const InputField = forwardRef((props, ref) => {
    const {
        name = "",
        label = "",
        type = "text",
        placeholder = "Введите текст",
        isRequired = false,
        showLabel = true,
        defaultValue = ""
    } = { ...props };

    const [value, setValue] = useState(defaultValue);
    const [isInvalid, setIsInvalid] = useState(false);

    useImperativeHandle(ref, () => {
        return {
            validate() {
                return validate();
            }
        };
    });

    const changeValueHandler = (e) => {
        setValue(e.target.value);
        props.onChangeHandler({name: name, value: e.target.value});
    };

    const validate = () => {
        if(isRequired && !value) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
        return isInvalid;
    }

    const getClasses = () => {
        const classes = ["slds-form-element"];
        if(isInvalid) {
            classes.push("slds-has-error");
        }
        return classes.join(" ");
    }

    return (
        <div className={getClasses()}>
            {showLabel ? (
                <label
                    className="slds-form-element__label"
                    htmlFor="text-input-id-47"
                >
                    {isRequired ? (
                        <abbr className="slds-required" title="required">
                            *{" "}
                        </abbr>
                    ) : null}
                    {label}
                </label>
            ) : null}

            <div className="slds-form-element__control">
                <input
                    type={type}
                    id="text-input-id-47"
                    placeholder={placeholder}
                    required={isRequired}
                    className="slds-input"
                    value={value}
                    onChange={changeValueHandler}
                    onBlur={validate}
                />
            </div>
            {isInvalid ?
                <div className="slds-form-element__help" id="error-message-id-49">Заполните поле.</div>
                : null
            }
        </div>
    );
});

export {InputField}