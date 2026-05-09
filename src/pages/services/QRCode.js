import React from 'react';
import BankingPageTemplate from '../../components/BankingPageTemplate';
import { servicesData } from '../../data/bankingData';

export default function QRCode() {
  const data = servicesData.qrCode;

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
