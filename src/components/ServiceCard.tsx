import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  iconBgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon,
  iconBgColor,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-neutral-800 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
    >
      <div className={`${iconBgColor} p-4 flex justify-center`}>
        <div className="bg-white dark:bg-neutral-700 rounded-full p-4 inline-flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-primary-600 dark:text-primary-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary-500 dark:text-primary-300 mt-1 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
              <span className="text-gray-700 dark:text-gray-200">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;