import React from 'react';
import BankingPageTemplate from '../../components/BankingPageTemplate';
import { servicesData } from '../../data/bankingData';

export default function ATMCard() {
  const data = servicesData.atmCard;

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
