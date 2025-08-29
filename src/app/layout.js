'use client'; 

// import { GoogleAnalytics } from '@next/third-parties/google';
// import { GoogleTagManager } from '@next/third-parties/google';

import Header from './components/headers';
import Footer from './components/Footer';

import "./style.css"; 
import "./nav.css"; 
import "./form.css";  
import "./globals.css";  

import "bootstrap/dist/css/bootstrap.min.css";

import Script from "next/script";
import { SessionProvider } from "next-auth/react";

const geistSans = {
  variable: "--font-geist-sans",  
};

const geistMono = {
  variable: "--font-geist-mono",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM" />
        <meta property="og:type" content="website"/>
        <link rel="shortcut icon" href="https://www.myad-dev.com/favicon.ico" type="image/x-icon"/> 
         
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>
      </head>
    
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider> 
          <Header />
          {children}
        </SessionProvider>

        <Footer />

        {/* <GoogleTagManager gtmId={`${process.env.GOOGLE_TAG_MANAGER}`} />
        <GoogleAnalytics gaId={`${process.env.GOOGLE_A_TICS}`} /> */}

      </body>

      <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></Script>
    </html>
  );
}
