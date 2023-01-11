
export function PageHeader(props) {

    const getIcon = () => {
        return `/assets/icons/utility-sprite/svg/symbols.svg#${props.icon}`;
    }

    return (
        <div className="slds-page-header">
            <div className="slds-page-header__row">
                <div className="slds-page-header__col-title">
                    <div className="slds-media">
                        <div className="slds-media__figure">
                            <span className="slds-icon_container slds-icon-standard-opportunity">
                                <svg className="slds-icon slds-page-header__icon" aria-hidden="true">
                                    <use xlinkHref={getIcon()}></use>
                                </svg>
                            </span>
                        </div>
                        <div className="slds-media__body">
                            <div className="slds-page-header__name">
                                <div className="slds-page-header__name-title">
                                    <h1>
                                        <span className="slds-page-header__title slds-truncate" title="Recently Viewed">{props.title}</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slds-page-header__col-actions">
                    <div className="slds-page-header__controls">
                        <div className="slds-page-header__control">
                            <ul className="slds-button-group-list">
                                <li>
                                    {props.children}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}