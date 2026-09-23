import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "E-CITIZEN Kenya Services Hub",
  description: "Independent service discovery hub linking users to official eCitizen services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta
    name="google-adsense-account"
    content="ca-pub-4573252775101941"
  />

  <meta
    name="juicyads-site-verification"
    content="09431bcfcf145b4c745accc269748707"
  />

  <Script
    async
    strategy="beforeInteractive"
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4573252775101941"
    crossOrigin="anonymous"
  />
</head>      <body>{children}</body>
    </html>
  );
}
