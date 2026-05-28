import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

export default function DemandDraft() {
  const charges = [
    ['Up to Rs.1 Lakh', '0.15% + GST'],
    ['Above Rs.1 Lakh', '0.1% + GST']
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-trust-50/50 rounded-xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-trust-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-trust-900">Demand Draft</h1>
            <p className="text-gray-600">Secure demand draft facility with competitive commission rates</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            'Secure payment instrument',
            'Nationwide acceptance',
            'Various denominations',
            'Immediate issuance',
            'Duplicate facility',
            'Tracking facility',
            'Cancellation facility',
            'Online request'
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>DD Commission Charges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-trust-900 text-white">
                    <th className="px-6 py-3 text-left font-semibold">Amount</th>
                    <th className="px-6 py-3 text-left font-semibold">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {charges.map((charge, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-trust-50/60 transition-colors border-b border-gray-200`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900">{charge[0]}</td>
                      <td className="px-6 py-4 text-gray-700">{charge[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
