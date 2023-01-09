import {useState} from "react";
import {Modal} from "../../components/modal";
import {PageHeader} from "../../components/pageHeader";
import {NewContactForm} from "../../components/newContactForm";

export function ContactsPage() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newContact, setNewContact] = useState(null);

    const closeCreateContactModal = () => {
        setShowCreateModal(false);
        setNewContact(null)
    }

    const saveHandler = () => {
        console.log(newContact)
    }


    return (
        <>
            <div className="slds-m-around_medium">
                <PageHeader icon="people" title="Пациенты">
                    <button
                        className="slds-button slds-button--brand"
                        onClick={() => { setShowCreateModal(true)}}
                    >Создать контакт</button>
                </PageHeader>

                {showCreateModal ?
                    <Modal header="Новый пациент" close={closeCreateContactModal} save={saveHandler}>
                        <NewContactForm changeContact={setNewContact}/>

                    </Modal> :
                    null
                }
                <h1>Contacts list</h1>
            </div>
        </>
    );
}