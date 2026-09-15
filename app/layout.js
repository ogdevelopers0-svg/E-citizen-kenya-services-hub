import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "E-CITIZEN Kenya Services Hub",
  description: "Independent service discovery hub linking users to official eCitizen services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  <Script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4573252775101941"
    crossOrigin="anonymous"
  />
  {children}
</body>
    </html>
  );
}
