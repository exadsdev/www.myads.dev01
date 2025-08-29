"use client";
import Image from "next/image";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const Toolfree = () => {
  const [modalIsOpenFb, setModalIsOpenFb] = useState(false);
  const [modalIsOpenGoogle, setModalIsOpenGoogle] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [downloadType, setDownloadType] = useState(null); // facebook | google

  const openModal = (type) => {
    setDownloadType(type);
    if (type === "facebook") setModalIsOpenFb(true);
    if (type === "google") setModalIsOpenGoogle(true);
    setTimeLeft(30);
  };

  const closeModal = () => {
    setModalIsOpenFb(false);
    setModalIsOpenGoogle(false);
    setDownloadType(null);
  };

  useEffect(() => {
    if (!modalIsOpenFb && !modalIsOpenGoogle) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [modalIsOpenFb, modalIsOpenGoogle]);

  useEffect(() => {
    if (timeLeft === 0 && downloadType) {
      if (downloadType === "facebook") {
        window.location.href =
          "https://apipost.www.myads.dev/facebook.zip";
      } else if (downloadType === "google") {
        window.location.href =
          "https://apipost.www.myads.dev/google.zip";
      }
      closeModal();
    }
  }, [timeLeft, downloadType]);

  return (
    <>
      <title>
        www.myads.dev:toolfree | ดาวน์โหลดเครื่องมือทำการตลาดฟรี Dowloads
        Facebook และ Google
      </title>
      <meta
        property="og:title"
        content="ดาวน์โหลดเครื่องมือทำการตลาดฟรี Dowloads Landing page Facebook และ Google"
      />
      <meta
        property="og:description"
        content="ดาวน์โหลดเครื่องมือทำการตลาดฟรี Dowloads Landing page Facebook และ Google"
      />
      <meta
        property="og:image"
        content="https://www.myads.dev/img/toolfree.jpg"
      />
      <meta property="og:url" content="https://www.myads.dev/toolfree" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <link
        rel="shortcut icon"
        href="https://www.myads.dev/favicon.ico"
        type="image/x-icon"
      />

      <link rel="canonical" href="https://www.myads.dev/toolfree" />

      {/* Facebook */}
      <div className="text-center">
        <h3>Dowloads Landing page Facebook</h3>
        <Image
          src="/img/fbd.webp"
          width={650}
          height={360}
          alt="ทำการตลาดฟรี"
          className="imgfb"
        />
      </div>

      <div className="text-center">
        <button
          type="button"
          className="mt-3"
          onClick={() => openModal("facebook")}
        >
          <Image
            src="/img/dl.webp"
            width={100}
            height={100}
            alt="ทำการตลาดฟรี"
          />
        </button>
      </div>

      <hr />
      <div className="cut"></div>

      {/* Google */}
      <div className="text-center">
        <h3>Dowloads Landing page Google</h3>
        <Image
          src="/img/google.jpg"
          width={650}
          height={360}
          alt="ทำการตลาดฟรี"
          className="imggg"
        />
      </div>

      <div className="text-center">
        <button
          type="button"
          className="mt-3"
          onClick={() => openModal("google")}
        >
          <Image
            src="/img/gg.gif"
            width={100}
            height={100}
            alt="ทำการตลาดฟรี"
          />
        </button>
      </div>

      {/* Modal */}
      {(modalIsOpenFb || modalIsOpenGoogle) && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">
                  หลังจาก 30 วินาทีจะดาวน์โหลดอัตโนมัติ
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <h2>กรุณารอ {timeLeft} วินาที</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toolfree;
