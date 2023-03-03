"use client";

import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { Message } from "./Message";

type Props = {
  chatId: string;
};
export const Chat = ({ chatId }: Props) => {
  const { data: session } = useSession();

  const [messages] = useCollection(
    session &&
      query(collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), orderBy("createdAt", "asc"))
  );

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white">下の入力欄にプロンプトを入力してみよう！</p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  );
};