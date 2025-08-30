'use client';
import './posts.css';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';

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
        <title>Post | รับยิงแอด สายเทา ยิงแอดfacebookสายเทา ยิงแอดGoogleสายเทา</title>
        <meta name="title" content="www.myads.dev | รับจ้างยิงแอดทำโฆษณาออนไลน์ Google, Facebook Ads" />
        <meta name="description" content="www.myads.dev รับจ้างยิงแอดทำโฆษณาออนไลน์รับทำโฆษณา Facebook Adsรับทำโฆษณา Googleทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท" />
        
        <meta property="og:title" content={post.title}/>
        <meta property="og:description" content={post.content}/>
        <meta property="og:image" content="https://www.myads.dev/logo.png"/>
        <meta property="og:url" content="https://www.myads.dev"/>
        <meta property="og:type" content="website"/>

        <meta name="robots" content="index, follow"/>
        <link rel="shortcut icon" href="https://www.myads.dev/favicon.ico" type="image/x-icon"/>
        <link rel="canonical" href="https://www.myads.dev/Postpages/" />
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
