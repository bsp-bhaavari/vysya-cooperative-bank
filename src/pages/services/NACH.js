import React from 'react';
import BankingPageTemplate from '../../components/BankingPageTemplate';
import { servicesData } from '../../data/bankingData';

export default function NACH() {
  const data = servicesData.nach;

  return (
    <div className="section-padding">
      <div className="container-max">
        <BankingPageTemplate 
          type="service" 
          data={data}
        />
      </div>
    </div>
  );
}
