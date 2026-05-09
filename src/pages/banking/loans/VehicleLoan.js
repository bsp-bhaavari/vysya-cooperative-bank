import React from 'react';
import BankingPageTemplate from '../../../components/BankingPageTemplate';
import { loansData } from '../../../data/bankingData';

export default function VehicleLoan() {
  const data = loansData.vehicleLoan;

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
