'use client';
import './posts.css';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const PostDetailPage = () => {
  const { title } = useParams(); // รับค่า title จาก URL
  const [post, setPost] = useState(null);

  const urlimg = "https://cart.accfb-ads.com/public/"; // path รูป/วิดีโอจาก API

  useEffect(() => {
    if (!title) return;

    fetch(`https://cart.accfb-ads.com/get/title/${title}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error('โหลดข้อมูลผิดพลาด:', err));
  }, [title]);

  if (!post) {
    return (
      <div className="container mt-5">
        <p>ไม่พบข้อมูล</p>
      </div>
    );
  }

  return (
    <>
     <>
        <meta name="google-site-verification" content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>post|รับจ้างยิงแอดทำโฆษณา สายเทา Google, Facebook Ads</title>
        
        <meta name="title" content="www.myads.dev | รับจ้างยิงแอดทำโฆษณาออนไลน์Google, Facebook Ads" />
        <meta name="description" content="www.myads.dev รับจ้างยิงแอดทำโฆษณาออนไลน์รับทำโฆษณา Facebook Adsรับทำโฆษณา Googleทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท" />
        <meta property="og:title" content="รับจ้างยิงแอดทำโฆษณาออนไลน์Google, Facebook Ads"/>
        <meta property="og:description" content="รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณาGoogleทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท"/>
        <meta property="og:image" content="https://www.myads.dev/logo.png"/>
        <meta property="og:url" content="https://www.myads.dev"/>
        <meta property="og:type" content="website"/>

        <meta name="robots" content="index, follow"/>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="canonical" href="https://www.myads.dev" />
        <meta name="keywords" content="การยิงแอด, Google, สายเทา, คอร์สเรียนGoogleAdsสายเทา, GoogleAdsสายเทา, สายเทา, บริการคอร์สเรียน, ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,สอนยิงแอด,สอนยิงแอด Conversion,สอนยิงแอดสายเทา,ยิงแอดสายเทา,ยิงโฆษณาสายเทา,รับทำ seo สายเทา,รับทำ seo สายดำ,แอดสายเทา,รับยิงแอดสายเทา,กูเกิ้ลแอดสายเทา,รับทํา google ads,สายเทา seo สายเทา,ตลาดสีเทา,แอดสีเทา,adsสีเทา,กราฟฟิกสายเทา,ยิงแอดเทา,รับยิงแอดfacebookสายเทา,รูปยิงแอดสายเทา,รับจ้างสายเทา,รับโฆษณาสายเทา ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,ads,รับยิงแอด,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา" />
      </>
    
    <div className="container mx-auto">
      <div className="card mx-auto mt-5" key={post.id}>
        <div className="title h3 text-center">{post.title}</div>

        {post.name ? (
          <iframe
            width="560"
            height="315"
            className="vdoimg"
            src={`https://www.youtube.com/embed/${post.name}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={`${urlimg}${post.imgvdo}`}
            className="vdoimg"
            alt="item"
          />
        )}

        <div className="card-body">
          <h3>{post.title}</h3>
          <p className="card-text">{post.content}</p>
        </div>
      </div>
      <br />
       <a href="/Postpages/" className="btn btn-info"> ⬅️ ดูทั้งหมด</a>
    </div>

    </>
  );
};

export default PostDetailPage;
