import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const viewport: Viewport = {
  themeColor: '#f8f7f4',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: '402.md: Payment infrastructure for the agentic web',
  description:
    'x402 is an open protocol for HTTP-native payments between AI agents and services. Micropayments, paywalls, and autonomous transactions.',
  openGraph: {
    title: '402.md',
    description: 'Payment infrastructure for the agentic web.',
    type: 'website',
    url: 'https://402.md',
    siteName: '402.md',
  },
  twitter: {
    card: 'summary',
    title: '402.md',
    description: 'Payment infrastructure for the agentic web.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={mono.variable}>{children}</body>
      <GoogleAnalytics gaId="G-FC4W41BMJ3" />
    </html>
  );
}
