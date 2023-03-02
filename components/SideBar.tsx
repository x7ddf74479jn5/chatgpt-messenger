"use client";

import { useSession, signOut } from "next-auth/react";

import { NewChat } from "./NewChat";

export const SideBar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col p-2 h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div></div>
        </div>
      </div>

      {session && (
        <button onClick={() => signOut()}>
          <img
            src={session?.user?.image!}
            alt="Profile pic"
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          />
        </button>
      )}
    </div>
  );
};
