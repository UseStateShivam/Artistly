import React from 'react';

type Column<T> = {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  className?: string;
};

type DashboardTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
};

/**
 * Renders a generic dashboard table component.
 *
 * @template T - The type of data for each row, which must include an `id` property.
 */
function DashboardTable<T extends { id: string | number }>({
  columns,
  data,
  emptyMessage = 'No data found.',
}: DashboardTableProps<T>) {
  return (
    // ✅ Responsive scroll on phones ONLY
    <div className="w-full overflow-x-auto sm:overflow-visible">
      <table className="w-full text-left border-collapse min-w-[600px] sm:min-w-0">
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
    </div>
  );
}

export default DashboardTable;
