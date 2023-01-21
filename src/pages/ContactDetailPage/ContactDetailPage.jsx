import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {DataTable} from "../../components/dataTable";
import {NewPatient} from "../../components/newPatient";

export function ContactDetailPage() {
    const patientTest = {
        id: '1',
        firstName: "Игорь",
        lastName: "Пекаский",
        middleName: "Геннадьевич",
        birthdate: "1984-09-11",
        phone: "+375336052511",
        address: "Брест пер. 2-ой Западный д. 37/1"
    };
    const [patient, setPatient] = useState(patientTest);
    const [showEditWindow, setShowEditWindow] = useState(false);
    const [columns, setColumns] = useState();
    const [tableData, setTableData] = useState();
    const [showAppointment, setShowAppointment] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        console.log('id', id)
    }, [id]);

    const closeModal = () => {
        setShowEditWindow(false);
    }

    const editContact = (data) => {
        setPatient(data);
        closeModal();
    }

    return (
        <>
            <article className="slds-card slds-m-around--medium">
                <div className="slds-card__header slds-grid">
                    <header className="slds-media slds-media_center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                            <span className="slds-icon_container slds-icon-standard-account">
                                <svg className="slds-icon slds-icon_small" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
                                </svg>
                            </span>
                        </div>
                        <div className="slds-media__body">
                            <h2 className="slds-card__header-title">
                                <span>{`${patient.lastName} ${patient.firstName} ${patient.middleName}`}</span>
                            </h2>
                        </div>
                        <div className="slds-no-flex">
                            <button className="slds-button slds-button_neutral" onClick={() => setShowEditWindow(true)}>Редактировать</button>
                        </div>
                    </header>
                </div>
                <div className="slds-card__body slds-card__body_inner">
                    <div className="slds-grid slds-wrap">
                        <div className="slds-col slds-size_1-of-1 slds-p-right--xx-small">
                            <span><strong>Телефон:</strong> {patient.phone}</span>
                        </div>
                        <div className="slds-col slds-size_1-of-2 slds-p-right--xx-small">
                            <strong>Дата рождени:</strong> {patient.birthdate}
                        </div>
                        <div className="slds-col slds-size_1-of-2 slds-p-left--xx-small">
                            <strong>Адрес:</strong> {patient.address}
                        </div>
                    </div>
                    {
                        showEditWindow?
                            <NewPatient patient={patient} onClose={closeModal} onSave={editContact}></NewPatient>
                            : null
                    }
                </div>
                <footer className="slds-card__footer">
                    {
                        showAppointment ?
                            <div className="slds-p-top--medium">
                                <DataTable columns={columns} data={tableData}/>
                            </div> :
                            <button className="slds-button slds-button--brand" onClick={() => setShowAppointment(true)}>Посещения</button>
                    }
                </footer>
            </article>
        </>
    )
}