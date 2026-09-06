import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Benjamin Yazdi | Software, Mathematics & Research',
  description:
    'Computer science student, software engineer, and creator of 350+ mathematics videos. Explore Benjamin Yazdi’s projects, research, and teaching.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
