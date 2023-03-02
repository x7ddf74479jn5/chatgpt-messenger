"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export const Login = () => {
  return (
    <div className="bg-brand h-screen flex flex-col items-center justify-center text-center">
      <Image src="/images/63d01548c5b3156b13a40e1f_ChatGPT-Feature-1200x900.png" width={300} height={300} alt="logo" />
      <button onClick={() => signIn("google")} className="text-white font-bold text-3xl animate-pulse">
        ログインしてChatGPTを使う
      </button>
    </div>
  );
};
