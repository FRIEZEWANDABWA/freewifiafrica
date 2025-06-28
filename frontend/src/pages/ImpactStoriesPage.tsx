import React from 'react';
import { 
  CurrencyDollarIcon, 
  HeartIcon
} from '@heroicons/react/24/outline';

const ImpactStoriesPage: React.FC = () => {
  const impactStories = [
    {
      id: 1,
      country: 'Kenya',
      flag: '🇰🇪',
      title: 'M-PESA Mobile Money Revolution',
      investment: '$70M+',
      impact: '194,000 households lifted from poverty',
      description: 'Gates Foundation funding helped M-PESA increase per-capita consumption and transform agricultural value chains across Kenya.',
      details: [
        'Mobile payments facilitated farm payments and market links',
        'Rigorous research confirmed poverty reduction impact',
        'Improved financial inclusion for farmers and families',
        'Created foundation for digital agriculture platforms'
      ],
      sources: ['Wired 2015', 'Wikipedia', 'ICT Research Reviews'],
      icon: CurrencyDollarIcon,
      color: 'green'
    },
    {
      id: 2,
      country: 'Senegal',
      flag: '🇸🇳',
      title: 'mRNA Vaccine Manufacturing Hub',
      investment: '$40M',
      impact: 'First African mRNA vaccine facility',
      description: 'Partnership with Institut Pasteur de Dakar developing mRNA vaccines for Rift Valley fever and other diseases.',
      details: [
        'Dr. Marie-Angélique Sène leading mRNA vaccine development',
        '$1.8M grant for WHO pre-qualification maintenance',
        'Local production of measles and rubella vaccines',
        'Training healthcare workers through MADIBA program'
      ],
      sources: ['AP News 2023', 'Gates Foundation', 'Institut Pasteur'],
      icon: HeartIcon,
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'from-green-500 to-emerald-500 bg-green-50 text-green-800 border-green-200',
      blue: 'from-blue-500 to-cyan-500 bg-blue-50 text-blue-800 border-blue-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16" style={{backgroundImage: 'url(/images/health-impact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay'}}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gates Foundation Impact Stories
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Real investments, measurable outcomes: How strategic funding is transforming 
            healthcare, agriculture, and economic opportunity across Africa
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {impactStories.map((story) => {
            const colorClasses = getColorClasses(story.color);
            const [gradientClass, bgClass, , borderClass] = colorClasses.split(' ');
            
            return (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${gradientClass}`}></div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientClass}`}>
                      <story.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{story.flag}</span>
                        <h3 className="text-xl font-bold text-gray-900">{story.country}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-700">{story.title}</h4>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`${bgClass} ${borderClass} border rounded-lg p-3 text-center`}>
                      <div className="text-lg font-bold">{story.investment}</div>
                      <div className="text-sm opacity-75">Investment</div>
                    </div>
                    <div className={`${bgClass} ${borderClass} border rounded-lg p-3 text-center`}>
                      <div className="text-sm font-bold">{story.impact}</div>
                      <div className="text-xs opacity-75">Key Impact</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{story.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {story.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradientClass} mt-2 flex-shrink-0`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Sources: </span>
                      {story.sources.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImpactStoriesPage;