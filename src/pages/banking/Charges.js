import React from 'react';
import Table from '../../components/Table';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const Charges = () => {
  const accountCharges = [
    ['Savings Account - Minimum Balance (Non-maintenance)', '₹100', 'Monthly'],
    ['Current Account - Minimum Balance (Non-maintenance)', '₹500', 'Monthly'],
    ['Cheque Book - 20 Leaves', '₹50', 'Per Book'],
    ['Cheque Book - Additional Leaves', '₹2', 'Per Leaf'],
    ['Passbook - First Issue', 'Free', 'One Time'],
    ['Passbook - Reprint', '₹100', 'Per Book'],
    ['Account Statement - Physical Copy', '₹25', 'Per Statement'],
    ['Account Statement - Email', 'Free', 'Unlimited'],
    ['Stop Payment', '₹50', 'Per Instrument'],
    ['Duplicate Statement', '₹100', 'Per Request']
  ];

  const transactionCharges = [
    ['Cash Deposit - Same Branch', 'Free', 'Unlimited'],
    ['Cash Deposit - Other Branch', '₹2 per ₹1000', 'Min ₹50, Max ₹5000'],
    ['Cash Withdrawal - Same Branch', 'Free', 'Up to ₹50,000/day'],
    ['Cash Withdrawal - Other Branch', '₹2 per ₹1000', 'Min ₹50, Max ₹5000'],
    ['NEFT - Online', 'Free', 'Unlimited'],
    ['NEFT - Branch', '₹2.5 + GST', 'Per Transaction'],
    ['RTGS - Online', 'Free', 'Unlimited'],
    ['RTGS - Branch', '₹5 + GST', 'Per Transaction'],
    ['IMPS - Online', 'Free', 'Up to 5 transactions/day'],
    ['IMPS - Additional', '₹5 + GST', 'Per Transaction']
  ];

  const cardCharges = [
    ['Debit Card - Annual Fee - Classic', 'Free', 'Per Year'],
    ['Debit Card - Annual Fee - Gold', '₹200', 'Per Year'],
    ['Debit Card - Annual Fee - Platinum', '₹500', 'Per Year'],
    ['Debit Card - Replacement', '₹100', 'Per Card'],
    ['ATM Withdrawal - Own Bank', 'Free', '5 transactions/month'],
    ['ATM Withdrawal - Other Bank', '₹20', 'After 5 transactions/month'],
    ['ATM Balance Inquiry - Other Bank', '₹8', 'After 5 transactions/month'],
    ['International Transaction', '3.5%', 'Per Transaction'],
    ['Card Hotlisting', 'Free', 'One Time'],
    ['Emergency Card Replacement', '₹200', 'Per Card']
  ];

  const loanCharges = [
    ['Loan Processing Fee', '0.5% - 2%', 'Of Loan Amount'],
    ['Loan Prepayment Charges', '2% - 4%', 'Of Outstanding Amount'],
    ['Loan Late Payment Charges', '2% p.m.', 'On Overdue Amount'],
    ['Loan Statement', 'Free', 'Per Request'],
    ['Loan Closure Certificate', '₹200', 'Per Certificate'],
    ['Loan Document Return', '₹500', 'Per Request'],
    ['Loan Rescheduling Charges', '1%', 'Of Rescheduled Amount'],
    ['Loan Legal Charges', 'Actual Cost', 'As Applicable'],
    ['Loan Valuation Charges', 'Actual Cost', 'As Applicable'],
    ['Loan Insurance Premium', 'Actual Cost', 'As Applicable']
  ];

  const otherCharges = [
    ['Locker Rent - Small Size', '₹1000', 'Per Year'],
    ['Locker Rent - Medium Size', '₹2000', 'Per Year'],
    ['Locker Rent - Large Size', '₡3000', 'Per Year'],
    ['Locker - Key Replacement', '₹500', 'Per Key'],
    ['Demand Draft', '₹50 + GST', 'Per Draft'],
    ['Pay Order', '₹25 + GST', 'Per Order'],
    ['SMS Alerts', '₹15', 'Per Quarter'],
    ['Email Alerts', 'Free', 'Unlimited'],
    ['Standing Instruction', 'Free', 'Per Instruction'],
    ['Nomination Registration', 'Free', 'One Time']
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Charges</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Transparent and competitive pricing for all our banking services. Below are the current charges 
          applicable to various banking products and services. These charges are subject to change as per 
          regulatory guidelines and bank policies.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-surface-tint to-surface-muted/80 border-primary-100/90">
        <CardHeader>
          <CardTitle>Important Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-200/80">
                <span className="text-primary-800 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All charges are exclusive of GST and other applicable taxes as per government regulations.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-200/80">
                <span className="text-primary-800 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Charges are subject to revision by the bank from time to time with proper notice to customers.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-200/80">
                <span className="text-primary-800 text-xs font-bold">!</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Some charges may be waived for premium account holders or as part of special promotional offers.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Related Charges</h2>
        <Table 
          headers={['Service', 'Charges', 'Frequency']}
          rows={accountCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Transaction Charges</h2>
        <Table 
          headers={['Service', 'Charges', 'Frequency']}
          rows={transactionCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Card Related Charges</h2>
        <Table 
          headers={['Service', 'Charges', 'Frequency']}
          rows={cardCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Related Charges</h2>
        <Table 
          headers={['Service', 'Charges', 'Frequency']}
          rows={loanCharges}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Services</h2>
        <Table 
          headers={['Service', 'Charges', 'Frequency']}
          rows={otherCharges}
        />
      </div>

      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle>Exemptions & Waivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Free Services</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• First cheque book for savings account</li>
                <li>• NEFT/RTGS through online banking</li>
                <li>• Email statements and alerts</li>
                <li>• Mobile banking registration</li>
                <li>• Nomination registration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Special Categories</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Senior citizens: Waiver on certain charges</li>
                <li>• Students: Special benefits on education loans</li>
                <li>• Priority customers: Exclusive charge waivers</li>
                <li>• Government schemes: As per scheme guidelines</li>
                <li>• Rural accounts: Special pricing</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grievance Redressal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            If you have any concerns regarding the charges or services, please contact our customer service 
            at <span className="font-medium">1800-123-4567</span> or email us at 
            <span className="font-medium">support@modernbank.com</span>. We are committed to resolving 
            your concerns promptly and efficiently.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Charges;
