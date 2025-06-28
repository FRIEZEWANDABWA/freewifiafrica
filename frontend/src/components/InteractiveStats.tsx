import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StatItem {
  name: string;
  value: number;
  displayValue: string;
  icon: string;
  trend: number;
  color: string;
}

interface InteractiveStatsProps {
  className?: string;
}

const InteractiveStats: React.FC<InteractiveStatsProps> = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  const stats: StatItem[] = [
    { 
      name: 'Active Hubs', 
      value: 147, 
      displayValue: '147', 
      icon: '📡', 
      trend: 12,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Daily Users', 
      value: 24000, 
      displayValue: '24K+', 
      icon: '👥', 
      trend: 8,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Content Views', 
      value: 2300000, 
      displayValue: '2.3M', 
      icon: '📚', 
      trend: 15,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Uptime', 
      value: 98.7, 
      displayValue: '98.7%', 
      icon: '⚡', 
      trend: 2,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Animate numbers on mount
  useEffect(() => {
    const timers = stats.map((_, index) => {
      const currentStat = stats[index];
      return setTimeout(() => {
        let start = 0;
        const end = currentStat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = start;
            return newValues;
          });
        }, 16);
      }, index * 200);
    });

    return () => timers.forEach(clearTimeout);
  }, [stats]);

  // Auto-rotate active stat
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  const formatValue = (value: number, index: number) => {
    const stat = stats[index];
    if (index === 1) return `${Math.floor(value / 1000)}K+`;
    if (index === 2) return `${(value / 1000000).toFixed(1)}M`;
    if (index === 3) return `${value.toFixed(1)}%`;
    return Math.floor(value).toString();
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          className={`relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
            activeIndex === index 
              ? 'ring-2 ring-blue-500 shadow-2xl scale-105' 
              : 'shadow-lg hover:shadow-xl'
          }`}
          style={{
            background: activeIndex === index 
              ? `linear-gradient(135deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})` 
              : 'white'
          }}
          onClick={() => setActiveIndex(index)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-4 -top-4 text-6xl">
              {stat.icon}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className={`text-2xl ${activeIndex === index ? 'grayscale-0' : ''}`}>
                {stat.icon}
              </div>
              <div className={`flex items-center text-sm font-medium ${
                activeIndex === index ? 'text-white/80' : 'text-green-600'
              }`}>
                <span>↗</span>
                <span className="ml-1">+{stat.trend}%</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className={`text-3xl font-bold ${
                activeIndex === index ? 'text-white' : 'text-gray-900'
              }`}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={animatedValues[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formatValue(animatedValues[index], index)}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className={`text-sm font-medium ${
                activeIndex === index ? 'text-white/80' : 'text-gray-600'
              }`}>
                {stat.name}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className={`h-1 rounded-full ${
                activeIndex === index ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                <motion.div
                  className={`h-full rounded-full ${
                    activeIndex === index ? 'bg-white' : 'bg-blue-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(animatedValues[index] / stat.value) * 100}%` }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* Pulse Effect for Active Card */}
          {activeIndex === index && (
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})`
              }}
              animate={{
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default InteractiveStats;