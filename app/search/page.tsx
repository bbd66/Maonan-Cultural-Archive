'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 实现搜索功能
    console.log('搜索:', searchQuery);
  };

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
      <div className="pt-32 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-4xl w-full shadow-xl">
          <h1 className="text-4xl font-['KaiTi'] text-center mb-8">
            毛南族文化搜索
          </h1>
          
          {/* 搜索框 */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="请输入关键词搜索..."
                className="flex-1 px-6 py-4 text-lg rounded-full border-2 border-gray-300 
                         focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white rounded-full 
                         hover:bg-blue-700 transition-colors duration-300"
              >
                搜索
              </button>
            </div>
          </form>

          {/* 搜索结果区域 */}
          <div className="space-y-4">
            {searchResults.length > 0 ? (
              searchResults.map((result, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow">
                  {/* 搜索结果内容 */}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                请输入关键词开始搜索
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 