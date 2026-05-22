import React from 'react';
import { MessageSquare, CheckCircle } from 'lucide-react';
import Card, { CardContent } from '../../components/Card';

export default function SMSAlerts() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-primary-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">SMS Alerts</h1>
            <p className="text-gray-600">Instant SMS notifications for all transactions</p>
          </div>
        </div>

        <Card>
          <CardContent>
            <div className="py-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-primary-50 border border-primary-200 rounded-xl px-6 py-4">
                  <MessageSquare className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="text-xl font-bold text-primary-800">
                    SMS Charges Rs.0.50 + GST per message/per quarter = 0.59
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  'Real-time transaction alerts',
                  'Balance notifications',
                  'Cheque clearance alerts',
                  'Loan repayment reminders',
                  'Account activity monitoring',
                  'Security alerts'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
