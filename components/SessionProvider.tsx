"use client";

import { type Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export const SessionProvider = ({ children }: Props) => {
  return <Provider>{children}</Provider>;
};
