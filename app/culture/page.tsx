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
    { id: 'xiangjiang-wuxiang', title: '环江五香' },
    { id: 'huazhimao', title: '花竹帽传说' },
    { id: 'tonggu', title: '铜鼓' },
    { id: 'shike-jiyi', title: '石刻技艺' },
    { id: 'maonan-xi', title: '毛南戏' },
    { id: 'ziran-fengguang', title: '自然风光' },
    { id: 'feitao', title: '肥套' },
    { id: 'xisu', title: '习俗' },
    { id: 'fushi', title: '服饰' },
    { id: 'wenhua-zongkuo', title: '文化总括' },
    { id: 'mingcheng-youlai', title: '名称由来' },
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
              <div id="xiangjiang-wuxiang">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">环江五香</h3>
                <p className="text-base font-['KaiTi']">
                  环江五香是毛南族待客珍味：香猪皮薄肉嫩、香而不腻；香牛（下南菜牛）肉质鲜甜；香鸭紧实无脂；香糯一家煮饭十家香；香菇肥厚鲜香。依托喀斯特生态孕育，是国家地理标志美味。五香既是餐桌盛宴，也是毛南族农耕智慧的结晶，一口尝尽环江山水的灵秀与烟火。
                </p>
              </div>

              <div id="huazhimao">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">花竹帽传说</h3>
                <p className="text-base font-['KaiTi']">
                  花竹帽毛南语称 “顶卡花”，是族宝与定情信物。传说青年为救金凤凰获金竹，织就精美花帽。雨中他将帽子赠予姑娘，二人一见倾心、以帽为媒。从此花竹帽成为爱情象征，匠人以金竹墨竹精编，纹路细密如绣。它不仅是雨具，更是毛南族善良与浪漫的化身，编织着代代相传的美好情缘。
                </p>
              </div>

              <div id="tonggu">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">铜鼓</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族铜鼓是礼器重器，鼓声深沉悠远，象征权力与吉祥。多用于祭祀、节庆、婚丧大典，是族群凝聚力的象征。铜鼓纹饰精美，铸有太阳、蛙纹等图腾，藏着自然崇拜与祖先记忆。节庆时鼓乐齐鸣，舞步随鼓点起落，传递着毛南人对天地的敬畏与对生活的热忱，是千年不熄的文化之声。
                </p>
              </div>

              <div id="shike-jiyi">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">石刻技艺</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族石刻是国家级非遗。匠人以青石为材，雕刻三界公、麒麟、花鸟等图腾，刀法刚劲、寓意吉祥。多用于墓碑、宗祠、神龛，线条古朴传神，融道教信仰与民俗美学。石刻历风雨而不朽，记录着家族谱系与民族信仰，是刻在石头上的毛南史诗。
                </p>
              </div>

              <div id="maonan-xi">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">毛南戏</h3>
                <p className="text-base font-['KaiTi']">
                  毛南戏由肥套仪式发展而来，融山歌、舞蹈、说唱于一体。剧目多取自民间传说与生活故事，如《莫一大王》《鲁班仙》。行当简单，以鼓、锣、唢呐伴奏，对白质朴、载歌载舞。贴近乡土、通俗易懂，是毛南人抒发情感、记录历史的舞台，也是深山里绽放的民俗艺术之花。
                </p>
              </div>

              <div id="ziran-fengguang">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">自然风光</h3>
                <p className="text-base font-['KaiTi']">
                  环江毛南山乡坐拥世界级喀斯特地貌，九万大山层峦叠翠，牛角寨瀑布群飞珠溅玉，大小环江蜿蜒流淌。峰林耸立、溶洞奇绝，原始生态保存完好，绿意漫山野。这里是世界自然遗产地，山为骨、水为魂，云雾缭绕如仙境，滋养着毛南族世代繁衍生息，是藏在桂西北的秘境山水。
                </p>
              </div>

              <div id="feitao">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">肥套</h3>
                <p className="text-base font-['KaiTi']">
                  “肥套” 是毛南族语言，汉语意为 “还愿”，是民族古老的祭祀仪式，更是代代相传的文化瑰宝。相传孤儿仲定向万岁娘娘求子得福却忘还愿，遭惩戒后诚心悔过，以酒肉祭神终得圆满，这便是肥套的由来。仪式融合歌舞、乐戏，承载着毛南人对天地自然的敬畏，寄托着民族生生不息、风调雨顺、五谷丰登的美好祈愿。
                </p>
              </div>

              <div id="xisu">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">习俗</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族除了常见节日外，还有独具特色的正月十五 “放鸟飞”。传说心灵手巧的小鸟姑娘为帮未婚夫过关，用菖蒲竹叶编织百鸟，吹气使其化为真鸟，捡回错撒的糯谷种，最终如愿成婚。后人便沿袭此俗，在元宵编百鸟、放鸟飞，既纪念这段浪漫佳话，也寄托着毛南族人对美好生活、丰收吉祥的期盼，充满独特的民族浪漫。
                </p>
              </div>

              <div id="fushi">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">服饰</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族的美，内敛而温柔，藏在服饰的一针一线里。女装灵动秀丽，交领礼仪端庄，百褶裙轻盈飘逸；男装简约干练，对襟短衫适配劳作，低调纹样尽显底蕴。银簪、头巾、绣艺与长裙相映，既显民族韵味，又含少女灵动。每件服饰承载着毛南族的审美与记忆，代代织就着不变的文化传承。
                </p>
              </div>

              <div id="wenhua-zongkuo">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">文化总括</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族傩文化历史悠久，傩面是傩舞、傩戏不可或缺的核心道具，环江傩面广场便生动展现了这份文化精髓。精致的花竹帽以金竹精编、红油浸染，曾是浪漫定情信物，如今已是国家级非遗。蓝底红纹的民族服饰刺绣精美、珠缀灵动，尽显民族灵气。古朴傩面、精巧竹帽、雅致纹样，都是毛南族的文化密码，值得我们共同守护传承。
                </p>
              </div>

              <div id="mingcheng-youlai">
                <h3 className="text-xl font-semibold mb-2 font-['SimHei']">名称由来</h3>
                <p className="text-base font-['KaiTi']">
                  毛南族的族名藏着千年历史。其名最早见于宋代，记作 “毛滩”，清代称 “毛南”，民国时正式使用 “毛南” 二字，最初均为地名。随着族人形成共同地域、语言与习俗，便自称为毛南人。新中国成立后，正式定名毛南族，先民自古聚居广西环江，由当地土著发展而来。一个族名，便是一段厚重的民族发展史。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 