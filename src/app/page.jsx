// app/page.jsx
import React from "react";
import Secsion from "./components/secsions";
import Footer from "./components/Footer";

export const metadata = {
  title: "www.myads.dev | รับจ้างยิงแอดทำโฆษณาออนไลน์ Google, Facebook Ads",
  description:
    "www.myads.dev รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท",
  keywords:
    "การยิงแอด, Google, สายเทา, คอร์สเรียนGoogleAdsสายเทา, GoogleAdsสายเทา, สายเทา, บริการคอร์สเรียน, ยิงads, facebook, สายเทา, โฆษณา, ยิงads facebook สายเทา, รับยิงads, รับยิงแอด สายเทา, facebook ads, google ads, google, ads, สอนยิงแอด, สอนยิงแอด Conversion, สอนยิงแอดสายเทา, ยิงแอดสายเทา, ยิงโฆษณาสายเทา, รับทำ seo สายเทา, รับทำ seo สายดำ, แอดสายเทา, รับยิงแอดสายเทา, กูเกิ้ลแอดสายเทา, รับทํา google ads, สายเทา seo สายเทา, ตลาดสีเทา, แอดสีเทา, adsสีเทา, กราฟฟิกสายเทา, ยิงแอดเทา, รับยิงแอดfacebookสายเทา, รูปยิงแอดสายเทา, รับจ้างสายเทา, รับโฆษณาสายเทา ยิงads, facebook, สายเทา, โฆษณา, ยิงads facebook สายเทา, รับยิงads, รับยิงแอด สายเทา, facebook ads, google ads, google, ads, รับยิงแอด, รับทำโฆษณา, รับโฆษณา, Facebook, การตลาด, โฆษณาออนไลน์, เว็บไซต์, ตลาดเป้าหมาย, โฆษณาบนโซเชียลมีเดีย, Google Ads, การโฆษณาบน Facebook, การโฆษณาออนไลน์บนสื่อต่าง ๆ, การตลาดออนไลน์, การโปรโมท, โฆษณา Facebook, การโฆษณา Google, การโฆษณาสินค้า, การโฆษณาโปรโมชั่น, วิธีการโฆษณา, ความสำเร็จในการตลาด, บริการโฆษณา, การตลาดออนไลน์บน Facebook, การโฆษณาบนเว็บ, การวางแผนโฆษณา",
  openGraph: {
    title: "รับจ้างยิงแอดทำโฆษณาออนไลน์ Google, Facebook Ads",
    description:
      "รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท",
    url: "https://www.myads.dev",
    siteName: "myads.dev",
    images: [
      {
        url: "https://www.myads.dev/images/adsdev.jpg",
        width: 2000,
        height: 1000,
        alt: "บริการรับยิงแอด Facebook และ Google Ads",
      },
    ],
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "รับจ้างยิงแอดทำโฆษณาออนไลน์ Google, Facebook Ads",
    description:
      "บริการยิงแอด Facebook, Google Ads สายเทา ครบวงจร พร้อมให้คำปรึกษา",
    images: ["https://www.myads.dev/images/adsdev.jpg"],
  },
};

export default function Homepage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "บริการรับทำโฆษณาสายเทา Facebook & Google Ads",
            image: [
              "https://www.myads.dev/images/adsdev.jpg",
              "https://www.myads.dev/images/about.jpg",
            ],
            description:
              "บริการรับทำโฆษณาสายเทาบนแพลตฟอร์ม Google และ Facebook Ads พร้อมวิเคราะห์ตลาด วางแผนโฆษณา และการตั้งค่าแคมเปญเพื่อเพิ่มยอดขายและการเข้าถึงกลุ่มเป้าหมายที่แม่นยำ",
            brand: {
              "@type": "Brand",
              name: "myad-dev",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.myads.dev/",
              priceCurrency: "THB",
              price: "9900",
              priceValidUntil: "2025-02-18",
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "myad-dev",
                url: "https://www.myads.dev",
                logo: "https://www.myads.dev/img/logo.png",
              },
            },
          }),
        }}
      />

    
      <meta
        name="google-site-verification"
        content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="shortcut icon"
        href="https://www.myads.dev/favicon.ico"
        type="image/x-icon"
      />
      <link rel="canonical" href="https://www.myads.dev" />

    
      <div className="line">
        <a href="https://lin.ee/dsADl2z">
          <img src="/img/line.png" alt="line" />
        </a>
      </div>

    
      <Secsion />

    
   
    </>
  );
}
