import Image from "next/image";
import Link from "next/link";

export default async function Leagues({
  params,
}: {
  params: { country: string };
}) {
  const res = await fetch(
    `http://localhost:3000/api/leagues?country=${params.country}`
  );
  const data = await res.json();
  return (
    <div className="flex flex-col gap-2">
      {data.data.response.map((league: any) => {
        return (
          <Link href={`/standing/${league.league.id}`}>
            <div
              key={league.league.id}
              className="flex content-center items-center gap-2"
            >
              <Image
                src={league.league.logo}
                alt="logo"
                width={50}
                height={50}
              />
              <span className="">{league.league.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
