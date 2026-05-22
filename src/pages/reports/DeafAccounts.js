import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import deafData from './DeafAccountsData';

const DeafAccounts = () => {
  const [search, setSearch] = useState('');

  const hasQuery = search.trim().length > 0;

  const filteredData = useMemo(() => {
    if (!hasQuery) return [];
    const q = search.toLowerCase();
    return deafData.filter(entry =>
      entry.toLowerCase().includes(q)
    );
  }, [search, hasQuery]);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-max py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            DEAF Accounts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depositor Education and Awareness Fund - Account Records
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              DEAF Account Entries
            </h2>

            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
              List of Inoperative Accounts for More Than 10 Years
            </p>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by account number, name, date, reference..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
            </div>

          </div>

          {!hasQuery ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Search using account number, name, date, or reference.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 whitespace-nowrap w-16">Sl. No.</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Particulars</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length === 0 ? (
                    <tr>
                      <td colSpan={2} className="text-center py-8 text-gray-500">
                        No entries found matching "{search}"
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((entry, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-2 px-4 text-gray-500 align-top whitespace-nowrap">{index + 1}</td>
                        <td className="py-2 px-4 text-gray-700 font-mono text-xs leading-relaxed break-all">{entry}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeafAccounts;
