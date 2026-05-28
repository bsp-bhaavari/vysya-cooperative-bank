import React from 'react';
import { Mail, CheckCircle, Clock } from 'lucide-react';
import Card, { CardContent } from '../../components/Card';

export default function EmailStatement() {
  const frequencies = [
    { period: 'Daily', desc: 'Receive your account statements every day via email' },
    { period: 'Weekly', desc: 'Receive your account statements every week via email' },
    { period: 'Monthly', desc: 'Receive your account statements every month via email' },
    { period: 'Quarterly', desc: 'Receive your account statements every quarter via email' }
  ];

  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-trust-50/50 rounded-xl flex items-center justify-center">
            <Mail className="w-8 h-8 text-trust-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-trust-900">Statement by Email</h1>
            <p className="text-gray-600">Receive account statements via email at your preferred frequency</p>
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Get your account statements delivered directly to your email inbox. Choose the frequency that suits you best.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {frequencies.map((item, index) => (
            <Card key={index} className="group hover:shadow-premium-sm transition-all duration-300">
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trust-50/50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Clock className="w-6 h-6 text-trust-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-trust-900 mb-1">{item.period}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-trust-50/50 to-gold-50/50">
          <CardContent>
            <div className="text-center py-4">
              <h3 className="text-xl font-bold text-trust-900 mb-2">Charges</h3>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-lg font-semibold text-green-600">Free for all account types</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
