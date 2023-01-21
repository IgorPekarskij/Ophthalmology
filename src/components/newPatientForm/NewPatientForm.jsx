import {InputField} from "../inputField";
import {forwardRef, useRef, useState, useImperativeHandle} from "react";

const NewPatientForm = forwardRef((props, ref) => {
    const {
        patient = {},
        changePatient = Function.prototype
    } = props;
    const [contact, setContact] = useState(patient);

    const changeValueHandler = (data) => {
        const newContact = {...contact};
        newContact[data.name] = data.value;
        setContact(newContact);
        changePatient(newContact);
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
                        <InputField
                            ref={lastNameRef}
                            name="lastName"
                            label="Фамилия"
                            value={contact.lastName}
                            isRequired={true}
                            onChangeHandler={changeValueHandler}
                        />
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField
                            ref={firstNameRef}
                            name="firstName"
                            label="Имя"
                            value={contact.firstName}
                            isRequired={true}
                            onChangeHandler={changeValueHandler}
                        />
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                        <InputField
                            name="middleName"
                            label="Отчество"
                            value={contact.middleName}
                            onChangeHandler={changeValueHandler}
                        />
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField
                            ref={birthdateRef}
                            name="birthdate"
                            type="date"
                            label="Дата рождения"
                            value={contact.birthdate}
                            isRequired={true}
                            onChangeHandler={changeValueHandler}
                        />
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                        <InputField
                            ref={phoneRef}
                            name="phone"
                            type="tel"
                            label="Телефон"
                            value={contact.phone}
                            isRequired={true}
                            onChangeHandler={changeValueHandler}
                        />
                    </div>
                    <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                        <InputField
                            name="address"
                            label="Адресс"
                            value={contact.address}
                            onChangeHandler={changeValueHandler}
                        />
                    </div>
                </div>
            </article>
        </>
    )
});

export {NewPatientForm}