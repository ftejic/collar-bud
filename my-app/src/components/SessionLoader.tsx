"use client"
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";

function SessionLoader({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex space-x-5 w-screen h-screen items-center justify-center">
        <Loader2 className="animate-spin" />
        Please wait
      </div>
    );
  }

  return <>{children}</>;
}

export default SessionLoader;
