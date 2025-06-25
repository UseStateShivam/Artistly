import React from 'react'

type Column<T> = {
    header: string
    accessor: keyof T
    render?: (value: any, row: T) => React.ReactNode
    className?: string
}

type DashboardTableProps<T> = {
    columns: Column<T>[]
    data: T[]
    emptyMessage?: string
}

/**
 * Renders a generic dashboard table component.
 *
 * @template T - The type of data for each row, which must include an `id` property.
 * @param props.columns - Array of column definitions, including header, accessor, and optional render function.
 * @param props.data - Array of data objects to display in the table.
 * @param props.emptyMessage - Optional message to display when there is no data. Defaults to "No data found."
 * @returns A styled table displaying the provided data and columns.
 */
function DashboardTable<T extends { id: string | number }>({
    columns,
    data,
    emptyMessage = "No data found.",
}: DashboardTableProps<T>) {
    return (
        <table className="w-full text-left border-collapse">
            <thead className="bg-[#174f46] text-white">
                <tr>
                    {columns.map((col, idx) => (
                        <th key={idx} className={`px-6 py-3 ${col.className ?? ''}`}>{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="bg-[#dee4e3] text-[#174f46]">
                {data.length > 0 ? (
                    data.map((row) => (
                        <tr key={row.id} className="border-b border-[#b7f37b]">
                            {columns.map((col, idx) => (
                                <td key={idx} className={`px-6 py-4 ${col.className ?? ''}`}>
                                    {col.render
                                        ? col.render(row[col.accessor], row)
                                        : (row[col.accessor] as React.ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={columns.length} className="px-6 py-4 text-center text-[#174f46]">
                            {emptyMessage}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default DashboardTable