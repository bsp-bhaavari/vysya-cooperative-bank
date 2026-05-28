import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';
import { interestRatesData } from '../../data/bankingData';

const LoanRates = () => {
  const loanRates = interestRatesData.loans;

  const tableHeaders = ['Type of Loan', 'After Rebate', 'Actual ROI'];

  const tableData = (loanRates || []).map(loan => [
    loan.loanName,
    loan.afterRebate,
    loan.actualROI
  ]);

  const importantNotes = [
    'Interest rates are subject to change without prior notice',
    'Rates effective from 01-02-2026',
    '* Rebate applicable for prompt repayment and good credit history',
    'Processing fees and other charges are extra as per bank policy',
    'Rates may vary based on credit score and loan amount',
    'TDS applicable as per Income Tax Act',
    'For detailed terms and conditions, please contact branch'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-trust-900 mb-4 tracking-tight">Loan Interest Rates</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          VYSYA CO-OPERATIVE BANK LTD., TUMKUR. Rate of Interest on Loan & Advances w.e.f 01-02-2026.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Loan Interest Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table 
              headers={tableHeaders}
              data={tableData}
              className="w-full"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-surface-tint border-l-4 border-trust-700 border border-gray-100">
        <CardHeader>
          <CardTitle>Important Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {(importantNotes || []).map((note, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-trust-600 rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-700 leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="relative overflow-hidden bg-gradient-to-br from-trust-800 via-trust-900 to-trust-950 text-white rounded-xl p-8 text-center border border-trust-800/40 shadow-premium">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-trust-950/30 to-transparent" aria-hidden />
        <div className="relative">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Need More Information?</h2>
          <p className="text-xl mb-6 text-trust-200/90 max-w-2xl mx-auto">
            Contact our loan experts for personalized interest rate quotes and special offers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-trust-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-trust-700 transition-all duration-300 shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Contact Loan Expert
            </Link>
            <Link 
              to="/banking/loans" 
              className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/12 transition-all duration-300"
            >
              View All Loans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanRates;
