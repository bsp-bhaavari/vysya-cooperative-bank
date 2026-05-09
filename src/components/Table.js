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
    <div className={`overflow-x-auto rounded-xl border border-primary-200/60 shadow-soft ${className}`}>
      <table className="w-full" {...props}>
        <thead className="bg-gradient-to-r from-primary-800 via-primary-900 to-trust-900 border-b border-trust-800/50">
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
        <tbody className="divide-y divide-primary-100/80">
          {(rows || []).map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${striped && rowIndex % 2 === 0 ? 'bg-white' : 'bg-surface-tint/80'} ${
                hover ? 'hover:bg-primary-50/70 transition-colors duration-200' : ''
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
