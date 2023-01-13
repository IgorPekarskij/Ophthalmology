import {useState} from "react";
import {PageHeader} from "../../components/pageHeader";
import {NewPatient} from "../../components/newPatient";

import {
    PATIENTS_PAGE_TITLE,
    CREATE_PATIENT_BUTTON_TITLE
} from "../../components/labels"

export function ContactsPage() {
    const [showCreateModal, setShowCreateModal] = useState(false);

    const closeModal = () => {
        setShowCreateModal(false);
    }

    const createContact = (data) => {
        console.log(data)

    }

    return (
        <>
            <div className="slds-m-around_medium">
                <PageHeader icon="people" title={PATIENTS_PAGE_TITLE}>
                    <button
                        className="slds-button slds-button--brand"
                        onClick={ () => { setShowCreateModal(true) } }
                    > {CREATE_PATIENT_BUTTON_TITLE}
                    </button>
                </PageHeader>
                {showCreateModal ? <NewPatient onClose={closeModal} onSave={createContact}/> : null}

                <div>
                    <h1>Contacts list</h1>
                </div>
            </div>
        </>
    );
}