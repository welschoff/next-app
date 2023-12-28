import Image from "next/image";

export default async function Leagues({
  params,
}: {
  params: { leagueId: number };
}) {
  const res = await fetch(
    `http://localhost:3000/api/standings?league=${params.leagueId}`
  );
  const data = await res.json();
  console.log(data);

  return (
    <>
      <div className="flex flex-col gap-3 divide-y">
        {data.data.response.map((league: any) => {
          return league.league.standings[0].map((standing: any) => (
            <div className="flex gap-2 content-center">
              <span>{standing.rank}</span>
              <Image
                src={standing.team.logo}
                width={30}
                height={30}
                alt="logo"
              />
              <span>{standing.team.name}</span>
            </div>
          ));
        })}
      </div>
    </>
  );
}
