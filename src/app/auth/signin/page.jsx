// app/auth/signin/page.js
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();
  const router = useRouter();

  // ถ้าผู้ใช้ล็อกอินแล้วให้ไปที่หน้าอื่น
  if (session) {
    window.location.href = "/"; // หรือหน้าอื่นๆ ตามต้องการ
    return null; // ป้องกันไม่ให้หน้าปัจจุบันแสดงในกรณีที่ session มี
  }

  return (
    <div className="d-flex justify-content-center align-items-center  bg-light">
      <div className="card shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body text-center">
          <img src="/google.svg" width={70} alt="Google logo" className="mb-3" />
          <h3 className="card-title mb-4">Sign in with Google</h3>
          <p className="text-muted mb-4">
            Please sign in using your Google account to continue.
          </p>
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="btn btn-primary btn-lg w-100"
          >
            <img src="/google.svg" width={20} alt="Google logo" className="me-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
