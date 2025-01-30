export const metadata = {
  title: 'TechBazer Dashboard',
  icons: {
    icon: '/logo.ico', // Path ke favicon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
