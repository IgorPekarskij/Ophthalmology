/* *
    ITEM PAYLOAD EXAMPLE : 
        id,
        withIcon = false,
        href = null,
        title = "Pill",
        label = "Pill",
        imageSrc = "/assets/images/avatar1.jpg",
        avatarAltText = "Avatar",
        removeIconAltText = "Remove",
* */

import { Link } from "react-router-dom";

export function Pill(props) {
    const {
        id,
        withIcon = false,
        href = null,
        title = "Pill",
        label = "Pill",
        imageSrc = "/assets/images/avatar1.jpg",
        avatarAltText = "Avatar",
        removeIconAltText = "Remove",
        removePill = Function.prototype,
    } = { ...props };
    return (
        <span className={`slds-pill ${href ? "slds-pill_link" : ""}`}>
            {withIcon ? (
                <span className="slds-pill__icon_container">
                    <span
                        className="slds-avatar slds-avatar_circle"
                        title={title}
                    >
                        <img alt={avatarAltText} src={imageSrc} title={title} />
                    </span>
                </span>
            ) : null}
            {href ? (
                <Link to={href} className="slds-pill__action" title={title}>
                    <span className="slds-pill__label">{label}</span>
                </Link>
            ) : (
                <span>{label}</span>
            )}
            <button
                className="slds-button slds-button_icon slds-button_icon slds-pill__remove"
                title={removeIconAltText}
                onClick={() => removePill(id)}
            >
                <svg className="slds-button__icon" aria-hidden="true">
                    <use xlinkHref="/assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                </svg>
                <span className="slds-assistive-text">{removeIconAltText}</span>
            </button>
        </span>
    );
}
