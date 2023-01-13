import {createRef, useState} from "react";
import {NewPatientForm} from "../newPatientForm";
import {Modal} from "../modal";

import {
    CREATE_CONTACT_TITLE,
    CLOSE_BUTTON_TITLE,
    SAVE_BUTTON_TITLE,
} from "../labels"
import {Toast} from "../toast";

export function NewPatient(props) {
    const [newPatient, setNewPatient] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [toastTheme, setToastTheme] = useState("error");
    const [message, setMessage] = useState("");
    const newPatientFormRef = createRef();

    const closeModal = () => {
        props.onClose();
        setNewPatient(null)
    }

    const createContact = () => {
        const isFormValid = newPatientFormRef.current.validate();

        if(isFormValid) {
            props.onSave(newPatient);
        } else {
            showError();
        }
    }

    const showError = () => {
        setToastTheme("error");
        setMessage("Заполните обязательные поля!");
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 2000)
    }


    const modalButtons = () => {
        return (
            <>
                <button className="slds-button slds-button_neutral" aria-label={CLOSE_BUTTON_TITLE} onClick={closeModal}>{CLOSE_BUTTON_TITLE}</button>
                <button className="slds-button slds-button_brand" onClick={createContact}>{SAVE_BUTTON_TITLE}</button>
            </>
        )
    }

    return (
        <>
            <Modal header={CREATE_CONTACT_TITLE} actions={modalButtons()} close={closeModal}>
                <NewPatientForm ref={newPatientFormRef} changePatient={setNewPatient}/>
            </Modal>
            {showToast ? (
                <Toast
                    closeToast={setShowToast}
                    message={message}
                    theme={toastTheme}
                />
            ) : null}
        </>
    )
}