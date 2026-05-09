import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Breadcrumb from '../../components/Breadcrumb';
import FinancialReports from './FinancialReports';
import DeafAccounts from './DeafAccounts';

const ReportsLayout = () => {
  const sidebarItems = [
    {
      name: 'Financial Reports',
      path: '/reports/financial',
    },
    {
      name: 'Deaf Accounts',
      path: '/reports/deaf-accounts',
    },
  ];

  return (
    <div className="pt-16">
      <Breadcrumb />
      <div className="section-padding">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar items={sidebarItems} title="Reports" />
            <div className="page-content-panel flex-grow min-h-[400px] p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<FinancialReports />} />
                <Route path="/financial" element={<FinancialReports />} />
                <Route path="/deaf-accounts" element={<DeafAccounts />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsLayout;
