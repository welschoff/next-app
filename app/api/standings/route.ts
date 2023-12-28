import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const league = searchParams.get("league");

  const url = `https://api-football-v1.p.rapidapi.com/v3/standings?season=2023&league=${league}`;
  const options = {
    headers: {
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return Response.json({ data });
}
