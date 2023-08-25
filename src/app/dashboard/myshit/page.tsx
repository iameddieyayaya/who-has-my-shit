import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs";
import prisma from "@/utils/prisma";
import List from "./List";

const MyShitPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return notFound();
  }

  const user = await prisma.user.findUnique({
    where: {
      externalId: userId,
    },
    include: {
      ownedGear: true,
    },
  });

  if (!user) {
    return (
      <div>
        <h1>Not found</h1>
      </div>
    );
  }

  return <List gear={user.ownedGear} />;
};

export default MyShitPage;
