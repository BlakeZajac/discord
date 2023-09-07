"use client";

import { useSocket } from "@/components/providers/SocketProvider";
import { Badge } from "@/components/ui/badge";

interface SocketIndicatorProps {}

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="bg-yellow-600 text-white border-none">
        Polling every 1s
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-none">
      Live updates
    </Badge>
  );
};
