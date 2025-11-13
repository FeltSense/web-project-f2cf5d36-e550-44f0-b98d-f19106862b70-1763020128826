import { Code, Smartphone, Cloud, Lock, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description:
      'Tailored software solutions built to meet your unique business needs with scalable architecture and modern technologies.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Migrate, deploy, and manage your applications in the cloud with optimized performance, security, and cost efficiency.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your digital assets, data, and infrastructure from modern threats.',
  },
  {
    icon: Zap,
    title: 'AI & Automation',
    description:
      'Harness the power of artificial intelligence and automation to streamline operations and drive intelligent decision-making.',
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    description:
      'End-to-end digital transformation services that modernize your business processes and unlock new growth opportunities.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}