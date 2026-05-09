import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { accountsData } from '../../../data/bankingData';

export default function FixedDeposit() {
  const data = accountsData.fixedDeposit;

  return (
    <div className="section-padding">
      <div className="container-max">
        <BankingPageTemplate 
          type="account" 
          data={data}
        />
      </div>
    </div>
  );
}
