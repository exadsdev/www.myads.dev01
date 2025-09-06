import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ผลงานที่ผ่านมา | myads.dev",
  description:
    "รวมผลงานการทำโฆษณาออนไลน์ Google Ads และ Facebook Ads ที่ myads.dev ดูแลให้ลูกค้า",
  alternates: { canonical: "https://www.myads.dev/portfolio" },
};

const portfolioItems = [
  {
    title: "โฆษณา Google Search",
    img: "/portfolio/google-search.webp",
    desc: "เพิ่มยอดขายด้วยการค้นหาบน Google",
  },
  {
    title: "โฆษณา Google Display",
    img: "/portfolio/google-display.webp",
    desc: "สร้างการรับรู้แบรนด์ด้วยแบนเนอร์",
  },
  {
    title: "โฆษณา Facebook",
    img: "/portfolio/facebook-ads.webp",
    desc: "เจาะกลุ่มเป้าหมายผ่านโซเชียล",
  },
  {
    title: "โฆษณา Video YouTube",
    img: "/portfolio/youtube-ads.webp",
    desc: "โปรโมทด้วยวิดีโอที่ดึงดูด",
  },
  {
    title: "SEO Website",
    img: "/portfolio/seo.webp",
    desc: "ดันอันดับเว็บไซต์ให้ติดหน้าแรก",
  },
  {
    title: "Landing Page",
    img: "/portfolio/landing.webp",
    desc: "สร้างหน้า Landing Page เพื่อแคมเปญ",
  },
];

export default function PortfolioPage() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h1 className="h2 fw-bold">ผลงานที่ผ่านมา</h1>
        <p className="text-secondary">
          ตัวอย่างบางส่วนของการทำโฆษณาออนไลน์กับ myads.dev
        </p>
      </section>

      <section className="row g-4">
        {portfolioItems.map((item) => (
          <div className="col-12 col-md-6 col-lg-4" key={item.title}>
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="card-img-top"
                style={{ objectFit: "cover", height: 200 }}
              />
              <div className="card-body d-flex flex-column">
                <h2 className="h5">{item.title}</h2>
                <p className="text-muted">{item.desc}</p>
                <Link
                  href="/contact"
                  className="btn btn-outline-primary mt-auto rounded-pill"
                >
                  ติดต่อเพื่อเริ่มต้น
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
