import React from 'react';

const Table = ({ 
  headers, 
  rows: rowsProp,
  data,
  className = '',
  striped = true,
  hover = true,
  ...props 
}) => {
  const rows = rowsProp ?? data ?? [];

  return (
    <div className={`overflow-x-auto rounded-2xl border border-gray-100 shadow-card ${className}`}>
      <table className="w-full" {...props}>
        <thead className="bg-trust-900">
          <tr>
            {(headers || []).map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-sm font-semibold text-white/95 tracking-wide"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {(rows || []).map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${striped && rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} ${
                hover ? 'hover:bg-trust-50/60 transition-colors duration-200' : ''
              }`}
            >
              {(row || []).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
