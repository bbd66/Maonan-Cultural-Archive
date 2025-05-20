'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function AIChat() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'ai', content: string }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // 添加用户消息
    setChatHistory(prev => [...prev, { type: 'user', content: message }]);
    
    // TODO: 实现AI回复功能
    // 模拟AI回复
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        type: 'ai', 
        content: '这是一个模拟的AI回复。实际功能正在开发中...' 
      }]);
    }, 1000);

    setMessage('');
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
            毛南族文化智能问答
          </h1>
          
          {/* 聊天历史记录 */}
          <div className="h-[500px] overflow-y-auto mb-6 space-y-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* 输入框 */}
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="请输入您的问题..."
              className="flex-1 px-6 py-4 text-lg rounded-full border-2 border-gray-300 
                       focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-blue-600 text-white rounded-full 
                       hover:bg-blue-700 transition-colors duration-300"
            >
              发送
            </button>
          </form>
        </div>
      </div>
    </main>
  );
} 