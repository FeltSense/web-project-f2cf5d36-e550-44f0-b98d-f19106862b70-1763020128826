import { Check, Shield, Zap, Clock } from 'lucide-react';

const features = [
  'Custom Software Development',
  'Cloud Infrastructure Setup',
  'Mobile App Development',
  '24/7 Technical Support',
  'Security Audits & Compliance',
  'Performance Optimization',
  'API Integration',
  'Regular Updates & Maintenance',
];

const trustBadges = [
  { icon: Shield, text: 'Enterprise-Grade Security' },
  { icon: Zap, text: 'Lightning-Fast Delivery' },
  { icon: Clock, text: '24/7 Support' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our comprehensive tech solution package designed for growing businesses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">
                Professional Plan
              </h3>
              <p className="text-blue-100">Everything you need to succeed</p>
            </div>

            <div className="p-12">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-500 text-xl">/month</span>
                </div>
                <p className="text-gray-600">Billed monthly, cancel anytime</p>
              </div>

              <div className="mb-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Everything included:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                        <Check size={16} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Get Started Now
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center gap-2"
                    >
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <span className="text-sm text-gray-600">{badge.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            🔒 Secure payment powered by Stripe • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}