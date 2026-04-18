'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import VideoPlayer from '../../components/VideoPlayer';

const videos = [
  {
    title: '花竹帽传说（一）',
    src: '/videos/花竹帽传说和发展.mp4',
  },
  {
    title: '花竹帽传说（二）',
    src: '/videos/花竹帽传说2.mp4',
  },
  {
    title: '环江五香',
    src: '/videos/环江五香.mp4',
  },
  {
    title: '毛南肥套',
    src: '/videos/毛南肥套.mp4',
  },
  {
    title: '毛南服饰',
    src: '/videos/毛南服饰.mp4',
  },
  {
    title: '毛南婚俗',
    src: '/videos/毛南婚俗.mp4',
  },
  {
    title: '毛南石刻',
    src: '/videos/毛南石刻.mp4',
  },
  {
    title: '毛南铜鼓',
    src: '/videos/毛南铜鼓.mp4',
  },
  {
    title: '毛南文化总括',
    src: '/videos/毛南文化总括.mp4',
  },
  {
    title: '毛南戏',
    src: '/videos/毛南戏.mp4',
  },
  {
    title: '毛南自然风光',
    src: '/videos/毛南自然风光.mp4',
  },
  {
    title: '毛南族名字由来',
    src: '/videos/毛南族名字由来.mp4',
  },
  {
    title: '毛南族习俗',
    src: '/videos/毛南族习俗.mp4',
  }
];

export default function HeritageWisdom() {
  return (
    <main className="min-h-screen relative">
      <Navbar />

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

      <div className="pt-32 min-h-screen flex items-center justify-center px-4 pb-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-7xl w-full shadow-xl">
          <h1 className="text-4xl font-['KaiTi'] text-center mb-4">数字人影像馆</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <VideoPlayer key={index} {...video} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 