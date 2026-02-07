import * as React from "react";

export const DataTable = (props: any) => {
    const dataset = props.dataset;

    if (!dataset || !dataset.records) {
        return <div>No data</div>;
    }

    const columns = dataset.columns;
    const rows = dataset.sortedRecordIds.map((id: string) => dataset.records[id]);

    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    {columns.map((col: any) => (
                        <th key={col.name} style={{ border: "1px solid #ccc", padding: "6px" }}>
                            {col.displayName}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row: any, idx: number) => (
                    <tr key={idx}>
                        {columns.map((col: any) => (
                            <td key={col.name} style={{ border: "1px solid #eee", padding: "6px" }}>
                                {row.getFormattedValue(col.name)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
