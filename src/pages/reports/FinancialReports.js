import React from 'react';
import { Download, FileText, Calendar } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const FinancialReports = () => {
  const balanceSheets = [
    {
      title: 'Balance Sheet March 2023',
      description: 'Audited balance sheet for the financial year ending March 2023',
      date: 'March 2023',
      file: '/reports/balance_sheet_2023.pdf'
    },
    {
      title: 'Balance Sheet March 2024',
      description: 'Audited balance sheet for the financial year ending March 2024',
      date: 'March 2024',
      file: '/reports/balance_sheet_2024.pdf'
    },
    {
      title: 'Balance Sheet March 2025',
      description: 'Audited balance sheet for the financial year ending March 2025',
      date: 'March 2025',
      file: '/reports/balance_sheet_2025.pdf'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-max py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Financial Reports</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Access our comprehensive financial reports including balance sheets 
              and regulatory disclosures.
            </p>
          </div>

          <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
            <CardHeader>
              <CardTitle>Our Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">48+</div>
                  <p className="text-gray-600">Years of Service</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">1 AO + 8</div>
                  <p className="text-gray-600">Branches Across Tumkur, Bangalore, Mysuru District</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">25000+</div>
                  <p className="text-gray-600">Customers Trusting with us</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Balance Sheets</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {balanceSheets.map((bs, index) => (
                <Card key={index} className="hover:shadow-premium-sm transition-all duration-300 group">
                  <CardContent>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                        <FileText className="w-8 h-8 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{bs.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{bs.description}</p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>{bs.date}</span>
                      </div>
                      <a
                        href={bs.file}
                        download
                        className="inline-flex items-center space-x-2 bg-primary-600 text-white px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:-translate-y-0.5"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Regulatory Disclosures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">RBI Requirements</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Basel III Disclosure</li>
                    <li>• Asset Quality Review</li>
                    <li>• Capital Adequacy Ratio</li>
                    <li>• Liquidity Coverage Ratio</li>
                    <li>• Large Exposures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Other Disclosures</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Corporate Governance Report</li>
                    <li>• Business Responsibility Report</li>
                    <li>• Shareholding Pattern</li>
                    <li>• Related Party Transactions</li>
                    <li>• Management Discussion & Analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary-50">
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">
                    All financial reports are audited by independent auditors and approved by the Board of Directors.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">
                    Reports are prepared in accordance with Indian Accounting Standards (Ind AS) and RBI guidelines.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-xs font-bold">!</span>
                  </div>
                  <p className="text-gray-700">
                    For any queries regarding financial reports, please contact our administrative office.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FinancialReports;
