import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      console.error("No session found");
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 }
      );
    }

    const cart = await prisma.cart.findUnique({
      where: { userId: session.user.id },
    });

    return NextResponse.json({ items: cart?.items || [] }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to retrieve cart" },
      { status: 500 }
    );
  }
}
