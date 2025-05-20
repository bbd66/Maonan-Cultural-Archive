'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

interface HeritageItem {
  name: string;
  level: 'national' | 'city';
  image: string;
  description: string;
  link: string;
}

export default function Heritage() {
  const heritageItems: HeritageItem[] = [
    {
      name: '花竹帽编织',
      level: 'national',
      image: '/images/heritage/bamboo-hat.jpg',
      description: '毛南族传统手工艺，以精湛的编织技艺闻名，是民族文化的重要象征。',
      link: '/heritage/bamboo-hat'
    },
    {
      name: '木面具雕刻',
      level: 'city',
      image: '/images/heritage/wooden-mask.jpg',
      description: '展现毛南族独特的艺术审美和精湛的木雕工艺。',
      link: '/heritage/wooden-mask'
    },
    {
      name: '肥套',
      level: 'national',
      image: '/images/heritage/feitao.jpg',
      description: '毛南族传统服饰工艺，体现了独特的民族审美和文化内涵。',
      link: '/heritage/feitao'
    },
    {
      name: '傩舞',
      level: 'national',
      image: '/images/heritage/nuo-dance.jpg',
      description: '融合了宗教祭祀和艺术表演的传统舞蹈，具有深厚的文化底蕴。',
      link: '/heritage/nuo-dance'
    }
  ];

  return (
    <main className="min-h-screen relative">
      {/* 背景图 */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/page2.jpg"
          alt="文化遗产背景"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* 导航栏 */}
      <div className="relative z-20">
        <Navbar currentPage="heritage" darkMode={true} />
      </div>

      {/* 主标题区域 */}
      <div className="relative z-10 pt-32 pb-8 text-center">
        <div className="flex items-center justify-center space-x-8">
          <Image
            src="/images/carousel1.png"
            alt="装饰"
            width={48}
            height={48}
            className="opacity-90 rotate-180"
          />
          <h1 className="text-4xl font-bold text-white font-['SimHei']">
            文化遗产
          </h1>
          <Image
            src="/images/carousel1.png"
            alt="装饰"
            width={48}
            height={48}
            className="opacity-90"
          />
        </div>
      </div>

      {/* 遗产展示网格 */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {heritageItems.map((item, index) => (
            <Link href={item.link} key={item.name}>
              <div className="relative group overflow-hidden rounded-lg transform transition-all duration-300 hover:scale-105">
                {/* 背景图片 */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* 内容 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold font-['SimHei']">{item.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      item.level === 'national' 
                        ? 'bg-red-600/80' 
                        : 'bg-blue-600/80'
                    }`}>
                      {item.level === 'national' ? '国家级' : '市级'}
                    </div>
                  </div>
                  <p className="text-gray-200 font-['KaiTi'] text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 