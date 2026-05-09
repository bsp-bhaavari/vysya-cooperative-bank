import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { accountsData } from '../../../data/bankingData';

const LakshmiDeposit = () => {
  const data = accountsData.cumulativeDeposit;

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
};

export default LakshmiDeposit;
