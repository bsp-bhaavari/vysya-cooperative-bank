import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const History = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Our History</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Vysya Co-operative Bank Limited is a leading Urban Co-operative Bank in the State, 
            functioning with its Administrative Office at TUMKUR. The Bank is promoted by the Vysya 
            Community of Tumkur city and was established in the Year 1978.
          </p>
          <p>
            The VCBL bank was incorporated in 1978 by registering at Mysore, State Co-operative 
            Registrar Office with Register No. 270 with 275 members and authorized capital of ₹5.00 
            lakhs. In the beginning years, VCBL Bank carried out its banking operation under the guidance 
            of Bangalore Grain Merchant Co-operative Bank Limited.
          </p>
          <p>
            Shri. Sampangiram.T.A. is the founder chairman of VCBL Bank.
          </p>
          <p>
            Bank has made considerable progress between 1986 and till now, when there were only 256 
            members having Share capital of ₹1,35,000. Since then, there is considerable increase of 
            members joining the bank. Now it has Over 11885 Members. Bank celebrated its 44th Anniversary 
            in 2020.
          </p>
          <p>
            VCBL Bank is a fully computerized Bank in Tumkur and Bank is offering good services to its 
            customers and Bank is increasing its profit over the years.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Branch Expansion</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-gray-700">
            <li>• In 1992, opened 1st Branch at APMC Yard Branch, Tumkur</li>
            <li>• 2nd branch at SIT (Vijay Nagar) Extension, Tumkur</li>
            <li>• 3rd branch at Pavagada</li>
            <li>• 4th Branch at Madhugiri</li>
            <li>• 5th branch at APMC Yard, Yesvanthpur, Bangalore</li>
            <li>• 6th branch at BVK Iyengar Road (Chickpet) Branch, Bangalore</li>
            <li>• In 2005, Administrative Office opened in its own building on BH Road, Tumkur</li>
            <li>• Vijayanagara (SIT Extension) Branch shifted to its New own Building at SIT Main Road, Tumkur</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Areas of Operation</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-1 text-gray-700">
            <li>Tumkur District</li>
            <li>Bangalore Urban and Rural District</li>
            <li>Mysore District</li>
            <li>Chamarajanagara</li>
            <li>Ramanagara</li>
            <li>Chikkaballapura</li>
            <li>Kolar</li>
            <li>Hassan</li>
            <li>Mandya</li>
            <li>Chitradurga</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Financial position at end of first year (31-03-1978)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-gray-700">
            <li>• No. of Members: 503</li>
            <li>• Share Capital: ₹1.73 Crores</li>
            <li>• Deposits: ₹1.86 Crores</li>
            <li>• Loans & Advances: ₹1.62 Crores</li>
            <li>• Net Profit: ₹0.20 Crores</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Regulatory Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-gray-700">
            <li>• RBI Licence No: UBD: KA 634 P</li>
            <li>• GSTIN: 29AAAJV0024D1ZG</li>
            <li>• PAN: AAAJV0024D</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
