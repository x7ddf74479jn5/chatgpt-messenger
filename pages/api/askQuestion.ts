import admin from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";
import { adminDb } from "../../firebaseAdmin";
import { query } from "../../lib/queryApi";

type Data = {
  answer: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "プロンプトを入力してください！" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "有効なチャットIDがありません!" });
    return;
  }

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPTから回答を得られませんでした！",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGpt",
      avatar: "/images/ChatGPT-Icon-Logo-PNG.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
