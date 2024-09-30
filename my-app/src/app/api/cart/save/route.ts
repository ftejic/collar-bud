import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      {
        success: false,
        error: "Not authenticated",
      },
      { status: 401 }
    );
  }

  const cart = await req.json();

  try {
    if (cart.length === 0) {
      const existingCart = await prisma.cart.findUnique({
        where: { userId: session.user.id },
      });

      if (existingCart) {
        await prisma.cart.delete({
          where: { userId: session.user.id },
        });

        return NextResponse.json(
          { success: true, message: "Cart deleted as it was empty." },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { success: true, message: "No cart to delete." },
          { status: 200 }
        );
      }
    }

    const savedCart = await prisma.cart.upsert({
      where: { userId: session.user.id },
      update: { items: cart },
      create: {
        userId: session.user.id,
        items: cart,
      },
    });

    return NextResponse.json(
      { success: true, data: savedCart },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while saving/deleting cart:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to save cart",
      },
      { status: 500 }
    );
  }
}
