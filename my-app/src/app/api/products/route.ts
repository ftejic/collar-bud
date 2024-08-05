import prisma from "@/lib/prisma";
import { ProductCategory } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const category = url.searchParams.get("cat");
    const name = url.searchParams.get("name");

    const products = await prisma.product.findMany({
      where: {
        ...(category ? { category: category as ProductCategory } : {}),
        ...(name ? { name } : {}),
      },
      include: {
        sizes: true,
      },
    });
    return NextResponse.json({ succes: true, data: products }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        succes: false,
        error: "Failed to fetch products",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
