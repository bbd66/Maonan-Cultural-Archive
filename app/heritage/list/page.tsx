'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function HeritageList() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      {/* 背景图片 */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/page2.jpg"
          alt="背景"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* 内容区域 - 调整位置到导航栏下方 */}
      <div className="pt-24 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full shadow-xl">
          <h1 className="text-4xl font-['KaiTi'] text-center mb-8">
            环江毛南族自治县非物质文化遗产项目一览表
          </h1>
          
          {/* 项目列表 */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">花竹帽编织技艺</h3>
              <p className="text-gray-600">国家级非物质文化遗产</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">毛南族肥套</h3>
              <p className="text-gray-600">国家级非物质文化遗产</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">毛南族傩舞</h3>
              <p className="text-gray-600">国家级非物质文化遗产</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">毛南族木面具雕刻技艺</h3>
              <p className="text-gray-600">市级非物质文化遗产</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">毛南族传统服饰制作技艺</h3>
              <p className="text-gray-600">市级非物质文化遗产</p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-semibold mb-2">毛南族传统饮食制作技艺</h3>
              <p className="text-gray-600">市级非物质文化遗产</p>
            </div>
          </div>

          {/* 返回按钮和智慧传承链接 */}
          <div className="mt-8 text-center space-y-4">
            <Link 
              href="/heritage/wisdom"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-full 
                       hover:bg-green-700 transition-colors duration-300"
            >
              智慧传承
            </Link>
            <div>
              <Link 
                href="/"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full 
                         hover:bg-blue-700 transition-colors duration-300"
              >
                返回首页
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 