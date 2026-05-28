import React from 'react';
import { QrCode, MapPin, CheckCircle } from 'lucide-react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

export default function QRCodePage() {
  return (
    <div className="section-padding">
      <div className="container-max">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-trust-50/50 rounded-xl flex items-center justify-center">
            <QrCode className="w-8 h-8 text-trust-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-trust-900">QR Code Technology</h1>
            <p className="text-gray-600">Quick and easy payments using QR code technology</p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-trust-600" />
              <span>Provider Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-surface-tint border border-gray-100 rounded-lg p-6">
              <h3 className="font-semibold text-trust-900 mb-2">Futuretek Commerce Pvt Ltd</h3>
              <p className="text-gray-700">Road No 5, Murlipura</p>
              <p className="text-gray-700">Jaipur - 302023</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            'Static QR codes',
            'Dynamic QR codes',
            'Instant payments',
            'Mobile payments',
            'Merchant solutions',
            'Bill payments',
            'UPI integration',
            'Secure transactions'
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Service Charges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-trust-900 text-white">
                    <th className="px-6 py-3 text-left font-semibold">Service</th>
                    <th className="px-6 py-3 text-left font-semibold">Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-trust-50/60 transition-colors border-b border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">Static QR Code</td>
                    <td className="px-6 py-4 text-gray-700">Free</td>
                  </tr>
                  <tr className="bg-gray-50/50 hover:bg-trust-50/60 transition-colors border-b border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">Dynamic QR Code</td>
                    <td className="px-6 py-4 text-gray-700">Free</td>
                  </tr>
                  <tr className="bg-white hover:bg-trust-50/60 transition-colors border-b border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">Transaction Processing</td>
                    <td className="px-6 py-4 text-gray-700">Rs.40 + GST</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
