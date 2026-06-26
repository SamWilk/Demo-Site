import "./globals.css";

export const metadata = {
  title: "Burress Home Services | Jacksonville Handyman and Contractor Help",
  description:
    "Burress Home Services provides handyman repairs, renovations, installation, painting, tile, decks, flooring, gutters, and home service help in Jacksonville, FL.",
  icons: {
    icon: "/site-icon.svg",
  },
  keywords: [
    "Burress Home Services",
    "Jacksonville handyman",
    "Jacksonville home repair",
    "Jacksonville general contractor",
    "St Augustine handyman",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
