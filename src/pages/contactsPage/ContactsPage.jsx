import {useEffect, useState} from "react";
import {PageHeader} from "../../components/pageHeader";
import {NewPatient} from "../../components/newPatient";

import {
    PATIENTS_PAGE_TITLE,
    CREATE_PATIENT_BUTTON_TITLE
} from "../../components/labels"
import {DataTable} from "../../components/dataTable";

export function ContactsPage() {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [patients, setPatients] = useState([
        {
            id: '1',
            firstName: "Игорь",
            lastName: "Пекаский",
            middleName: "Геннадьевич",
            birthdate: "1984-09-11",
            phone: "336052511"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        },
        {
            id: '2',
            firstName: "Ирина",
            lastName: "Ирина",
            middleName: "Валерьевна",
            birthdate: "1987-12-17",
            phone: "297252080"
        }
    ]);
    const [tableData, setTableData] = useState([]);
    const [columns, setColumns] = useState([
        {key: "1", label: "Имя", type: "link"},
        {key: "2", label: "Дата рождения", type: "text"},
        {key: "3", label: "Телефон", type: "text"}
    ]);

    const closeModal = () => {
        setShowCreateModal(false);
    }

    const createContact = (data) => {
        console.log(data)
        setPatients(prevState => [...prevState, data]);
        console.log('createContact', patients)
        closeModal();
    }

    useEffect(() => {
        const data = [];
        patients.forEach((patient, index) => {
            data.push({
                id: `${index}`,
                name : `${patient.lastName} ${patient.firstName}${patient.middleName ? ` ${patient.middleName}` : '' }`,
                birthdate: patient.birthdate,
                phone: patient.phone,
            })
        })
        setTableData(data);
    }, [patients])

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

                <div className="slds-p-top--medium">
                    <DataTable columns={columns} data={tableData}/>
                </div>
            </div>
        </>
    );
}