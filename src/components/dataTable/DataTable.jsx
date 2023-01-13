import {Link} from "react-router-dom";
import styles from "./DataTable.module.css"

export function DataTable(props) {
    const {
        columns = [],
        data = [],
        tableHeight = "75vh",
        loadMore = Function.prototype
    } = props;

    return (
        <div style={{maxHeight: tableHeight}} className={styles["table-main"]}>
            <table className="slds-table slds-table_cell-buffer slds-table_bordered">
                <thead className={styles["sticky-head"]}>
                    <tr className="slds-line-height_reset">
                        {columns.map(column => {
                            return (
                                <th key={column.key} className="" scope="col">
                                    <div className="slds-truncate" title={column.label}>{column.label}</div>
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="slds-scrollable">
                    {data.map(record => {
                        return (
                            <tr key={record.id} className="slds-hint-parent">
                                <td data-label="Account Name">
                                    <Link to={`/contact/${record.id}`} className="slds-truncate" title={record.name}>{record.name}</Link>
                                </td>
                                <td data-label="Close Date">
                                    <div className="slds-truncate" title={record.birthdate}>{record.birthdate}</div>
                                </td>
                                <td data-label="Prospecting">
                                    <div className="slds-truncate" title={record.phone}>{record.phone}</div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}