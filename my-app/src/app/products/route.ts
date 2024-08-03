import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 })
  } catch (error) {
    return NextResponse.json({error: "GET request failed", details: (error as Error).message}, {status: 500})
  }

}
