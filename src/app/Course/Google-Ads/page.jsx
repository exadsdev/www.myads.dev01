"use client"; 

import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Courses() {

   useEffect(() => {
      const schemaData = {
        "@context": "https://schema.org/",
    "@type": "Product",
    "name": "myad-dev.com:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์",
    "image": [
      "https://myad-dev.com/img/รับทำโฆษณาสายเทา.webp",
      "https://myad-dev.com/img/about.webp"
    ],
    "description": "myad-dev.com:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์: โฆษณา Facebook และ Google สายเทา",
    "brand": {
      "@type": "Brand",
      "name": "คอร์สเรียนโฆษณา"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://myad-dev.com/Course",
      "priceCurrency": "THB",
      "price": "9900",
      "priceValidUntil": "2025-02-18",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "myad-dev",
        "url": "https://myad-dev.com",
        "logo": "https://myad-dev.com/img/logo.png"
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
      <title>myad-dev.com:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์ </title>
<meta property="og:title" content="myad-dev.com:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์"/>
<meta property="og:description" content="myad-dev.com:คอร์สเรียนโฆษณา | บริการคอร์สเรียนทำการตลาดออนไลน์: โฆษณา Facebook และ Google สายเทา"/>
<meta property="og:image" content="https://myad-dev.com/logo.png"/>
<meta property="og:url" content="https://myad-dev.com/Course"/>
<meta name="robots" content="index, follow"/>
<meta property="og:type" content="website"/>
<link rel="shortcut icon" href="https://myad-dev.com/favicon.ico" type="image/x-icon"/> 

<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://myad-dev.com/Course" />
      </>

      <div className='container'>
        <div className="cassimg text-center">
          <h1>คอร์สเรียนสายเทา</h1>
          <Image src="/img/cass.webp" width={1200} height={600} loading="lazy" className='imgfb' alt="คอร์สเรียนทำการตลาดออนไลน์" />
        </div>

        <br /><br />

        <div className="d-flex justify-content-around">
          <p href="#cass">
            <a className='btn btn-outline-primary' href='/' >ไปหน้าHome</a>
          </p>

          <p href="#cass">
            <a className='btn btn-outline-primary' href='/Course/' >คอร์สเรียนสายเทา</a>
          </p>
        </div>

      

        <section id="cass">  
          <div className="cassitem">


            <div className="itemcass">   
              <h4>🟢 คอร์สเรียน Google สายเทา ราคาสุดคุ้มค่า เพียง 18,500 บาท</h4>  
              <ul>
              <li> 👉สร้างและวอร์มอีเมลก่อนใช้งาน</li>
<li>👉เริ่มจากการทำ Landing page </li>
<li>👉สอนจดโดเมน ซื้อ hosting </li>
<li> 👉ทำเว็บไซต์ง่ายๆให้องค์ประกอบครบถ้วน</li>
<li>👉โดยทางเรามี template ใช้งานแบบ ฟรีๆ </li>
<li>👉วิธีการสร้างบัญชีแบบไม่สร้างแคมเปญ </li>
<li> 👉วิธีการเขียนโฆษณา ทั้งหมด 15 บรรทัดและคำอธิบาย 4 บรรทัด</li>
<li>👉วิธีการตรวจสอบแคมเปญวิธีการตรวจสอบ keyword </li>
<li>👉วิธีการปล่อยให้ทำเป็นทำงาน </li>
<li>👉วิธีการสลับ keyword เป็นเทา แบบไม่ถูกแบน </li>
<li> 👉วิธีการเปลี่ยนหน้าเว็บเป็นหน้าเทาแบบไม่ถูกแบน</li>
<li>👉วิธีการเลี้ยงบัญชีให้อยู่ได้นานๆ</li>
<li> 👉วิธีการทำให้โฆษณามีราคาถูก</li>
<li> 👉สอนเทคนิคต่างๆทั้งหมด</li>
<li>  👉คอร์สเรียน ทำโฆษณา Google สายเทา</li>
<li> 👉สอนตัวต่อตัว ขึ้นงานจริงๆให้ได้ดูกันแบบ สดๆเลย โดยใช้รีโมทpc teamviewer,meet,Zoom </li>
<li> <strong>ราคาสุดคุ้มค่า เพียง18500 บาท</strong> </li>

                
                


              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
