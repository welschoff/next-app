import TabComponent from "@/app/components/TabComponent";
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
      <div className="flex w-full m-2 justify-center">
        <TabComponent id={params.leagueId} />
      </div>
      <div className="flex flex-col gap-3 divide-y text-sm">
        {data.data.response.map((league: any) => {
          return league.league.standings[0].map((standing: any) => (
            <div className="grid grid-cols-2 content-center justify-between">
              <div className="flex gap-x-2">
                <span className="self-center font-bold">{standing.rank}</span>
                <Image
                  src={standing.team.logo}
                  width={30}
                  height={30}
                  alt="logo"
                />
                <span className="self-center">{standing.team.name}</span>
              </div>
              <div className="flex justify-end justify-evenly gap-x-2">
                <span>{standing.all.played}</span>
                <span>
                  {standing.all.goals.for}:{standing.all.goals.against}
                </span>
                <span>{standing.goalsDiff}</span>
                <span className="font-bold">{standing.points}</span>
              </div>
            </div>
          ));
        })}
      </div>
    </>
  );
}
