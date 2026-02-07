import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return <div className="flex flex-col items-center justify-center gap-4 padding-4">
    <h1 className="font-semibold text-4xl">Welcome back! 🙌</h1>
    <p className="text-xl">Inicia sesión para continuar👍</p>
  
    <SignIn  />
  </div>;
}