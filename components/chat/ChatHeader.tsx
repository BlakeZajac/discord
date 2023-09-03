import { Hash } from "lucide-react";

import { MobileToggle } from "@/components/common/MobileToggle";
import { UserAvatar } from "@/components/common/UserAvatar";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} />

      {type === "channel" && (
        <Hash className="w-4 h-4 text-zinc-500 dark:text-zinc-400 mr-1" />
      )}

      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="!h-8 !w-8 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
    </div>
  );
};
