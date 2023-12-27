export async function GET() {
  const url = "https://api-football-v1.p.rapidapi.com/v3/countries";
  const options = {
    headers: {
      "X-RapidAPI-Key": `${process.env.API_KEY}`,
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();

  return Response.json({ data });
}
