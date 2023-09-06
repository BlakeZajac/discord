"use client";

import { Hash } from "lucide-react";

interface ChatWelcomeProps {
  type: string;
  name: "channel" | "conversation";
}

export const ChatWelcome = ({ type, name }: ChatWelcomeProps) => {
  return (
    <div className="space-y-1 px-4">
      {type === "channel" && (
        <div className="mb-4 h-16 w-16 rounded-full bg-zinc-500 dark:bg-zinc-700 flex items-center justify-center">
          <Hash className="h-8 w-8 text-white" />
        </div>
      )}

      <p className="text-xl font-bold">
        {type === "channel" ? "Welcome to #" : ""}
        {name}
      </p>

      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
        {type === "channel"
          ? `This is the start of the #${name} channel.`
          : `This is the start of your conversation with ${name}`}
      </p>
    </div>
  );
};
