
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
            {/*<div className="slds-page-header__row">
                <div className="slds-page-header__col-meta">
                    <p className="slds-page-header__meta-text">10 items • Updated 13 minutes ago</p>
                </div>
                <div className="slds-page-header__col-controls">
                    <div className="slds-page-header__controls">
                        <div className="slds-page-header__control">
                            <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                <button className="slds-button slds-button_icon slds-button_icon-more"
                                        aria-haspopup="true" aria-expanded="false" title="List View Controls">
                                    <svg className="slds-button__icon" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#settings"></use>
                                    </svg>
                                    <svg className="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                    </svg>
                                    <span className="slds-assistive-text">List View Controls</span>
                                </button>
                            </div>
                        </div>
                        <div className="slds-page-header__control">
                            <div className="slds-dropdown-trigger slds-dropdown-trigger_click">
                                <button className="slds-button slds-button_icon slds-button_icon-more"
                                        aria-haspopup="true" aria-expanded="false" title="Change view">
                                    <svg className="slds-button__icon" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#table"></use>
                                    </svg>
                                    <svg className="slds-button__icon slds-button__icon_x-small" aria-hidden="true">
                                        <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                                    </svg>
                                    <span className="slds-assistive-text">Change view</span>
                                </button>
                            </div>
                        </div>
                        <div className="slds-page-header__control">
                            <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                    title="Edit List">
                                <svg className="slds-button__icon" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#edit"></use>
                                </svg>
                                <span className="slds-assistive-text">Edit List</span>
                            </button>
                        </div>
                        <div className="slds-page-header__control">
                            <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                    title="Refresh List">
                                <svg className="slds-button__icon" aria-hidden="true">
                                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#refresh"></use>
                                </svg>
                                <span className="slds-assistive-text">Refresh List</span>
                            </button>
                        </div>
                        <div className="slds-page-header__control">
                            <ul className="slds-button-group-list">
                                <li>
                                    <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                            title="Charts">
                                        <svg className="slds-button__icon" aria-hidden="true">
                                            <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Charts</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="slds-button slds-button_icon slds-button_icon-border-filled"
                                            title="Filters">
                                        <svg className="slds-button__icon" aria-hidden="true">
                                            <use
                                                xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#filterList"></use>
                                        </svg>
                                        <span className="slds-assistive-text">Filters</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}