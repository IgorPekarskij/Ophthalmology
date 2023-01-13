
export function Modal(props) {
    const {
        header = "Создать",
        cancelButton = "Закрыть"
    } = props;

    const closeModal = () => {
        props.close();
    }

    return (
        <>
            <section role="dialog" tabIndex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                     className="slds-modal slds-fade-in-open">
                <div className="slds-modal__container">
                    <button className="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse" onClick={closeModal}>
                        <svg className="slds-button__icon slds-button__icon_large" aria-hidden="true">
                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                        </svg>
                        <span className="slds-assistive-text">{cancelButton}</span>
                    </button>
                    <div className="slds-modal__header">
                        <h1 id="modal-heading-01" className="slds-modal__title slds-hyphenate">{header}</h1>
                    </div>
                    <div className="slds-modal__content slds-p-around_medium" id="modal-content-id-1">
                        {props.children}
                    </div>
                    <div className="slds-modal__footer">
                        {props.actions}
                    </div>
                </div>
            </section>
            <div className="slds-backdrop slds-backdrop_open" role="presentation"></div>
        </>
    )
}