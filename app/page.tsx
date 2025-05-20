'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRobot, faSun, faMoon, faCloud, faSnowflake, faLeaf, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import solarLunar from 'solarlunar';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const secondPageRef = useRef<HTMLDivElement>(null);
  const [showCultureText, setShowCultureText] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [lunarDate, setLunarDate] = useState('');
  const [solarTerm, setSolarTerm] = useState({ name: '', icon: faSun });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    const sliderTimer = setTimeout(() => {
      const slider = document.querySelector('.slick-slider');
      if (slider) {
        // @ts-ignore
        slider.slick?.refresh();
      }
    }, 100);

    // 监听滚动事件来触发文字动画
    const handleScroll = () => {
      if (secondPageRef.current) {
        const rect = secondPageRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setShowCultureText(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      clearTimeout(sliderTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // 更新农历日期
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const lunar = solarLunar.solar2lunar(year, month, day);
    setLunarDate(`农历${lunar.monthCn}${lunar.dayCn}`);

    // 简单的节气判断逻辑（这里可以根据实际需求完善）
    const season = Math.floor((month % 12) / 3);
    const seasonIcons = [faSnowflake, faLeaf, faSun, faUmbrella];
    setSolarTerm({
      name: getSeasonName(season),
      icon: seasonIcons[season]
    });
  }, [currentDate]);

  const getSeasonName = (season: number): string => {
    const seasons = ['冬季', '春季', '夏季', '秋季'];
    return seasons[season];
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    waitForAnimate: false,
    initialSlide: 0,
    useCSS: true,
    dotsClass: 'slick-dots custom-dots',
    customPaging: function(i: number) {
      return (
        <div className="w-9 h-9 mx-20 relative group">
          <div className="relative overflow-hidden">
            <Image
              src="/images/carousel.png"
              alt={`Slide ${i + 1}`}
              width={36}
              height={36}
              className={`
                transition-all duration-300 ease-in-out
                group-hover:scale-125
                group-hover:brightness-110
                motion-safe:group-hover:animate-pulse
              `}
            />
            <div className="absolute inset-0 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const navItems = [
    { name: '首页', href: '/' },
    { name: '民族文化', href: '/culture' },
    { name: '智慧传承', href: '/heritage' },
    { name: '语言学习', href: '/language' },
  ];

  const carouselImages = [
    '/images/slide1.jpg',
    '/images/slide2.jpg',
    '/images/slide3.jpg',
    '/images/slide4.jpg',
  ];

  if (!mounted) {
    return null;
  }

  const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      {/* 第一页：轮播图部分 */}
      <div className="h-screen relative">
        <Slider {...settings} className="h-full [&_.custom-dots]:bottom-24 [&_.custom-dots]:z-50">
          {carouselImages.map((image, index) => (
            <div key={index} className="relative h-screen">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                quality={100}
                className="object-cover"
                sizes="100vw"
              />
              {/* 添加渐变遮罩，使顶部导航更容易阅读 */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 to-transparent"></div>
              {/* 添加底部渐变遮罩，使导航指示器更容易看见 */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 第二页：民族风情 */}
      <div ref={secondPageRef} className="h-screen relative">
        <Image
          src="/images/page2.jpg"
          alt="民族风情背景"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="/culture"
            className={`text-9xl font-normal text-white transition-all duration-1000 transform 
              ${showCultureText 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
              }
              hover:scale-110 hover:text-[#F5F5DC] font-['KaiTi']`}
          >
            民族风情
          </Link>
        </div>
      </div>

      {/* 第三页：文化遗产 */}
      <div className="h-screen relative">
        <Image
          src="/images/page2.jpg"
          alt="文化遗产背景"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center pt-32">
          {/* 标题部分 */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-8xl font-normal text-white font-['KaiTi']">
              文化遗产
            </h2>
            <div className="flex flex-col gap-2 text-white/90">
              <span className="text-2xl border border-white/60 px-3 py-1 rounded-full">国家级代表</span>
              <span className="text-2xl border border-white/60 px-3 py-1 rounded-full">市级代表</span>
            </div>
          </div>

          {/* 遗产项目部分 - 不规则网格布局 */}
          <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 花竹帽编织 */}
            <Link href="/heritage/bamboo-hat" className="group transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <h3 className="text-4xl text-white mb-2 font-['KaiTi']">花竹帽编织</h3>
                <p className="text-white/80 text-lg">国家级非物质文化遗产</p>
              </div>
            </Link>

            {/* 木面具雕刻 */}
            <Link href="/heritage/wooden-mask" className="group transform hover:scale-105 transition-all duration-300 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <h3 className="text-4xl text-white mb-2 font-['KaiTi']">木面具雕刻</h3>
                <p className="text-white/80 text-lg">市级非物质文化遗产</p>
              </div>
            </Link>

            {/* 肥套 */}
            <Link href="/heritage/feitao" className="group transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <h3 className="text-4xl text-white mb-2 font-['KaiTi']">肥套</h3>
                <p className="text-white/80 text-lg">国家级非物质文化遗产</p>
              </div>
            </Link>

            {/* 傩舞 */}
            <Link href="/heritage/nuo-dance" className="group transform hover:scale-105 transition-all duration-300 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <h3 className="text-4xl text-white mb-2 font-['KaiTi']">傩舞</h3>
                <p className="text-white/80 text-lg">国家级非物质文化遗产</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* 第四页：环江毛南族自治县非物质文化遗产项目 */}
      <div className="h-screen relative">
        <Image
          src="/images/page2.jpg"
          alt="环江毛南族自治县非物质文化遗产项目背景"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-6xl font-normal text-white font-['KaiTi'] mb-8">
            环江毛南族自治县非物质文化遗产项目
          </h2>
          <p className="text-2xl text-white/90 mb-12">共计18项</p>
          <Link 
            href="/heritage/wisdom" 
            className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white text-xl rounded-full 
                     backdrop-blur-sm transition-all duration-300 transform hover:scale-105
                     border border-white/30"
          >
            查看更多
          </Link>
        </div>
      </div>
    </main>
  );
} 