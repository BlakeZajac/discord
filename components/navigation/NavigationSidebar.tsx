import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/common/ModeToggle";
import NavigationAction from "@/components/navigation/NavigationAction";
import NavigationItem from "@/components/navigation/NavigationItem";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

export const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  // Find all servers the user is a part of
  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  return (
    <div className="flex flex-col items-center h-full space-y-4 text-primary w-full dark:bg-[#1e1f22] py-3">
      <NavigationAction />

      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />

      <ScrollArea className="flex-1 w-full">
        {servers.map((server) => (
          <div key={server.id} className="mb-4">
            <NavigationItem
              id={server.id}
              name={server.name}
              imageUrl={server.imageUrl}
            />
          </div>
        ))}
      </ScrollArea>

      <div className="pb-3 mt-auto flex flex-col items-center gap-y-4">
        <ModeToggle />

        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
};