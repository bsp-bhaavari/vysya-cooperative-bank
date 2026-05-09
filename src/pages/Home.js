import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  Home as HomeIcon, 
  Coins, 
  Smartphone, 
  Lock, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight,
  Shield,
  Users,
  TrendingUp,
  MessageSquare,
  Wallet,
  Star,
  Zap,
  Award,
  Globe,
  Truck,
  Building,
  Clock,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      icon: Lock,
      title: "Locker Facility",
      subtitle: "Secure Your Valuables",
      description: "Keep your valuables safe with our secure locker facilities available in various sizes",
      features: ["High Security", "Multiple Sizes", "Easy Access"],
      color: "primary",
      bgImage: "/images/locker-facility.jpeg",
      imagePosition: "center"
    },
    {
      icon: Shield,
      title: "Secure Banking",
      subtitle: "Your Safety Is Our Priority",
      description: "Bank with confidence using our advanced security measures and fraud protection",
      features: ["256-bit Encryption", "Fraud Protection", "Secure Transactions"],
      color: "secondary",
      bgImage: "/images/secure-banking.jpeg",
      imagePosition: "center"
    },
    {
      icon: Smartphone,
      title: "IMPS Services",
      subtitle: "Instant Money Transfer",
      description: "Transfer money instantly using IMPS - available 24/7 for your convenience",
      features: ["Instant Transfer", "24/7 Available", "Secure & Fast"],
      color: "primary",
      bgImage: "/images/imps-services.png",
      imagePosition: "center"
    },
    {
      icon: Coins,
      title: "Gold Loans",
      subtitle: "Quick Loans Against Gold",
      description: "Get instant loans against your gold ornaments with minimal documentation and competitive rates",
      features: ["Quick Approval", "Low Interest", "Minimal Documentation"],
      color: "secondary",
      bgImage: "/images/gold-loans.jpg",
      imagePosition: "center"
    },
    {
      icon: Truck,
      title: "Vehicle Loans",
      subtitle: "Drive Your Dream Vehicle",
      description: "Affordable vehicle loans with flexible repayment options for new and used vehicles",
      features: ["Quick Approval", "Flexible Terms", "Competitive Rates"],
      color: "primary",
      bgImage: "/images/vehicle-loans.jpeg",
      imagePosition: "center"
    },
    {
      icon: HomeIcon,
      title: "Home Loans",
      subtitle: "Build Your Dream Home",
      description: "Affordable housing loans with flexible repayment options to make your dream home a reality",
      features: ["Low Interest Rates", "Long Tenure", "Quick Processing"],
      color: "secondary",
      bgImage: "/images/home-loans.jpeg",
      imagePosition: "center"
    },
    {
      icon: CreditCard,
      title: "ATM RuPay Card",
      subtitle: "Access Funds 24/7",
      description: "Access your funds anytime, anywhere with our secure ATM and RuPay debit cards",
      features: ["24/7 Access", "Wide Acceptance", "Secure Transactions"],
      color: "primary",
      bgImage: "/images/atm-rupay-card.png",
      imagePosition: "center"
    }
  ];

  const featureCards = [
    {
      icon: CreditCard,
      title: "ATM RuPay Card",
      description: "Access your funds 24/7 with our secure ATM and debit cards worldwide.",
      link: "/services/atm-card",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: HomeIcon,
      title: "Home Loan",
      description: "Build or buy your dream home with our affordable housing loans.",
      link: "/banking/loans/housing-loan",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Coins,
      title: "Gold Loan",
      description: "Get instant loans against your gold ornaments with minimal documentation.",
      link: "/banking/loans/gold-loan",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "IMPS Transfer",
      description: "Instant money transfer service available 24/7 through mobile banking.",
      link: "/services/imps",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Locker Facility",
      description: "Secure your valuables in our bank lockers with advanced security.",
      link: "/services/lockers",
      gradient: "from-red-500 to-rose-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Bank on the go with our comprehensive mobile banking app.",
      link: "/services/mobile-banking",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "SMS Alerts",
      description: "Get instant SMS notifications for all your account transactions.",
      link: "/services/sms-alerts",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Experience seamless digital payments with our secure wallet services.",
      link: "/services",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Advanced encryption and multi-layer security to protect your financial data and transactions.",
      highlight: "256-bit encryption"
    },
    {
      icon: Users,
      title: "Expert Support Team",
      description: "Dedicated professionals ready to assist you with personalized banking solutions.",
      highlight: "24/7 availability"
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented Products",
      description: "Innovative financial solutions designed to accelerate your personal and business growth.",
      highlight: "Competitive rates"
    },
    {
      icon: Globe,
      title: "Nationwide Network",
      description: "Extensive branch network and digital services accessible from anywhere, anytime.",
      highlight: "50+ branches"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    // Test image loading
    const testImage = new Image();
    testImage.onload = () => console.log('Test image loaded successfully');
    testImage.onerror = () => console.error('Test image failed to load');
    testImage.src = '/images/locker-facility.jpeg';
    
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Slider - FIXED STRUCTURE */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] w-full overflow-hidden">
        {/* IMAGE TAG - EXACT STRUCTURE AS REQUESTED */}
        <img
          src={heroSlides[currentSlide].bgImage}
          alt={heroSlides[currentSlide].title}
          className="absolute w-full h-full object-cover object-center"
          loading="eager"
          crossOrigin="anonymous"
          onLoad={() => console.log('Image loaded:', heroSlides[currentSlide].bgImage)}
          onError={(e) => {
            console.error('Image failed to load:', heroSlides[currentSlide].bgImage);
            console.error('Current slide index:', currentSlide);
            console.error('Available images:', (heroSlides || []).map(s => s.bgImage));
            // Fallback to orange gradient if image fails to load
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #1E3A5F 0%, #0B1F3A 100%)';
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/80 via-primary-900/55 to-black/35" />
        <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none" aria-hidden />
        
        {/* NAVIGATION ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        
        {/* SLIDE INDICATORS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-white' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        {/* CONTENT - EXACT STRUCTURE AS REQUESTED */}
        <div className="relative z-10 text-white p-6 sm:p-8 md:p-12 flex items-center h-full">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 rounded-full text-white font-medium shadow-sm">
                  <Star className="w-4 h-4 text-gold-300" />
                  <span className="text-sm">Trusted by 50,000+ Customers</span>
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center">
                  {React.createElement(heroSlides[currentSlide].icon, { className: "w-8 h-8 text-white" })}
                </div>
                
                {/* Title */}
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
                    {heroSlides[currentSlide].subtitle}
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                  {heroSlides[currentSlide].description}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-3 gap-3">
                  {heroSlides[currentSlide].features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-3 text-center">
                      <Award className="w-4 h-4 text-gold-300 mx-auto mb-1" />
                      <span className="text-white text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-950/20 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    to="/banking/accounts"
                    className="px-6 py-3 bg-white/12 backdrop-blur-md border border-white/35 text-white font-semibold rounded-lg hover:bg-white/22 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Bank Section */}
      <section 
        className="relative py-20 px-6 bg-cover bg-center bg-surface-page"
        style={{
          backgroundImage: 'url("/images/about-bank.webp")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-surface-page/95 via-surface-tint/88 to-surface-muted/85" />
        <div className="absolute inset-0 bg-hero-mesh opacity-60 pointer-events-none" aria-hidden />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">
              About Vysya Co-operative Bank
            </h2>
            <h3 className="text-2xl md:text-3xl text-primary-800/90 font-light mb-8">
              Trusted Banking for a Better Tomorrow
            </h3>
          </div>
          
          {/* Description */}
          <div className="mb-16 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Vysya Co-operative Bank has been serving communities with excellence and integrity for over two decades. 
              We combine traditional banking values with innovative technology to provide you with the best 
              financial solutions tailored to your needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive range of services includes personal banking, business solutions, loans, 
              and digital banking options. We are committed to making banking accessible, secure, and 
              convenient for all our customers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              With a strong foundation of trust and customer satisfaction, we continue to grow and evolve, 
              always keeping your financial well-being at the heart of everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-primary-800 via-primary-900 to-trust-950 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" aria-hidden />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-trust-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 bg-gold-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Trusted by
              <span className="text-gold-300"> Thousands</span> of Customers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our growing family of satisfied customers who trust us with their financial future
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">50K+</div>
              <p className="text-white/90 text-lg">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">50+</div>
              <p className="text-white/90 text-lg">Branch Network</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">24/7</div>
              <p className="text-white/90 text-lg">Digital Banking</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">99.9%</div>
              <p className="text-white/90 text-lg">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-surface-muted/80 via-surface-page to-surface-tint">
        <div className="container-max">
          <div className="bg-gradient-to-br from-primary-800 via-primary-900 to-trust-950 rounded-3xl p-12 md:p-16 relative overflow-hidden border border-trust-800/40 shadow-premium">
            <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" aria-hidden />
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-trust-500/12 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400/10 rounded-full blur-2xl" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Experience
                <span className="text-gold-300"> Vysya Co-operative Banking?</span>
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have transformed their banking experience with us
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-950/25 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/about/history"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/35 text-white font-bold rounded-xl hover:bg-white/18 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
