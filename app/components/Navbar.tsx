'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRobot, faSun, faMoon, faCloud, faSnowflake, faLeaf, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import solarLunar from 'solarlunar';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
  currentPage?: string;
  darkMode?: boolean;
}

export default function Navbar({ currentPage = '', darkMode = true }: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [lunarDate, setLunarDate] = useState('');
  const [solarTerm, setSolarTerm] = useState({ name: '', icon: faSun });
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    setCurrentDate(new Date());
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!mounted || !currentDate) return;
    
    try {
      // 更新农历日期
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const lunar = solarLunar.solar2lunar(year, month, day);
      setLunarDate(`农历${lunar.monthCn}${lunar.dayCn}`);

      // 简单的节气判断逻辑
      const season = Math.floor((month % 12) / 3);
      const seasonIcons = [faSnowflake, faLeaf, faSun, faUmbrella];
      setSolarTerm({
        name: getSeasonName(season),
        icon: seasonIcons[season]
      });
    } catch (error) {
      console.error('Error updating date information:', error);
      setLunarDate('');
      setSolarTerm({ name: '', icon: faSun });
    }
  }, [currentDate, mounted]);

  const getSeasonName = (season: number): string => {
    const seasons = ['冬季', '春季', '夏季', '秋季'];
    return seasons[season];
  };

  const navItems = [
    { name: '首页', href: '/' },
    { name: '民族风情', href: '/culture' },
    { name: '数字人影像馆', href: '/heritage/wisdom' },
    { name: '语言学习', href: '/language' },
  ];

  const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  const handleNavigation = (path: string) => {
    if (path === '/' && pathname === '/') {
      window.location.href = '/';
    } else if (path === pathname) {
      window.location.href = path;
    } else {
      router.push(path);
    }
  };

  // 基础渲染结构
  const renderNavContent = (isLoading: boolean) => {
    const textColorClass = darkMode ? 'text-white' : 'text-black';
    const hoverColorClass = darkMode ? 'hover:text-gray-300' : 'hover:text-gray-600';

    return (
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-[2px]">
        <div className="w-full px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center pl-4">
              <div className="flex-shrink-0">
                {isLoading ? (
                  <div className="h-28 w-28 bg-gray-200 animate-pulse rounded-lg" />
                ) : (
                  <Image
                    src="/images/logo.png"
                    alt="环江毛南文化网 Logo"
                    width={120}
                    height={120}
                    className="h-28 w-auto"
                  />
                )}
              </div>
              <div className={`ml-4 text-2xl font-black ${textColorClass}`}>
                环江毛南文化网
              </div>
            </Link>

            <div className="flex items-center space-x-8 pr-4">
              <Link href="/search" className={`${textColorClass} ${hoverColorClass}`}>
                {isLoading ? (
                  <div className="h-6 w-6 bg-gray-200 animate-pulse rounded-full" />
                ) : (
                  <FontAwesomeIcon icon={faSearch} className="h-6 w-6" />
                )}
              </Link>
              <Link href="/ai-chat" className={`${textColorClass} ${hoverColorClass}`}>
                {isLoading ? (
                  <div className="h-6 w-6 bg-gray-200 animate-pulse rounded-full" />
                ) : (
                  <FontAwesomeIcon icon={faRobot} className="h-6 w-6" />
                )}
              </Link>
              <div className={`${textColorClass} text-base font-black`}>
                {isLoading ? (
                  '加载中...'
                ) : currentDate ? (
                  `${currentDate.toLocaleDateString()} ${weekDays[currentDate.getDay()]} ${lunarDate} ${solarTerm.name}`
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-1">
            <div className="flex items-center space-x-24">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-6 py-3 text-2xl font-black transition-all ${textColorClass}`}
                  >
                    {item.name}
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-red-800 transform scale-x-0 transition-transform duration-300 origin-left
                      ${(item.href === pathname || (item.href === '/' && pathname === '/')) ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return renderNavContent(!mounted || !currentDate);
} 