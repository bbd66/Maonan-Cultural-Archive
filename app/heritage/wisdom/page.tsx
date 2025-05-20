'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function HeritageWisdom() {
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
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-6xl w-full shadow-xl">
          <h1 className="text-4xl font-['KaiTi'] text-center mb-4">
            环江毛南族自治县非物质文化遗产项目一览表
          </h1>
          <p className="text-gray-600 text-center mb-8">2022-02-15 09:05    来源：环江县文广体旅局</p>
          
          {/* 市级名录表格 */}
          <div className="mb-12">
            <h2 className="text-2xl font-['KaiTi'] mb-4">一、市级名录（共计10项）</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-center">编号</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">项目名称</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">类别</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">传承人</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">批次</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, name: '毛南族民歌', category: '传统音乐', inheritor: '覃高节', batch: '第三批' },
                    { id: 2, name: '毛南族傩舞', category: '传统舞蹈', inheritor: '', batch: '第三批' },
                    { id: 3, name: '毛南族花竹帽编织技艺', category: '传统美术', inheritor: '谭素娟、谭汝、覃敏', batch: '第一批' },
                    { id: 4, name: '民间铜鼓铸造', category: '传统技艺', inheritor: '韦启初、韦启参、韦总新、韦新蒋、韦永发', batch: '第二批' },
                    { id: 5, name: '毛南族石刻', category: '传统技艺', inheritor: '谭火炼、谭庆华', batch: '第二批' },
                    { id: 6, name: '毛南族木面具雕刻', category: '传统技艺', inheritor: '方文展、谭建新', batch: '第二批' },
                    { id: 7, name: '毛南族肥套', category: '民俗', inheritor: '谭三岗、谭益庆、谭献刚、谭义秋、谭高祖', batch: '第一批' },
                    { id: 8, name: '毛南族分龙节', category: '民俗', inheritor: '谭继明、谭雄志', batch: '第一批' },
                    { id: 9, name: '毛南族婚俗', category: '民俗', inheritor: '', batch: '第三批' },
                    { id: 10, name: '苗族芦笙节', category: '民俗', inheritor: '韦玉荣', batch: '第四批' }
                  ].map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.category}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.inheritor || '-'}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.batch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 自治区级名录表格 */}
          <div className="mb-12">
            <h2 className="text-2xl font-['KaiTi'] mb-4">二、自治区级名录（共计6项）</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-center">编号</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">项目名称</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">类别</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">传承人</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">批次</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, name: '毛南族花竹帽编织工艺', category: '传统美术', inheritor: '谭素娟、谭汝', batch: '第一批' },
                    { id: 2, name: '壮族铜鼓铸造技艺', category: '传统技艺', inheritor: '韦启初、韦启参', batch: '第三批' },
                    { id: 3, name: '毛南族石刻技艺', category: '传统技艺', inheritor: '谭火炼', batch: '第四批' },
                    { id: 4, name: '毛南族木雕技艺', category: '传统技艺', inheritor: '方文展', batch: '第四批' },
                    { id: 5, name: '毛南族肥套', category: '民俗', inheritor: '谭三岗、谭益庆、谭献刚', batch: '第一批' },
                    { id: 6, name: '毛南族分龙节', category: '民俗', inheritor: '谭继明', batch: '第三批' }
                  ].map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.category}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.inheritor}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.batch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 国家级名录表格 */}
          <div>
            <h2 className="text-2xl font-['KaiTi'] mb-4">三、国家级名录（共计2项）</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-center">编号</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">项目名称</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">类别</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">传承人</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">批次</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, name: '毛南族花竹帽编织技艺', category: '传统美术', inheritor: '谭素娟', batch: '第三批' },
                    { id: 2, name: '毛南族肥套', category: '民俗', inheritor: '谭三岗', batch: '第一批' }
                  ].map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.id}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.category}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.inheritor}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">{item.batch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 