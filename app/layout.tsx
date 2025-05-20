import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '毛南智语 - 传承毛南族智慧',
  description: '探索毛南族文化，传承民族智慧，学习毛南语言',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: XingKai;
              src: url(/fonts/XingKai.ttf) format('truetype');
              font-weight: normal;
              font-style: normal;
            }
          `
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 