import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProcessStep from './ProcessStep';

const steps = [
  {
    title: '無料相談',
    description: '現状の課題やニーズをヒアリングし、最適なサービスプランを提案します。',
  },
  {
    title: '提案・見積',
    description: '具体的なサービス内容と費用をご提示します。お客様のご要望に合わせて調整可能です。',
  },
  {
    title: '契約・キックオフ',
    description: 'サービス開始に向けた準備を進め、スケジュールや実施内容を確定します。',
  },
  {
    title: 'サービス実施',
    description: '研修や診断、オンプレミス導入など、契約内容に基づいたサービスを実施します。',
  },
  {
    title: '効果測定・改善',
    description: 'サービス実施後の効果を測定し、必要に応じて改善案を提案します。',
  },
  {
    title: '継続サポート',
    description: '導入後も継続的にサポートし、生成AIの効果的な活用を支援します。',
  },
];

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="section bg-gray-50 dark:bg-neutral-950">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">導入までの流れ</h2>
          <p className="mb-12 text-gray-700 dark:text-gray-200 text-center">
            生成AI導入から活用までの各ステップを、専門家がしっかりとサポートします。
          </p>
        </motion.div>

        {/* Desktop Process Diagram */}
        <div className="hidden md:flex justify-between items-center mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-primary-600 text-white dark:bg-primary-300 dark:text-neutral-900 z-10">
                  {idx + 1}
                </div>
                {idx !== steps.length - 1 && (
                  <div className="absolute top-1/2 left-full w-full h-1 bg-gray-300 dark:bg-neutral-700 -z-10"></div>
                )}
              </div>
              <h3 className="mt-6 mb-2 text-base font-semibold text-primary-700 dark:text-primary-200 text-center">{step.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 text-center max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Process List */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold bg-primary-600 text-white dark:bg-primary-300 dark:text-neutral-900 mr-4">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-base font-semibold text-primary-700 dark:text-primary-200">{step.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-200 max-w-xs">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;