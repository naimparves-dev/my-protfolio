import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Md Naim Parves — Full-Stack Developer (MERN & Next.js) & Key Account Manager',
  description:
    'Portfolio of Md Naim Parves — Full-Stack Developer (MERN & Next.js), Key Account Manager at Smart-Lab Global, and Digital Marketing & Technical SEO Strategist.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#05080f] text-slate-100 antialiased">{children}</body>
    </html>
  );
}
