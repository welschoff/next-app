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
    <div className="flex flex-col divide-y divide-black justify-center">
      {data.data.response.map((league: any) => {
        return (
          <Link href={`/standing/${league.league.id}`}>
            <div
              key={league.league.id}
              className="flex flex-row p-4 gap-x-5 h-[80px]"
            >
              <div className="relative min-w-[50px]">
                <Image
                  src={league.league.logo}
                  alt="logo"
                  fill={true}
                  className="object-contain"
                />
              </div>
              <span className="self-center">{league.league.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
