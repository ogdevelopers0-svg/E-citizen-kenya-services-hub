import "./globals.css";

export const metadata = {
  title: "E-CITIZEN Kenya Services Hub",
  description: "Independent service discovery hub linking users to official eCitizen services."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
