import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { loansData } from '../../../data/bankingData';

const TestLoan = () => {
  return (
    <div className="section-padding">
      <div className="container-max">
        <h1 className="text-4xl font-bold text-trust-900 mb-4">Test Loan Page</h1>
        <p className="text-lg text-gray-600 mb-8">This is a test to verify BankingPageTemplate works.</p>
        <BankingPageTemplate 
          type="loan" 
          data={loansData.goldLoan}
        />
      </div>
    </div>
  );
};

export default TestLoan;
