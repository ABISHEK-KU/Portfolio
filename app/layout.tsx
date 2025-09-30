import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abishek k Portfolio",
  description:
    "Software Engineer with 2.7 + years of experience in full-stack and desktop application development. Skilled in building scalable web platforms and performant desktop applications using React, Vue Electron, Node.js, MongoDb and MySQL. Experienced in translating UI/UX designs into functional interfaces, working with real-time data (sockets/APIs), and ensuring efficient system integrations across tech stacks.",
  generator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const css = `
html {
  font-family:${GeistSans.style.fontFamily};
  --font-sans:${GeistSans.variable};
  --font-mono:${GeistMono.variable};
}
  `;

  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
