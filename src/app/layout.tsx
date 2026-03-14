// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "S4HEL | Global Business Solutions",
  description: "Empowering entrepreneurs to scale globally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}