import {InputField} from "../inputField";
import {forwardRef, useRef, useState, useImperativeHandle} from "react";

const NewPatientForm = forwardRef((props, ref) => {
    const [contact, setContact] = useState({});

    const changeValueHandler = (data) => {
        const newContact = {...contact};
        newContact[data.name] = data.value;
        setContact(newContact);
        props.changePatient(newContact);
    }
    const refs = [useRef(), useRef(), useRef(), useRef()];
    const [lastNameRef, firstNameRef, birthdateRef, phoneRef] = refs;

    useImperativeHandle(ref, () => {
        return {
            validate() {
                let isValidForm = true;
                refs.forEach(field => {
                    const isInValid = field.current.validate();
                    if(isValidForm && isInValid) {
                        isValidForm = false;
                    }
                })
                return isValidForm;
            }
        }
    });

    return (
        <>
            <article className="slds-card">
                <div className="slds-card__body slds-grid slds-wrap">
                    <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                        <InputField ref={lastNameRef} name="lastName" label="Фамилия" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField ref={firstNameRef} name="firstName" label="Имя" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                        <InputField name="middleName" label="Отчество" onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField ref={birthdateRef} name="birthdate" type="date" label="Дата рождения" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                        <InputField ref={phoneRef} name="phone" type="tel" label="Телефон" isRequired={true} onChangeHandler={changeValueHandler}/>
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField name="address" label="Адресс" onChangeHandler={changeValueHandler}/>
                    </div>
                </div>
            </article>
        </>
    )
});

export {NewPatientForm}