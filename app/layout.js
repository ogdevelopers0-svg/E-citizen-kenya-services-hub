import "./globals.css";

export const metadata = {
  title: "E-CITIZEN Kenya Services Hub",
  description:
    "Independent service discovery hub linking users to official eCitizen services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="juicyads-site-verification"
          content="b91c92061b1df7c149ca5e3d2fcdc501"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
