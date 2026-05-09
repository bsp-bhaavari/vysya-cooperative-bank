import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { loansData } from '../../../data/bankingData';

const NsclLoan = () => {
  const data = loansData.nscLoan;

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
};

export default NsclLoan;
