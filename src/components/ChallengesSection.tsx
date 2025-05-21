import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FcProcess, FcDatabase, FcBullish, FcPrivacy } from 'react-icons/fc';

const challenges = [
  {
    title: '経営層向け課題',
    items: [
      { icon: <FcBullish className="text-4xl" />, text: '生成AIの業務活用による投資対効果（ROI）が不明確' },
      { icon: <FcProcess className="text-4xl" />, text: '全社的な生成AI導入推進方法がわからない' },
    ]
  },
  {
    title: '導入推進部署向け課題',
    items: [
      { icon: <FcDatabase className="text-4xl" />, text: '業務データの取り扱いや情報流出のリスク懸念がある' },
      { icon: <FcPrivacy className="text-4xl" />, text: '適切な生成AIツールの選定・導入方法が不明確' },
    ]
  }
];

const ChallengesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="challenges" className="section bg-gray-50 dark:bg-neutral-950">
      <div className="container-custom">
        <motion.div
          className="container"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-200">生成AI導入の課題</h2>
            <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
              生成AIを導入する際に多くの企業が直面する課題を解決します。
              私たちのサービスは、経営層の不安から現場の実装まで、包括的なサポートを提供します。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                variants={containerVariants}
                className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-6 text-center text-primary-600 dark:text-primary-200">
                  {challenge.title}
                </h3>
                <div className="space-y-6">
                  {challenge.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center gap-4 p-4 border border-gray-100 dark:border-neutral-700 rounded-lg"
                    >
                      <div className="flex-shrink-0">{item.icon}</div>
                      <p className="text-gray-700 dark:text-gray-200">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChallengesSection;