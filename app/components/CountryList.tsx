import Image from "next/image";
import Link from "next/link";

export async function CountryList() {
  const res = await fetch("http://localhost:3000/api/countries");
  const data = await res.json();

  return (
    <div className="flex flex-col gap-y-2">
      {data.data.response.map((country: any) => {
        return (
          <div
            key={country.code}
            className="flex flex-row gap-x-1 p-1 items-center bg-slate-200 w-4/5 border-2 border-black rounded-lg"
          >
            {country.flag && (
              <Image src={country.flag} width={50} height={50} alt="flag" />
            )}
            <Link href={`/leagues/${country.name}`}>{country.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
