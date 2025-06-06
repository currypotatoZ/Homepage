import './globals.css';

export const metadata = {
  title: 'I MISS YOU',
  description: 'I MISS YOU Homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}