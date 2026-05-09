import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Breadcrumb from '../../components/Breadcrumb';
import LoanRates from './LoanRates';
import DepositRates from './DepositRates';

const InterestRatesLayout = () => {
  const sidebarItems = [
    {
      name: 'Loan Interest Rates',
      path: '/interest-rates/loans',
    },
    {
      name: 'Deposit Interest Rates',
      path: '/interest-rates/deposits',
    },
  ];

  return (
    <div className="pt-16">
      <Breadcrumb />
      <div className="section-padding">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar items={sidebarItems} title="Interest Rates" />
            <div className="page-content-panel flex-grow min-h-[400px] p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<LoanRates />} />
                <Route path="/loans" element={<LoanRates />} />
                <Route path="/deposits" element={<DepositRates />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestRatesLayout;
