import {InputField} from "../inputField";
import {useState} from "react";

export function NewContactForm(props) {
    const [contact, setContact] = useState({});

    const changeValueHandler = (data) => {
        const newContact = {...contact};
        newContact[data.name] = data.value;
        setContact(newContact);
        props.changeContact(newContact);
    }

    return (
        <>
            <article className="slds-card">
                <div className="slds-card__body slds-grid slds-wrap">
                    <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                        <InputField name="lastName" label="Фамилия" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField name="firstName" label="Имя" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                        <InputField name="middleName" label="Отчество" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField name="birthdate" type="date" label="Дата рождения" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                        <InputField name="phone" type="tel" label="Телефон" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField name="address" label="Адресс" onChangeHandler={changeValueHandler}/>
                    </div>
                </div>
            </article>
        </>
    )
}