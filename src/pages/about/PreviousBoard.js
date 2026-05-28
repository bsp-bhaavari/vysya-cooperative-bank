import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const PreviousBoard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-trust-900 mb-4">Previous Board Members</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We honor and remember our former board members who have contributed immensely to the growth and 
          success of Vysya Co-operative Bank. Their vision, leadership, and dedication have laid the strong 
          foundation on which we continue to build and serve our community.
        </p>
      </div>

      <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardHeader>
          <CardTitle>Tribute to Our Leaders</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            The success of Vysya Co-operative Bank today stands on the shoulders of exceptional leaders 
            who guided us through various phases of growth. Their commitment to cooperative banking principles 
            and community service continues to inspire our current leadership team.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Legacy of Excellence</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-trust-600 mb-2">48+</div>
              <p className="text-gray-600">Years of Service</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-600 mb-2">1 AO + 8</div>
              <p className="text-gray-600">Branches Across Tumkur, Bangalore, Mysuru</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust-600 mb-2">25000+</div>
              <p className="text-gray-600">Customers Trusting with us</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviousBoard;
