'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRobot } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Culture() {
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const router = useRouter();

  const sections = [
    { id: 'intro', title: '毛南族简介' },
    { id: 'production', title: '生产' },
    { id: 'architecture', title: '建筑' },
    { id: 'stone-carving', title: '石刻' },
    { id: 'farming', title: '农耕' },
    { id: 'food', title: '饮食' },
    { id: 'clothing', title: '服饰' },
    { id: 'language', title: '语言' },
    { id: 'religion', title: '宗教' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* 全屏背景图 */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/page2.jpg"
          alt="背景"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* 导航栏暗色背景 */}
      <div className="fixed top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-[2px]" />

      {/* 导航栏 */}
      <div className="relative z-20">
        <Navbar currentPage="culture" darkMode={true} />
      </div>

      {/* 固定位置的功能按钮 */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4">
        {/* 智慧传承按钮 */}
        <button
          onClick={() => router.push('/heritage/wisdom')}
          className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all relative group"
        >
          <div className="relative overflow-hidden">
            <Image
              src="/images/carousel.png"
              alt="智慧传承"
              width={24}
              height={24}
              className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:brightness-110 motion-safe:group-hover:animate-pulse"
            />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </button>

        {/* 目录按钮 */}
        <button
          onClick={() => setShowTableOfContents(!showTableOfContents)}
          className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all relative group"
        >
          <div className="relative overflow-hidden">
            <Image
              src="/images/carousel.png"
              alt="目录"
              width={24}
              height={24}
              className={`
                transition-all duration-300 ease-in-out
                ${showTableOfContents ? 'rotate-180 scale-110' : 'rotate-0'}
                group-hover:scale-125
                group-hover:brightness-110
                motion-safe:group-hover:animate-pulse
              `}
            />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </button>

        {/* 搜索按钮 */}
        <button 
          onClick={() => router.push('/search')}
          className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
        >
          <FontAwesomeIcon icon={faSearch} className="h-6 w-6" />
        </button>

        {/* AI对话按钮 */}
        <button
          onClick={() => router.push('/ai-chat')}
          className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
        >
          <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />
        </button>
      </div>

      {/* 目录弹出框 */}
      {showTableOfContents && (
        <div className="fixed right-24 top-1/2 transform -translate-y-1/2 z-20 bg-white/95 p-4 rounded-lg shadow-xl">
          <h3 className="text-lg font-bold mb-2">目录</h3>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    scrollToSection(section.id);
                    setShowTableOfContents(false);
                  }}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 内容区域 */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-16 relative z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="relative">
            <Image
              src="/images/page2.jpg"
              alt="民族风情背景"
              width={1920}
              height={125}
              className="w-full h-[125px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center space-x-8">
              <Image
                src="/images/carousel1.png"
                alt="装饰"
                width={48}
                height={48}
                className="opacity-90 rotate-180"
              />
              <h1 className="text-4xl font-bold text-white font-['SimHei']">
                毛南族文化简介
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

          <div className="px-4 md:px-8 py-8">
            <div className="prose max-w-none text-gray-900 leading-relaxed space-y-4">
              <div id="intro">
                <p className="text-base font-['KaiTi']">
                  毛南族，现有7.1万多人。毛南族有自己的语言，属汉藏语系壮侗语族，通用汉语；主要聚居在中国云贵高原的茅南山、九万大山、凤凰山和大石山一带，而广西环江县的上南、中南、下南一带山区更是被称为"三南"，素有"毛南之乡"之称。
                </p>
              </div>

              <div id="production">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">生产</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族主要从事农业生产，兼营各种副业。毛南族饲养的菜牛远销上海、香港等地，颇有声誉；他们编织的竹器，工艺精湛，著名的花竹帽，精致美观而又实用，既是毛南族的手工艺品，又是姑娘们珍爱的装饰品。
                </p>
              </div>

              <div id="architecture">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">建筑</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族人的居室为干栏式样，干栏内外山墙全是以木、石为构架，结实稳当。干栏一般为两层，上面住人，下面圈畜，门外有晒台，采光适宜而又可以防潮，这是中国南方民族民居的杰作。干栏的楼柱是石柱，楼内的台阶是石条，房基和山墙也大部分是由石块制成，连门槛、晒台、牛栏、桌子、凳子、水缸、水盆等也都是石料垒砌或雕凿的，这些石制用品上雕刻的花鸟鱼虫更是美不胜收。
                </p>
              </div>

              <div id="stone-carving">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">石刻</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族石墓上的雕刻远近闻名，如今存留在凤凰山上的古墓群就是毛南石雕的典型代表。历来重视精雕细刻的毛南族石匠，在冰冷的石头上把花鸟鱼虫、人物、用具都赋予了生命。毛南族石匠的创作既不描线也不起稿，全凭手中的刀凿根据脑中的构思在石上即兴雕刻，创作出一个个栩栩如生的形象。
                </p>
              </div>

              <div id="farming">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">农耕</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族居住的地方重峦叠嶂，耕地不足，他们在石山岩缝中把每一寸土地都开发出来，垒石保土，可以说惜土如金。毛南族人的耕作极其精细，水田往往要一遍又一遍地翻耕，把田中的全部土疙瘩捣碎再栽秧，精细耕作，所以他们的田地粮食产量都很高。不仅如此，毛南族人民很早就在山地的种植中采用密植、套种、间种等方法，为岭南西部的农耕积累了丰富的经验。
                </p>
              </div>

              <div id="food">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">饮食</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族人的主食为大米、玉米，蔬菜有豌豆、白菜、南瓜、豆角、萝卜等。在节日的宴席上，豆腐是重要的副食品。毛南族人民十分好客，客人到家都待为上宾，他们热情地把家里腌好的酸肉、酸螺丝、酸菜都端出来款待客人，而且还要请客人品尝最有民族风味的"毛南饭"。
                </p>
              </div>

              <div id="clothing">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">服饰</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族男女都喜欢穿蓝色或青色大襟衫和对襟衫，妇女穿十分漂亮的镶有两道花边的右开襟上衣，裤子较宽并滚着花边，妇女们还喜欢把头发盘成发髻，喜欢佩带首饰，胸前有银、玉等装饰品，尤其喜欢戴花竹做的帽子。
                </p>
              </div>

              <div id="language">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">语言</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族有本族的语言，但没有本族的文字，他们历来学习和使用汉语。毛南语属于汉藏语系壮侗语族侗水语支，在语音、语调、语序以及基本词汇方面与同一语族的壮语、侗语、仫佬语和水语有许多共同点和相似之处，尤其与水语更为接近。由于毛南人民长期与壮、汉族人民密切交往，所以许多人都能操壮语和汉语（柳州官语），毛南族还借用汉字的音义记录毛南语，创成"土俗字"，用来记录本民族的民歌和祭祀用语。
                </p>
              </div>

              <div id="religion">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">宗教</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族是个信奉多神的民族，他们所信仰的原始教名目很多，其中主要是动植物崇拜。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 