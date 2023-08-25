import prisma from "@/utils/prisma";
import { WebhookEvent } from "@clerk/nextjs/server";
import { IncomingHttpHeaders } from "http";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";


const webhookSecret = process.env.WEBHOOK_SECRET || "";

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = request.headers ;
    const clerkHeaders = {
      "svix-id": headersList.get("svix-id"),
      "svix-timestamp": headersList.get("svix-timestamp"),
      "svix-signature": headersList.get("svix-signature"),
    };



  const wh = new Webhook(webhookSecret);
  let evt: WebhookEvent;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      clerkHeaders as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as WebhookEvent;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, ...attributes } = evt.data;

    const email = attributes.email_addresses[0].email_address
    
    await prisma.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id,
        email: email,
        name: (`${attributes.first_name} ${attributes.last_name}`).trim(),
        image: attributes.image_url,
      },
      update:  {
        externalId: id,
        email: email,
        name: (`${attributes.first_name} ${attributes.last_name}`).trim(),
        image: attributes.image_url,
      },
    });
  }

  return NextResponse.json({}, { status: 200 });
}

export const GET = handler;
export const POST = handler;
