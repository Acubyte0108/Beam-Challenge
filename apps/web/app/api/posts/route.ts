// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { faker } from '@faker-js/faker';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}


if (process.env.FAKER_SEED) {
  const seed = Number(process.env.FAKER_SEED);
  if (!isNaN(seed)) {
    faker.seed(seed);
  }
}

const TOTAL_ITEMS = Number(process.env.TOTAL_FAKE_POST_ITEMS) || 30;

const allPosts = Array.from({ length: TOTAL_ITEMS }, (_, i) => ({
  id: i + 1,
  title: faker.lorem.words(3),
  description: faker.lorem.sentences(2),
  image: process.env.FAKER_SEED
    ? `https://picsum.photos/seed/${i+1}/490/320`
    : `https://picsum.photos/490/320?random=${faker.string.uuid()}`,
}));

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');

  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const limit = limitParam ? parseInt(limitParam, 10) : 6;

  if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
    return NextResponse.json({ error: 'Invalid page or limit' }, { status: 400 });
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const pageItems = allPosts.slice(startIndex, endIndex);

  const hasMore = endIndex < TOTAL_ITEMS;

  const response = NextResponse.json({
    page,
    limit,
    hasMore,
    data: pageItems,
  });

  response.headers.set('Access-Control-Allow-Origin', '*');
  return response;
}