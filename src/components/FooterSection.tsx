import React from 'react';
import { Link } from 'react-scroll';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-t from-white via-gray-50 to-gray-100 dark:from-black dark:via-neutral-900 dark:to-neutral-800 text-gray-700 dark:text-gray-200 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">株式会社tale</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              生成AI導入・活用のトータルサポートを提供する企業です。
              研修・診断・オンプレミス導入まで、お客様のビジネスに最適な生成AI活用をご提案します。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  to="challenges"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
                >
                  課題
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
                >
                  サービス
                </Link>
              </li>
              <li>
                <Link
                  to="why-choose-us"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
                >
                  選ばれる理由
                </Link>
              </li>
              <li>
                <Link
                  to="process"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
                >
                  導入の流れ
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
                >
                  よくある質問
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">お問い合わせ</h4>
            <p className="mb-2 text-gray-600 dark:text-gray-300">〒123-4567</p>
            <p className="mb-2 text-gray-600 dark:text-gray-300">東京都渋谷区〇〇町1-2-3</p>
            <p className="mb-4 text-gray-600 dark:text-gray-300">〇〇ビル8F</p>
            <p className="mb-2 text-gray-600 dark:text-gray-300">TEL: 03-1234-5678</p>
            <p className="text-gray-600 dark:text-gray-300">Email: info@tale-ai.co.jp</p>
            <a 
              href="#" 
              className="block mt-4 text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-white transition-colors"
            >
              プライバシーポリシー
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">&copy; {new Date().getFullYear()} 株式会社tale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;