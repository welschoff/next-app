import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const country = searchParams.get("country");

  const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?country=${country}`;
  const options = {
    headers: {
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return Response.json({ data });
}
