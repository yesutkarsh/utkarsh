"use client";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { Provider } from "react-redux";
import store from "@/utils/store";
const inter = Inter({ subsets: ["latin"] });
import { usePathname } from 'next/navigation';
export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Nav Bar will not be available in these routes
  const hideNavbarRoutes = ['/lms'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);

  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          {!shouldHideNavbar &&<NavBar />}
          {children}
        </Provider>
      </body>
    </html>
  );
}
