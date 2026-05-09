import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { loansData } from '../../../data/bankingData';

export default function GoldLoan() {
  const data = loansData.goldLoan;

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
