import { Pill } from "../pill";

export function PillContainer(props) {
    console.log("PillContainer", props.items);
    //console.log("items.length ", props.length);

    return (
        <div className="slds-pill_container">
            {props.items.length > 0 ? (
                props.items.map((i) => {
                    console.log("item", i);
                    if (i.id) {
                        return (
                            <Pill
                                key={i.id}
                                removePill={props.removePill}
                                {...i}
                            />
                        );
                    } else {
                        throw Error(
                            "Please assign unique id for each pill item"
                        );
                    }
                })
            ) : (
                <>Test</>
            )}
        </div>
    );
}
