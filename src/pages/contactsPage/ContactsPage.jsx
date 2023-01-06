import {useState} from "react";
import {Modal} from "../../components/modal";

export function ContactsPage() {
    const [showCreateModal, setShowCreateModal] = useState(false);

    const closeCreateContactModal = () => {
        setShowCreateModal(false);
    }


    return (
        <>
            <button className="slds-button
             slds-button--brand" onClick={() => { setShowCreateModal(true)}}>Создать контакт</button>
            {showCreateModal ? <Modal close={closeCreateContactModal}/> : null}
            <h1>Contacts list</h1>
        </>
    );
}