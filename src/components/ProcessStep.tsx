import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="w-16 h-16 rounded-full bg-primary-500 flex items-center justify-center text-white text-xl font-bold mb-4">
        {number}
      </div>
      <h4 className="text-lg font-semibold text-primary-600 mb-2">{title}</h4>
      <p className="text-center text-gray-600 max-w-xs">{description}</p>
    </motion.div>
  );
};

export default ProcessStep;