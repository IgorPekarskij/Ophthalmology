import styles from "./Tile.module.css";

export function Tile(props) {
    return (
        <div className={styles.main}>
            <article className="slds-tile slds-media">
                <div className="slds-media__figure">
                    <span
                        className={`slds-avatar slds-avatar_large ${styles["avatar-size"]}`}
                    >
                        <img
                            alt=""
                            src="/assets/images/avatar2.jpg"
                            title="Lexee L. Jackson avatar"
                        />
                    </span>
                </div>
                <div className="slds-media__body">
                    <h3
                        className="slds-tile__title slds-truncate"
                        title="Lexee L. Jackson"
                    >
                        <a href="#">Lexee L. Jackson</a>
                    </h3>
                    <div className="slds-tile__detail">
                        <dl className="slds-list_horizontal slds-wrap">
                            <dt
                                className="slds-item_label slds-text-color_weak slds-truncate"
                                title="Second Label"
                            >
                                Email:
                            </dt>
                            <dd
                                className="slds-item_detail slds-truncate"
                                title="Description for second label"
                            >
                                test@email.com
                            </dd>
                            <dt
                                className="slds-item_label slds-text-color_weak slds-truncate"
                                title="First Label"
                            >
                                Is Active:
                            </dt>
                            <dd
                                className="slds-item_detail slds-truncate"
                                title="Description for first label"
                            >
                                <span className={styles.activated}>
                                    <svg
                                        className={`slds-icon slds-icon_small ${styles["icon-size"]}`}
                                        aria-hidden="true"
                                    >
                                        <use xlinkHref="/assets/icons/action-sprite/svg/symbols.svg#approval"></use>
                                    </svg>
                                </span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </article>
        </div>
    );
}
