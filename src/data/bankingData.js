// Centralized banking data for all products and services

export const accountsData = {
  savings: {
    name: 'Savings Bank Account',
    path: '/banking/accounts/savings',
    icon: 'PiggyBank',
    description: 'Start your savings journey with our feature-rich savings account',
    features: [
      'Competitive interest rates',
      'Zero balance account option',
      'Free debit card facility',
      'Mobile and internet banking',
      'SMS alerts for transactions',
      'Nomination facility available',
      'Joint account facility',
      'Passbook facility'
    ],
    eligibility: [
      'Individuals aged 18 years and above',
      'Valid KYC documents',
      'Minimum initial deposit as per bank policy',
      'Resident Indian citizens'
    ],
    documents: [
      'Identity Proof (Aadhaar/PAN/Passport)',
      'Address Proof (Utility Bill/Rent Agreement)',
      'PAN Card (mandatory)',
      'Passport size photographs',
      'KYC form duly filled'
    ],
    interestRate: '3.50% - 4.00% p.a.'
  },
  current: {
    name: 'Current Account',
    path: '/banking/accounts/current',
    icon: 'CreditCard',
    description: 'Ideal for business transactions with unlimited withdrawals',
    features: [
      'Unlimited withdrawals and deposits',
      'Overdraft facility available',
      'Free cheque book facility',
      'Internet banking and mobile banking',
      'Multi-city cheque facility',
      'Email statements',
      'Standing instruction facility',
      'Nomination facility'
    ],
    eligibility: [
      'Proprietorship firms',
      'Partnership firms',
      'Private and public limited companies',
      'Trusts, societies, and associations'
    ],
    documents: [
      'PAN Card of the entity',
      'Registration certificate',
      'Address proof of business',
      'Identity proof of authorized signatories',
      'Photographs of authorized signatories',
      'Partnership deed (for partnership firms)'
    ],
    interestRate: 'No interest on current accounts'
  },
  termDeposit: {
    name: 'Term Deposit',
    path: '/banking/accounts/term-deposit',
    icon: 'TrendingUp',
    description: 'Secure investment option with attractive interest rates',
    features: [
      'Flexible tenure options from 7 days to 10 years',
      'Competitive interest rates',
      'Loan facility against deposit',
      'Auto-renewal option',
      'Joint holding facility',
      'Nomination facility',
      'Quarterly interest payment option',
      'Tax saving benefits under 80C'
    ],
    eligibility: [
      'Individuals (resident and NRI)',
      'Minors through guardians',
      'Hindu Undivided Families (HUF)',
      'Companies and firms',
      'Associations and societies'
    ],
    documents: [
      'PAN Card',
      'Identity proof',
      'Address proof',
      'Photographs',
      'KYC form',
      'Form 15G/15H (for tax exemption)'
    ],
    interestRate: '5.50% - 7.50% p.a. (based on tenure)'
  },
  cumulativeDeposit: {
    name: 'Lakshmi Deposit (LD)',
    path: '/banking/accounts/lakshmi-deposit',
    icon: 'Calendar',
    description: 'Any person can open Lakshmi Deposit Account. In this deposit type, interest will be compounded on quarterly basis and at the time of maturity, depositor will get the deposit amount along with interest.',
    features: [
      'Minimum Period: 1 year | Maximum Period: 10 Years',
      'Interest compounded quarterly',
      'Interest formula: CI = P {(1 + i/100)^n − 1}',
      'Example: ₹10,000 at 8% p.a. compounded quarterly for 5 years:',
      'Quarter 1: Interest = 10,000×8×1/100/4 = ₹200 → New principal ₹10,200',
      'Quarter 2: Interest = 10,200×8×1/100/4 = ₹204 → New principal ₹10,404',
      '(and so on quarterly)',
      'Loan can be availed up to 90% of Deposit Amount',
      'Premature Closure facility is Available',
      'Nomination Facility is Available',
      'Your Deposit up to ₹5,00,000.00 is insured under Deposit Insurance & Credit Guarantee Corporation and Insurance Premium is paid up to date'
    ],
    eligibility: [
      'Any person can open Lakshmi Deposit Account'
    ],
    documents: [],
    interestRate: 'As per bank rates'
  },
  fixedDeposit: {
    name: 'Fixed Deposit Account (FD)',
    path: '/banking/accounts/fixed-deposit',
    icon: 'Lock',
    description: 'Fixed Deposit Account can be opened by any person. This account will be opened for a fixed amount of deposit for a fixed tenure at the prescribed rate of interest.',
    features: [
      'Depositor can withdraw Interest amount Monthly/Quarterly/Half Yearly or Yearly',
      'Minimum period: 15 days | Maximum period: 10 Years',
      'Minimum deposit: ₹1,000',
      'Interest is calculated using Simple Interest',
      'Formula: SI = (P × R × T) / 100',
      'Example: ₹10,000 at 8% p.a. for 5 years = ₹4,000 interest → Total ₹14,000',
      'Loan can be availed up to 90% of Deposit Amount',
      'Premature Closure facility is Available',
      'Nomination Facility is Available',
      'Your Deposit up to ₹5,00,000.00 is insured under Deposit Insurance & Credit Guarantee Corporation and Insurance Premium is paid up to date'
    ],
    eligibility: [
      'Any person can open Fixed Deposit Account'
    ],
    documents: [],
    interestRate: 'As per bank rates'
  },
  recurringDeposit: {
    name: 'Kannika Cumulative Deposit (KCD)',
    path: '/banking/accounts/kannika-deposit',
    icon: 'Repeat',
    description: 'A recurring deposit where the customer deposits a fixed monthly instalment and is paid the deposited amount along with interest at the end of the term.',
    features: [
      'Minimum Period: 1 year | Maximum Period: 10 Years',
      'Minimum deposit: ₹100 per month',
      'Interest compounded quarterly',
      'Tenure options: 12 months to 10 years',
      'Withdrawal allowed only after maturity (premature closure with penalty)',
      'Loan against deposit: up to 95% of deposit amount',
      'Standing instructions for monthly deposits from linked account',
      'Senior citizens get 0.5% additional interest above regular rates',
      'Rate of interest: Between 5% to 8% (variable for tenure)',
      'Minimum deposit: From ₹100',
      'Tenure: Between 6 months and 10 years',
      'Interest calculation: Usually every quarter',
      'Mid-term/partial withdrawal: Not allowed',
      'Premature closure: Allowed with penalty',
      'Loan can be availed up to 90% of Deposit Amount',
      'Premature Closure facility is Available',
      'Nomination Facility is Available',
      'Your Deposit up to ₹5,00,000.00 is insured under Deposit Insurance & Credit Guarantee Corporation and Insurance Premium is paid up to date'
    ],
    eligibility: [
      'Any person can open Kannika Cumulative Deposit Account'
    ],
    documents: [],
    interestRate: 'As per bank rates'
  },
  dailyDeposit: {
    name: 'Vasavi Nitya Nidhi Deposit (VND)',
    path: '/banking/accounts/pigmy-deposit',
    icon: 'Calendar',
    description: 'VND / Vasavi Nitya Nidhi Deposit Scheme is intended to mop up small savings and is specially designed for daily savers. The Bank\'s Authorized agent will collect your savings at your doorsteps at daily or less frequent intervals in tune with your convenience.',
    features: [
      'Eligibility: Individual, Proprietorship, Partnership Firms, Clubs & Association',
      'Minimum contribution per month: ₹50.00',
      'Daily collection per day per account shall not exceed ₹1,000/- — Maximum ₹30,000 in a month',
      'Time Period: 63 Months',
      'Rate of Interest: 2.50% w.e.f 01.10.2020',
      'Loan Facility: Maximum 90% of the outstanding balance',
      'Premature Closure rates:',
      'Less than 12 months: Nil — Closure permitted after deducting 3% of balance as penalty',
      'Completed 12 months and less than 24 months: Nil',
      'Completed 24 months and less than 39 months: 0.50%',
      'Completed 39 months and less than 63 months: 1.50%',
      '63 months on maturity: 2.50%',
      'Loan can be availed up to 90% of Deposit Amount',
      'Premature Closure facility is Available',
      'Nomination Facility is Available',
      'Your Deposit up to ₹5,00,000.00 is insured under Deposit Insurance & Credit Guarantee Corporation and Insurance Premium is paid up to date'
    ],
    eligibility: [
      'Individual, Proprietorship, Partnership Firms, Clubs & Association'
    ],
    documents: [],
    interestRate: '2.50% w.e.f 01.10.2020'
  }
};

export const loansData = {
  jointLoan: {
    name: 'Joint Loan',
    path: '/banking/loans/joint-loan',
    icon: 'Users',
    description: 'Collaborative loan facility for multiple borrowers',
    features: [
      'Multiple borrowers facility',
      'Higher loan amount eligibility',
      'Shared repayment responsibility',
      'Flexible repayment tenure',
      'Competitive interest rates',
      'Quick processing',
      'Minimal documentation',
      'Online application facility'
    ],
    eligibility: [
      'Minimum 2 joint applicants',
      'All applicants aged 21-60 years',
      'Minimum monthly income ₹15,000',
      'Good credit score',
      'Stable employment/business',
      'Resident Indian citizens'
    ],
    documents: [
      'PAN Cards of all applicants',
      'Identity proofs of all applicants',
      'Address proofs of all applicants',
      'Income proofs of all applicants',
      'Bank statements of all applicants',
      'Photographs of all applicants',
      'Joint loan agreement'
    ],
    interestRate: '10.50% - 14.00% p.a.',
    maxAmount: '₹50 Lakhs',
    maxTenure: '20 years'
  },
  installmentLoan: {
    name: 'Installment Loan (IL)',
    path: '/banking/loans/installment-loan',
    icon: 'Calendar',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vasaviInstallmentLoan: {
    name: 'Vasavi Installment Loan',
    path: '/banking/loans/vasavi-installment-loan',
    icon: 'Star',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  kannikaInstallmentLoan: {
    name: 'Kannika Installment Loan',
    path: '/banking/loans/kannika-installment-loan',
    icon: 'Heart',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vehicleLoan: {
    name: 'Vehicle Loan (VL)',
    path: '/banking/loans/vehicle-loan',
    icon: 'Car',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vasaviVehicleLoan: {
    name: 'Vasavi Vehicle Loan (VVL)',
    path: '/banking/loans/vasavi-vehicle-loan',
    icon: 'Star',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  nscLoan: {
    name: 'NSC Loan (NSCL)',
    path: '/banking/loans/nscl-loan',
    icon: 'Shield',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  licPolicyLoan: {
    name: 'LIC Policy Loan (LICL)',
    path: '/banking/loans/lic-policy-loan',
    icon: 'FileText',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  generalHousingLoan: {
    name: 'Housing Loan',
    path: '/banking/loans/housing-loan',
    icon: 'Home',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  kannikaHousingLoan: {
    name: 'Kannika Housing Loan (KHL)',
    path: '/banking/loans/kannika-housing-loan',
    icon: 'Heart',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vasaviHousingLoan: {
    name: 'Vasavi Housing Loan (VGHL)',
    path: '/banking/loans/vasavi-housing-loan',
    icon: 'Star',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vasavambhaHousingLoan: {
    name: 'Vasavambha Housing Loan',
    path: '/banking/loans/vasavambha-housing-loan',
    icon: 'Crown',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  machineryLoan: {
    name: 'Machinery Loan',
    path: '/banking/loans/machinery-loan',
    icon: 'Cpu',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  goldLoan: {
    name: 'Gold Loan (GDL)',
    path: '/banking/loans/gold-loan',
    icon: 'Coin',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  sriLakshmiCashCredit: {
    name: 'Sri Lakshmi Cash Credit (SLCC)',
    path: '/banking/loans/sri-lakshmi-cash-credit',
    icon: 'DollarSign',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  godownLoan: {
    name: 'Godown Loan (GDNL)',
    path: '/banking/loans/godown-loan',
    icon: 'Warehouse',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vasaviCashCredit: {
    name: 'Vasavi Cash Credit (VCC)',
    path: '/banking/loans/vasavi-cash-credit',
    icon: 'Star',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  depositLoan: {
    name: 'Deposit Loan (DL)',
    path: '/banking/loans/deposit-loan',
    icon: 'Shield',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vasavambhaTermLoan: {
    name: 'Vasavambha Term Loan',
    path: '/banking/loans/vasavambha-term-loan',
    icon: 'Crown',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vasavambhaCashCredit: {
    name: 'Vasavambha Cash Credit',
    path: '/banking/loans/vasavambha-cash-credit',
    icon: 'Crown',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  },
  vasavambhaOverdraftLoan: {
    name: 'Vasavambha Overdraft Loan',
    path: '/banking/loans/vasavambha-overdraft-loan',
    icon: 'Crown',
    description: 'Please visit your nearest VCBL branch for details.',
    features: [],
    eligibility: [],
    documents: [],
    interestRate: 'Contact branch for details',
    maxAmount: 'Contact branch for details',
    maxTenure: 'Contact branch for details'
  }
};

export const servicesData = {
  rtgsNeft: {
    name: 'RTGS/NEFT',
    path: '/services/rtgs-neft',
    icon: 'ArrowRightLeft',
    description: 'Secure electronic fund transfer services',
    features: [
      '24/7 NEFT availability',
      'RTGS for high-value transfers',
      'Instant credit to beneficiary',
      'Secure and reliable',
      'Online and offline modes',
      'Transaction limits as per RBI',
      'SMS confirmation',
      'Online tracking'
    ],
    charges: {
      rtgs: {
        '₹2 Lakhs to ₹5 Lakhs': '₹25 + GST',
        'Above ₹5 Lakhs': '₹50 + GST'
      },
      neft: {
        'Up to ₹10,000': '₹2.5 + GST',
        '₹10,001 to ₹1 Lakh': '₹5 + GST',
        '₹1,00,001 to ₹2 Lakhs': '₹15 + GST',
        'Above ₹2 Lakhs': '₹25 + GST'
      }
    }
  },
  lockers: {
    name: 'Locker Facility',
    path: '/services/lockers',
    icon: 'Lock',
    description: 'Secure locker facility for your valuables',
    features: [
      'Various sizes available',
      'High-security vaults',
      'Biometric access',
      'Annual rental charges',
      'Joint holder facility',
      'Nomination facility',
      'Insurance coverage',
      '24/7 security'
    ],
    charges: {
      'Small (12.5" x 5" x 5")': '₹1,500 + GST per annum',
      'Medium (15" x 6" x 6")': '₹2,500 + GST per annum',
      'Large (18" x 6" x 6")': '₹4,000 + GST per annum',
      'Extra Large (24" x 6" x 6")': '₹6,000 + GST per annum'
    }
  },
  smsAlerts: {
    name: 'SMS Alerts',
    path: '/services/sms-alerts',
    icon: 'MessageSquare',
    description: 'Instant SMS notifications for all transactions',
    features: [
      'Real-time transaction alerts',
      'Balance notifications',
      'Cheque clearance alerts',
      'Loan repayment reminders',
      'Credit card alerts',
      'Account activity monitoring',
      'Security alerts',
      'Customizable alerts'
    ],
    charges: {
      'Individual Accounts': '₹15 + GST per quarter',
      'Joint Accounts': '₹20 + GST per quarter',
      'Corporate Accounts': '₹50 + GST per quarter'
    }
  },
  emailStatement: {
    name: 'Statement by Email',
    path: '/services/email-statement',
    icon: 'Mail',
    description: 'Receive account statements via email',
    features: [
      'Monthly statements via email',
      'Instant delivery',
      'Environment friendly',
      'Secure PDF format',
      'Password protected',
      'Customizable frequency',
      'Archival facility',
      'Download anytime'
    ],
    charges: {
      'Individual Accounts': 'Free',
      'Corporate Accounts': '₹100 + GST per annum'
    }
  },
  mobileBanking: {
    name: 'Mobile Banking',
    path: '/services/mobile-banking',
    icon: 'Smartphone',
    description: 'Complete banking on your mobile',
    features: [
      'Fund transfers',
      'Bill payments',
      'Mobile recharge',
      'Balance inquiry',
      'Mini statements',
      'Cheque requests',
      'Investment services',
      '24/7 availability'
    ],
    charges: {
      'Registration': 'Free',
      'Fund Transfers': 'As per applicable charges',
      'Bill Payments': 'Free',
      'Balance Inquiry': 'Free'
    }
  },
  atmCard: {
    name: 'ATM RuPay Debit Card',
    path: '/services/atm-card',
    icon: 'CreditCard',
    description: 'RuPay debit card for cash withdrawals and purchases',
    features: [
      'Cash withdrawals at ATMs',
      'Point of sale purchases',
      'Online shopping',
      'Contactless payments',
      'EMI facility',
      'Cashback offers',
      'Global acceptance',
      'Fraud protection'
    ],
    charges: {
      'Annual Fee': '₹150 + GST',
      'Replacement Card': '₹200 + GST',
      'ATM Withdrawal (Other Bank)': 'Free (5 transactions per month)'
    }
  },
  imps: {
    name: 'IMPS',
    path: '/services/imps',
    icon: 'Zap',
    description: 'Instant fund transfer 24/7',
    features: [
      '24/7 availability',
      'Instant credit',
      'Mobile and internet banking',
      'High security',
      'Transaction limits',
      'Confirmation SMS',
      'Online tracking',
      'Easy to use'
    ],
    charges: {
      'Up to ₹1,000': 'Free',
      '₹1,001 to ₹10,000': '₹5 + GST',
      '₹10,001 to ₹1 Lakh': '₹15 + GST',
      'Above ₹1 Lakh to ₹2 Lakhs': '₹25 + GST'
    }
  },
  ctsClearing: {
    name: 'CTS Clearing',
    path: '/services/cts-clearing',
    icon: 'CheckCircle',
    description: 'Cheque Truncation System for faster clearing',
    features: [
      'Faster cheque clearing',
      'Electronic image processing',
      'Reduced clearing time',
      'Enhanced security',
      'Online tracking',
      'SMS alerts',
      'Reduced fraud risk',
      'Nationwide coverage'
    ],
    charges: {
      'Local Cheques': 'Free',
      'Outstation Cheques': '₹50 + GST',
      'Speed Clearing': '₹25 + GST'
    }
  },
  nach: {
    name: 'NACH Debit/Credit',
    path: '/services/nach',
    icon: 'RefreshCw',
    description: 'National Automated Clearing House services',
    features: [
      'Automated payments',
      'Recurring transactions',
      'Bulk payments',
      'EMI deductions',
      'Investment deductions',
      'Insurance premiums',
      'Utility bill payments',
      'Online management'
    ],
    charges: {
      'Debit Mandate Registration': '₹25 + GST',
      'Credit Mandate Registration': '₹50 + GST',
      'Transaction Processing': '₹0.50 + GST per transaction'
    }
  },
  demandDraft: {
    name: 'Demand Draft',
    path: '/services/demand-draft',
    icon: 'FileText',
    description: 'Secure demand draft facility',
    features: [
      'Secure payment instrument',
      'Nationwide acceptance',
      'Various denominations',
      'Immediate issuance',
      'Duplicate facility',
      'Tracking facility',
      'Cancellation facility',
      'Online request'
    ],
    charges: {
      'Up to ₹10,000': '₹25 + GST',
      '₹10,001 to ₹1 Lakh': '₹50 + GST',
      '₹1,00,001 to ₹5 Lakhs': '₹100 + GST',
      'Above ₹5 Lakhs': '₹200 + GST'
    }
  },
  payOrder: {
    name: 'Pay Order',
    path: '/services/pay-order',
    icon: 'FileCheck',
    description: 'Local payment instrument',
    features: [
      'Local payments',
      'Immediate clearance',
      'Secure instrument',
      'Various denominations',
      'Quick issuance',
      'Duplicate facility',
      'Cancellation facility',
      'Online request'
    ],
    charges: {
      'Up to ₹10,000': '₹15 + GST',
      '₹10,001 to ₹1 Lakh': '₹30 + GST',
      '₹1,00,001 to ₹5 Lakhs': '₹75 + GST',
      'Above ₹5 Lakhs': '₹150 + GST'
    }
  },
  upi: {
    name: 'UPI',
    path: '/services/upi',
    icon: 'Smartphone',
    description: 'Unified Payments Interface for instant transfers',
    features: [
      '24/7 availability',
      'Instant transfers',
      'Mobile number as payment address',
      'Virtual payment address',
      'QR code payments',
      'Bill payments',
      'Merchant payments',
      'High security'
    ],
    charges: {
      'Fund Transfers': 'Free',
      'Bill Payments': 'Free',
      'Merchant Payments': 'Free',
      'QR Code Generation': 'Free'
    }
  },
  qrCode: {
    name: 'QR Code Technology',
    path: '/services/qr-code',
    icon: 'QrCode',
    description: 'QR code based payment solutions',
    features: [
      'Static QR codes',
      'Dynamic QR codes',
      'Instant payments',
      'Mobile payments',
      'Merchant solutions',
      'Bill payments',
      'UPI integration',
      'Secure transactions'
    ],
    charges: {
      'Static QR Code': 'Free',
      'Dynamic QR Code': '₹500 + GST per annum',
      'Transaction Processing': '0.5% + GST'
    }
  },
  seniorCitizen: {
    name: 'Senior Citizen Advantages',
    path: '/services/senior-citizen',
    icon: 'User',
    description: 'Special benefits for senior citizens',
    features: [
      'Higher interest rates on deposits',
      'Priority service at branches',
      'Dedicated counters',
      'Home banking facility',
      'Special loan schemes',
      'Reduced processing fees',
      'Free insurance coverage',
      'Special customer care'
    ],
    benefits: {
      'Additional Interest': '0.50% extra on term deposits',
      'Processing Fee Waiver': '50% waiver on loan processing',
      'Free Services': 'Free demand drafts up to ₹25,000 per month',
      'Priority Queue': 'Dedicated service at branches'
    }
  }
};

export const interestRatesData = {
  loans: [
    {
      loanName: 'General Housing Loan',
      interestRate: '8.35% - 10.50%',
      rebate: '0.25%',
      netRate: '8.10% - 10.25%'
    },
    {
      loanName: 'Kannika Housing Loan',
      interestRate: '8.00% - 10.00%',
      rebate: '0.25%',
      netRate: '7.75% - 9.75%'
    },
    {
      loanName: 'Vasavi Housing Loan',
      interestRate: '7.85% - 9.85%',
      rebate: '0.25%',
      netRate: '7.60% - 9.60%'
    },
    {
      loanName: 'Vasavambha Housing Loan',
      interestRate: '7.50% - 9.50%',
      rebate: '0.25%',
      netRate: '7.25% - 9.25%'
    },
    {
      loanName: 'Vehicle Loan',
      interestRate: '8.50% - 11.50%',
      rebate: '0.25%',
      netRate: '8.25% - 11.25%'
    },
    {
      loanName: 'Vasavi Vehicle Loan',
      interestRate: '7.50% - 10.50%',
      rebate: '0.25%',
      netRate: '7.25% - 10.25%'
    },
    {
      loanName: 'Gold Loan',
      interestRate: '9.50% - 14.00%',
      rebate: '0.50%',
      netRate: '9.00% - 13.50%'
    },
    {
      loanName: 'Machinery Loan',
      interestRate: '9.00% - 12.00%',
      rebate: '0.25%',
      netRate: '8.75% - 11.75%'
    },
    {
      loanName: 'Cash Credit',
      interestRate: '10.50% - 13.50%',
      rebate: '0.25%',
      netRate: '10.25% - 13.25%'
    },
    {
      loanName: 'Vasavi Cash Credit',
      interestRate: '9.50% - 12.50%',
      rebate: '0.25%',
      netRate: '9.25% - 12.25%'
    }
  ],
  deposits: [
    {
      depositName: 'Savings Account',
      interestRate: '3.50% - 4.00%',
      minBalance: '₹0',
      specialFeatures: 'Zero balance option available'
    },
    {
      depositName: 'Fixed Deposit',
      interestRate: '5.75% - 7.75%',
      minBalance: '₹1,000',
      specialFeatures: 'Senior citizen: +0.50%'
    },
    {
      depositName: 'Term Deposit',
      interestRate: '5.50% - 7.50%',
      minBalance: '₹1,000',
      specialFeatures: 'Tax benefits under 80C'
    },
    {
      depositName: 'Lakshmi Deposit (Cumulative)',
      interestRate: '6.00% - 8.00%',
      minBalance: '₹500',
      specialFeatures: 'Quarterly compounding'
    },
    {
      depositName: 'Kannika Deposit (Recurring)',
      interestRate: '6.25% - 7.25%',
      minBalance: '₹100/month',
      specialFeatures: 'Monthly installments'
    },
    {
      depositName: 'Daily Deposit (Pigmy)',
      interestRate: '7.00% - 8.50%',
      minBalance: '₹10/day',
      specialFeatures: 'Daily collection service'
    }
  ]
};
