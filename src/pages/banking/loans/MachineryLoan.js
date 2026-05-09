import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { loansData } from '../../../data/bankingData';

export default function MachineryLoan() {
  const data = loansData.machineryLoan;

  return (
    <div className="section-padding">
      <div className="container-max">
        <BankingPageTemplate 
          type="loan" 
          data={data}
        />
      </div>
    </div>
  );
}
