import React from 'react';
import { Download, FileText, Calendar, TrendingUp } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const FinancialReports = () => {
  const reports = [
    {
      title: 'Annual Report 2023-24',
      description: 'Comprehensive annual financial report with audited statements',
      type: 'Annual',
      size: '2.5 MB',
      format: 'PDF',
      date: '2024-03-31'
    },
    {
      title: 'Quarterly Report Q4 2023',
      description: 'Fourth quarter financial performance and highlights',
      type: 'Quarterly',
      size: '1.2 MB',
      format: 'PDF',
      date: '2024-01-31'
    },
    {
      title: 'Balance Sheet 2023-24',
      description: 'Detailed balance sheet with assets and liabilities',
      type: 'Annual',
      size: '850 KB',
      format: 'PDF',
      date: '2024-03-31'
    },
    {
      title: 'Profit & Loss Statement 2023-24',
      description: 'Income statement with revenue and expense details',
      type: 'Annual',
      size: '750 KB',
      format: 'PDF',
      date: '2024-03-31'
    },
    {
      title: 'Cash Flow Statement 2023-24',
      description: 'Cash flow analysis with operating, investing, and financing activities',
      type: 'Annual',
      size: '650 KB',
      format: 'PDF',
      date: '2024-03-31'
    },
    {
      title: 'Director Report 2023-24',
      description: 'Board of directors report on bank performance and future outlook',
      type: 'Annual',
      size: '1.8 MB',
      format: 'PDF',
      date: '2024-03-31'
    }
  ];

  const keyMetrics = [
    {
      label: 'Total Deposits',
      value: '₹5,247 Cr',
      change: '+12.5%',
      positive: true
    },
    {
      label: 'Total Advances',
      value: '₹3,892 Cr',
      change: '+15.3%',
      positive: true
    },
    {
      label: 'Net Profit',
      value: '₹247 Cr',
      change: '+18.7%',
      positive: true
    },
    {
      label: 'NPA Ratio',
      value: '1.85%',
      change: '-0.25%',
      positive: true
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'Annual': return 'bg-primary-100 text-primary-700';
      case 'Quarterly': return 'bg-secondary-100 text-secondary-700';
      case 'Half-Yearly': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="container-max py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Financial Reports</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Access our comprehensive financial reports including annual reports, quarterly statements, 
          and regulatory disclosures. All reports are available for download in PDF format for your reference.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
        <CardHeader>
          <CardTitle>Key Financial Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            {(keyMetrics || []).map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <p className="text-gray-600 mb-2">{metric.label}</p>
                <div className={`flex items-center justify-center space-x-1 text-sm ${
                  metric.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  <span>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Reports</h2>
        <div className="space-y-4">
          {(reports || []).map((report, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{report.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
                          {report.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{report.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{report.date}</span>
                        </div>
                        <span>•</span>
                        <span>{report.size}</span>
                        <span>•</span>
                        <span>{report.format}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
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
                For any queries regarding financial reports, please contact our investor relations department.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Achievements & Milestones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">39+ Years</h4>
              <p className="text-sm text-gray-700">Of consistent performance</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">25+ Branches</h4>
              <p className="text-sm text-gray-700">Across the region</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">1L+ Customers</h4>
              <p className="text-sm text-gray-700">Trusting us with their finances</p>
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
