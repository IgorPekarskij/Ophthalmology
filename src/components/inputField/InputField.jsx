import { useState } from "react";

export function InputField(props) {
    const {
        label = "",
        type = "text",
        placeholder = "Введите текст",
        isRequired = false,
        showLabel = true,
        defaultValue,
    } = { ...props };

    const [value, setValue] = useState(defaultValue);

    const changeValueHandler = (e) => {
        setValue(e.target.value);
        props.onChangeHandler(e.target.value);
    };

    return (
        <div className="slds-form-element">
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
                />
            </div>
        </div>
    );
}
