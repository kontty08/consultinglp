import React from 'react';
import { BackgroundPaths } from './BackgroundPaths';

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* 背景アニメーション */}
      <div className="absolute inset-0 w-full h-full">
        <BackgroundPaths title="生成AIで未来の業務を変える" />
      </div>
      
      {/* コンテンツ */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
      </div>
    </section>
  );
};

export default HeroSection;