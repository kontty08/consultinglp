import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: '生成AI導入にはどのくらいの期間が必要ですか？',
    answer: '導入の規模や目的によって異なりますが、小規模な導入であれば1〜2ヶ月、全社的な導入の場合は3〜6ヶ月程度を目安にしています。詳細は無料相談にてご案内いたします。',
  },
  {
    question: '社内の機密情報を扱う場合でも安全ですか？',
    answer: 'オンプレミス導入を選択いただくことで、社内の機密情報を外部に送信せずに生成AIを活用できます。また、データの取り扱いポリシーやセキュリティ対策も含めたコンサルティングを提供しています。',
  },
  {
    question: '導入コストはどのくらいかかりますか？',
    answer: '研修サービスは一回あたり30万円〜、診断支援サービスは50万円〜、オンプレミス導入は規模に応じて100万円〜となります。具体的な見積もりは無料相談後にご提案いたします。',
  },
  {
    question: '研修はオンラインでも受けられますか？',
    answer: 'はい、対面とオンラインの両方に対応しております。オンライン研修の場合も、インタラクティブなワークショップ形式で実施し、効果的な学習体験を提供します。',
  },
  {
    question: '小規模な会社でも導入できますか？',
    answer: 'もちろん可能です。当社では、企業規模に関わらず最適なAI活用プランをご提案しています。特に小規模企業向けには、初期投資を抑えた段階的な導入プランをご用意しています。',
  },
  {
    question: '既存の業務システムと連携することはできますか？',
    answer: 'はい、可能です。オンプレミス導入の場合、APIを通じて既存システムとの連携を実現します。具体的な連携方法については、個別にご相談ください。',
  },
];

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="section bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-primary-500">よくある質問</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            生成AI導入に関してよく寄せられるご質問にお答えします。
            より詳しい内容については、お気軽に無料相談をご利用ください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 rounded-xl shadow-card p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;