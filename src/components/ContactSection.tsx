import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFilePdf, FaComments } from 'react-icons/fa';
import { BackgroundPaths } from './BackgroundPaths';

const ContactSection = () => {
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
    <section id="contact" className="section bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* 背景アニメーション */}
      <div className="absolute inset-0 z-0">
        <BackgroundPaths title="" flip={true}/>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
            <motion.div variants={itemVariants}>
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">まずは無料相談から</h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-100">
            生成AIの導入でお悩みのことがありましたら、まずはお気軽にご相談ください。
            ご要望に合わせて最適なプランをご提案いたします。
              </p>
            </motion.div>
        </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <a
              href="#"
              className="bg-white dark:bg-neutral-900 text-primary-700 dark:text-primary-300 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl h-full"
          >
            <FaComments className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">無料相談はこちら</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              お気軽にご相談ください。Zoomまたは対面での無料相談を承ります。
            </p>
            <span className="btn-primary mt-auto">
              無料相談を予約する
            </span>
            </a>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <a
              href="#"
              className="bg-white dark:bg-neutral-900 text-primary-700 dark:text-primary-300 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-all hover:shadow-xl h-full"
          >
            <FaFilePdf className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">資料請求はこちら</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              サービスの詳細資料をPDFでお送りします。導入事例も掲載しています。
            </p>
            <span className="btn-primary mt-auto">
              資料をダウンロードする
            </span>
            </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;