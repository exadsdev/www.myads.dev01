"use client"; 
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Secsion from './components/secsions';

export default function Homepage() {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org/",
  "@type": "Product",
  "name": "บริการรับทำโฆษณาสายเทา Facebook & Google Ads",
  "image": [
    "https://www.myads.dev/img/รับทำโฆษณาสายเทา.webp",
    "https://www.myads.dev/img/about.webp"
  ],
  "description": "บริการรับทำโฆษณาสายเทาบนแพลตฟอร์ม Google และ Facebook Ads พร้อมวิเคราะห์ตลาด วางแผนโฆษณา และการตั้งค่าแคมเปญเพื่อเพิ่มยอดขายและการเข้าถึงกลุ่มเป้าหมายที่แม่นยำ",
  "brand": {
    "@type": "Brand",
    "name": "myad-dev"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.myads.dev/",
    "priceCurrency": "THB",
    "price": "9900",
    "priceValidUntil": "2025-02-18",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "myad-dev",
      "url": "https://www.myads.dev",
      "logo": "https://www.myads.dev/img/logo.png"
        }
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }, []);

  return (
    <>
     
      <>
        <meta name="google-site-verification" content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>www.myads.dev | รับจ้างยิงแอดทำโฆษณาออนไลน์Google, Facebook Ads</title>
        
        <meta name="title" content="www.myads.dev | รับจ้างยิงแอดทำโฆษณาออนไลน์Google, Facebook Ads" />
        <meta name="description" content="www.myads.dev รับจ้างยิงแอดทำโฆษณาออนไลน์รับทำโฆษณา Facebook Adsรับทำโฆษณา Googleทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท" />
        <meta property="og:title" content="รับจ้างยิงแอดทำโฆษณาออนไลน์Google, Facebook Ads"/>
        <meta property="og:description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณาGoogleทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท"/>
        <meta property="og:image" content="https://www.myads.dev/logo.png"/>
        <meta property="og:url" content="https://www.myads.dev"/>
        <meta property="og:type" content="website"/>

        <meta name="robots" content="index, follow"/>
        <link rel="shortcut icon" href="https://www.myads.dev/favicon.ico" type="image/x-icon"/>
        <link rel="canonical" href="https://www.myads.dev" />
        <meta name="keywords" content="การยิงแอด, Google, สายเทา, คอร์สเรียนGoogleAdsสายเทา, GoogleAdsสายเทา, สายเทา, บริการคอร์สเรียน, ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,สอนยิงแอด,สอนยิงแอด Conversion,สอนยิงแอดสายเทา,ยิงแอดสายเทา,ยิงโฆษณาสายเทา,รับทำ seo สายเทา,รับทำ seo สายดำ,แอดสายเทา,รับยิงแอดสายเทา,กูเกิ้ลแอดสายเทา,รับทํา google ads,สายเทา seo สายเทา,ตลาดสีเทา,แอดสีเทา,adsสีเทา,กราฟฟิกสายเทา,ยิงแอดเทา,รับยิงแอดfacebookสายเทา,รูปยิงแอดสายเทา,รับจ้างสายเทา,รับโฆษณาสายเทา ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,รับยิงแอด,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา" />
      </>
      
      <div className="line">  
        <a href="https://lin.ee/dsADl2z">
          <img src="/img/line.png" alt="line" />
        </a>
      </div>

      <Secsion/>


    

    
   
    </>
  );
}
