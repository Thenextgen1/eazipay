import Header from "../components/Dashboard/Header";
import SideBar from "../components/Dashboard/SideBar";
import { aeonik, madeMellow } from "../fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${aeonik.variable} ${madeMellow.variable} font-aeonik`}
      lang="en"
    >
      <body>
        <SideBar />
        <Header />
        {children}
      </body>
    </html>
  );
}
