'use client';

import React from 'react';

interface VideoPlayerProps {
  title: string;
  src: string;
}

export default function VideoPlayer({ title, src }: VideoPlayerProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
          <video
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </div>
  );
}