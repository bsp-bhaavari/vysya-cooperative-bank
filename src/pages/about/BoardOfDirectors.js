import React from 'react';
import Card, { CardHeader, CardTitle, CardContent } from '../../components/Card';

const BoardOfDirectors = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Board of Directors</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>President Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-gray-700">
            <p><strong>Sri Govindaraju.K.N — President</strong></p>
            <p>
              Sri Govindaraju.K.N is a visionary par excellence. His passion ensured that the Bank reached 
              a Scheduled Bank Status through his continuous guidance and exemplary leadership. His reformist 
              zeal has helped the society at large through his active role in various institutions and 
              activities like Educational Institutes, Hostel for Boys. He is a pioneer in the Lorry 
              Transports and Briquette industry. He has travelled widely as part of study tours of 
              Co-operative Banking System across Country as well as across other parts of the world.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Loan Committee (w.e.f 28th February 2015)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Joint Loan, Pledge Loan, Hypothecation Loan & Share Loan:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Sri Rajashekharaiah V.K — President</li>
                <li>• Sri. Suresh Kumar R.A — Member</li>
                <li>• Sri. G.C. Basavaraju — Member</li>
                <li>• Sri. D.P. Basavaraju — Member</li>
                <li>• Sri. Balarama Shetty — Member</li>
                <li>• Special Invitees: Sri. Suresh T.R., Sri Mudalagiriyappa G.C.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Mortgage of Property & Machinery Loan Committee:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Sri. Divyanandamurthy H. M. — President</li>
                <li>• Sri. Jinesh Jain M. S. — Member</li>
                <li>• Sri. Srinath K. V. — Member</li>
                <li>• Sri. Nataraj C R. — Member</li>
                <li>• Sri. M. Deepak. — Member</li>
                <li>• Special Invitees: Sri. M.P. Mahesh</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Senior Executives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-gray-700">
            <li>• Sri. Aravind.M.R — CHIEF Executive Officer — 95918-00360</li>
            <li>• Sri. Sateesha.S. — AGM (System Admin.) — 9845322286</li>
            <li>• Sri Suryanarayana Setty.G — Sale Officer — 99000-19878</li>
            <li>• Jyothi A — Admin Dept — 7760979176</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Branch Managers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Tumkur:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Sri. Shiva Prakash.K.S. (H.O. Br. Tumkur) — Manager — 99000 19918</li>
                <li>• Smt. Suma.S — APMC Yard Branch — 99000 19784</li>
                <li>• Smt. Sindhu.T.A. — SIT Extension (Vijaya nagara) Branch — 99000 19115</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Madhugiri:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Sri. Sainath Babu.K.S — 99000 19862</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Pavagada:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Anuradha.T.R. — 9900018995</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Bangalore:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Sri. Laxmi Narayan Setty.A.N — APMC Yard Branch, Yesvanthpur — 99000 24994</li>
                <li>• Sri. Srinivas.G.V. — BVK Iyengar Road (Chickpet) Branch — 99000 23908</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Mysuru:</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Sri. Manjunath Guptha NV — 99000 19812</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Board of Directors at the time of establishment (1978)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1 text-gray-700">
            <li>• Sri. Sampangi Ramu.T.A. (President)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardOfDirectors;
