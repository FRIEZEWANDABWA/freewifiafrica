import React from 'react';
import { 
  WifiIcon, 
  AcademicCapIcon, 
  HeartIcon, 
  BriefcaseIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Youth Digital Empowerment',
      description: 'Comprehensive digital literacy programs targeting 18-35 age group across Africa',
      icon: UserGroupIcon,
      features: [
        'Free Wi-Fi access in youth centers and universities',
        'Digital skills training and certification programs',
        'Online job placement and career guidance',
        'Entrepreneurship support and mentorship',
        'Access to global educational resources'
      ],
      impact: '2.4M+ youth reached across 7 countries',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop'
    },
    {
      title: 'Healthcare Access Solutions',
      description: 'Telemedicine and health information delivery to underserved communities',
      icon: HeartIcon,
      features: [
        'Telemedicine consultations in rural clinics',
        'Health education content in local languages',
        'Vaccination and health campaign coordination',
        'Medical record digitization and management',
        'Emergency health information access'
      ],
      impact: '890K+ patients served, 45% improvement in health outcomes',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
    },
    {
      title: 'Agricultural Innovation Hub',
      description: 'Smart farming solutions and market access for rural farmers',
      icon: GlobeAltIcon,
      features: [
        'Weather forecasting and crop advisory services',
        'Market price information and trading platforms',
        'Agricultural extension services via video',
        'Farmer-to-farmer knowledge sharing networks',
        'Access to agricultural financing and insurance'
      ],
      impact: '156K+ farmers connected, 34% increase in crop yields',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=250&fit=crop'
    },
    {
      title: 'Women Economic Empowerment',
      description: 'Digital tools and resources specifically designed for women entrepreneurs',
      icon: BriefcaseIcon,
      features: [
        'Women-only digital literacy classes',
        'Microfinance and business loan access',
        'Online marketplace for women-made products',
        'Childcare coordination during training sessions',
        'Mentorship networks and peer support groups'
      ],
      impact: '78K+ women entrepreneurs supported, 67% business growth',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop'
    },
    {
      title: 'Education Technology Platform',
      description: 'Comprehensive e-learning solutions for schools and communities',
      icon: AcademicCapIcon,
      features: [
        'Offline-capable educational content delivery',
        'Teacher training and professional development',
        'Student assessment and progress tracking',
        'Parent-teacher communication platforms',
        'Integration with national curriculum standards'
      ],
      impact: '1.2M+ students reached, 89% improvement in test scores',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop'
    },
    {
      title: 'Community Safety & Security',
      description: 'Digital tools for community safety and emergency response',
      icon: ShieldCheckIcon,
      features: [
        'Emergency alert and notification systems',
        'Community reporting and feedback platforms',
        'Digital identity and documentation services',
        'Safety education and awareness campaigns',
        'Coordination with local law enforcement'
      ],
      impact: '340K+ community members protected, 56% reduction in incidents',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop'
    }
  ];

  const organizationalBenefits = [
    {
      title: 'Real-Time Impact Measurement',
      description: 'Track program effectiveness with live analytics and community feedback',
      metrics: ['User engagement rates', 'Content consumption patterns', 'Behavioral change indicators', 'ROI on digital investments']
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Cloud-based platform that grows with your programs across multiple countries',
      metrics: ['Auto-scaling capabilities', 'Multi-language support', 'Regional customization', 'Partner integration APIs']
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Comprehensive analytics to optimize program delivery and resource allocation',
      metrics: ['Predictive analytics', 'Usage pattern analysis', 'Cost-per-beneficiary tracking', 'Impact forecasting']
    },
    {
      title: 'Community Engagement Tools',
      description: 'Built-in features to foster community participation and feedback',
      metrics: ['Survey and feedback systems', 'Community forums', 'Peer-to-peer learning', 'Local content creation']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Gates Foundation Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforming lives across Africa through innovative digital access solutions 
            designed for youth and vulnerable communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Solutions Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated platform addresses the unique challenges faced by African communities, 
              with special focus on empowering youth and supporting vulnerable populations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <solution.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-green-800">Impact: {solution.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizational Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits for Your Organization</h2>
            <p className="text-xl text-gray-600">
              Maximize your impact with our comprehensive platform designed for foundations and NGOs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationalBenefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="space-y-2">
                  {benefit.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <ChartBarIcon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Communities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the Gates Foundation in creating lasting change across Africa. 
            Let's discuss how our solutions can amplify your impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;