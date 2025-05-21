import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';
import { FaChalkboardTeacher, FaSearchDollar, FaServer } from 'react-icons/fa';

const services = [
  {
    title: '生成AI研修サービス',
    description: 'プロンプト技術からツール活用まで、実践的な研修で社内のAIリテラシーを向上させます。',
    features: [
      'プロンプトエンジニアリング基礎講座',
      '業務特化型AIツール活用研修',
      'ユースケース別ワークショップ',
      'AIリーダー育成プログラム',
    ],
    icon: <FaChalkboardTeacher className="w-8 h-8 text-primary-500" />,
    iconBgColor: 'bg-primary-100',
  },
  {
    title: '生成AI導入診断支援サービス',
    description: '現状の業務を可視化し、AI導入による効率化のポテンシャルとROIを算出します。',
    features: [
      '業務プロセス可視化・分析',
      'AI自動化ポテンシャル診断',
      'ROI試算レポート作成',
      '最適ツール選定アドバイス',
    ],
    icon: <FaSearchDollar className="w-8 h-8 text-secondary-500" />,
    iconBgColor: 'bg-secondary-100',
  },
  {
    title: 'オンプレミス導入支援サービス',
    description: 'セキュリティを確保しながら、自社データを活用したAI環境を構築します。',
    features: [
      'オンプレミスLLM環境構築',
      'セキュリティ対策実装',
      'カスタムAPI開発',
      '社内データ連携サポート',
    ],
    icon: <FaServer className="w-8 h-8 text-accent-500" />,
    iconBgColor: 'bg-accent-100',
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="section bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-200">サービス内容</h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            生成AI活用に関するあらゆるニーズに対応。研修からオンプレミス導入まで、トータルにサポートします。
              </p>
            </motion.div>
        </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;