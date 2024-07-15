import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma/prisma";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");

  try {
    const feedItems = await getFeedItems(query, page, limit);
    const totalCount = await getTotalCount(query);

    return NextResponse.json({
      items: feedItems,
      totalCount,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error) {
    console.error("Error in GET /api/feed:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

async function getFeedItems(query: string, page: number, limit: number) {
  const skip = (page - 1) * limit;

  return await prisma.posts.findMany({
    where: {
      OR: [{ content: { contains: query, mode: "insensitive" } }],
    },
    orderBy: {
      created_at: "desc",
    },
    skip,
    take: limit,
    include: {
      user: {
        select: {
          username: true,
          avatar_url: true,
        },
      },
      tags: true,
    },
  });
}

async function getTotalCount(query: string) {
  return await prisma.posts.count({
    where: {
      OR: [{ content: { contains: query, mode: "insensitive" } }],
    },
  });
}
