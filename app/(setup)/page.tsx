import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";

import { InitialModal } from "@/components/modals/InitialModal";

const SetupPage = async () => {
  const profile = await initialProfile();

  // Search through all servers and attempt to find the first server the profile is a member of
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  // After we get the server, let's send the user there
  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  // If the user is not part of any servers, prompt them to create one!
  return <InitialModal />;
};

export default SetupPage;
