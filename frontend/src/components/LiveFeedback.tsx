import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeedbackItem {
  id: string;
  user: string;
  location: string;
  message: string;
  rating: number;
  timestamp: Date;
  avatar: string;
}

interface LiveFeedbackProps {
  className?: string;
}

const LiveFeedback: React.FC<LiveFeedbackProps> = ({ className = "" }) => {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [newFeedback, setNewFeedback] = useState({ message: '', rating: 5 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock real-time feedback data
  const mockFeedbacks: FeedbackItem[] = [
    {
      id: '1',
      user: 'Amara K.',
      location: 'Nairobi, Kenya',
      message: 'The Wi-Fi speed is amazing! My kids can now attend online classes without interruption.',
      rating: 5,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      avatar: '👩🏿‍💼'
    },
    {
      id: '2',
      user: 'Joseph M.',
      location: 'Lagos, Nigeria',
      message: 'Access to health information has been life-changing for our community.',
      rating: 5,
      timestamp: new Date(Date.now() - 12 * 60 * 1000),
      avatar: '👨🏿‍⚕️'
    },
    {
      id: '3',
      user: 'Fatima S.',
      location: 'Accra, Ghana',
      message: 'The educational content helped me start my small business. Thank you!',
      rating: 4,
      timestamp: new Date(Date.now() - 18 * 60 * 1000),
      avatar: '👩🏿‍💻'
    }
  ];

  // Simulate real-time feedback updates
  useEffect(() => {
    setFeedbacks(mockFeedbacks);
    
    const interval = setInterval(() => {
      // Simulate new feedback every 30 seconds
      if (Math.random() > 0.7) {
        const newFeedbackItem: FeedbackItem = {
          id: Date.now().toString(),
          user: ['Sarah T.', 'David O.', 'Grace N.', 'Michael A.'][Math.floor(Math.random() * 4)],
          location: ['Kampala, Uganda', 'Kigali, Rwanda', 'Dar es Salaam, Tanzania'][Math.floor(Math.random() * 3)],
          message: [
            'The connection is stable and fast!',
            'Great educational resources available.',
            'This hub has transformed our community.',
            'Excellent service and support.'
          ][Math.floor(Math.random() * 4)],
          rating: Math.floor(Math.random() * 2) + 4, // 4 or 5 stars
          timestamp: new Date(),
          avatar: ['👨🏿‍🎓', '👩🏿‍🏫', '👨🏿‍💼', '👩🏿‍🔬'][Math.floor(Math.random() * 4)]
        };
        
        setFeedbacks(prev => [newFeedbackItem, ...prev.slice(0, 4)]);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedback.message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const feedbackItem: FeedbackItem = {
      id: Date.now().toString(),
      user: 'You',
      location: 'Your Location',
      message: newFeedback.message,
      rating: newFeedback.rating,
      timestamp: new Date(),
      avatar: '👤'
    };

    setFeedbacks(prev => [feedbackItem, ...prev.slice(0, 4)]);
    setNewFeedback({ message: '', rating: 5 });
    setIsSubmitting(false);
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - timestamp.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ⭐
      </span>
    ));
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Live Community Feedback</h3>
        <div className="flex items-center text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
          <span className="text-sm font-medium">Live</span>
        </div>
      </div>

      {/* Feedback Form */}
      <form onSubmit={handleSubmitFeedback} className="mb-6 p-4 bg-gray-50 rounded-xl">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Share your experience
          </label>
          <textarea
            value={newFeedback.message}
            onChange={(e) => setNewFeedback(prev => ({ ...prev, message: e.target.value }))}
            placeholder="How has the Connected Access Hub impacted your community?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={3}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Rating:</span>
            {Array.from({ length: 5 }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setNewFeedback(prev => ({ ...prev, rating: i + 1 }))}
                className={`text-lg ${i < newFeedback.rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
              >
                ⭐
              </button>
            ))}
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting || !newFeedback.message.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </motion.button>
        </div>
      </form>

      {/* Feedback List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        <AnimatePresence>
          {feedbacks.map((feedback) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{feedback.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{feedback.user}</h4>
                      <p className="text-sm text-gray-500">{feedback.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {renderStars(feedback.rating)}
                      </div>
                      <p className="text-xs text-gray-500">{formatTimeAgo(feedback.timestamp)}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{feedback.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">4.8</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">1,247</div>
            <div className="text-sm text-gray-600">Total Reviews</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">94%</div>
            <div className="text-sm text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveFeedback;