import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BiPackage, BiTargetLock, BiGroup, BiTrendingUp } from 'react-icons/bi';

const WhyChooseUsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const reasons = [
  {
      icon: BiPackage,
    title: 'ワンストップ提供',
    description: '研修からオンプレミス導入まで、生成AI活用の全フェーズをカバーする一貫したサービスを提供します。',
  },
  {
      icon: BiTargetLock,
    title: '実践的提案',
    description: '豊富な導入事例に基づき、お客様の業務・業界特性に合わせた実践的なAI活用方法を提案します。',
  },
  {
      icon: BiGroup,
    title: '小規模対応',
    description: '中小企業や特定部署単位での小規模な導入にも対応。コストを抑えながら効果的なAI活用を実現します。',
  },
  {
      icon: BiTrendingUp,
    title: '段階的導入',
    description: '初期投資を抑えた段階的な導入プランで、リスクを最小限に抑えながらAI活用を進めることができます。',
  },
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="why-choose-us" className="section bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className="container-custom">
        <div className="text-center mb-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-200">選ばれる理由</h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            お客様の業務課題やビジネス目標に合わせた、最適な生成AI活用をご提案します。
              </p>
            </motion.div>
        </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
            <motion.div
              key={reason.title}
              variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                <div className="flex flex-col items-center bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-card hover:shadow-card-hover transition-shadow h-full">
                  <div className="bg-primary-50 dark:bg-neutral-700 p-4 rounded-full flex-shrink-0 mb-4">
                    <Icon className="w-12 h-12 text-primary-500 dark:text-primary-200" />
              </div>
                  <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-primary-600 dark:text-primary-200">{reason.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{reason.description}</p>
                  </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;