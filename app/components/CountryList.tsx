import Image from "next/image";
import Link from "next/link";

export async function CountryList() {
  const res = await fetch("http://localhost:3000/api/countries");
  const data = await res.json();

  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid grey",
  };

  return (
    <div className="flex flex-col divide-y divide-black justify-center">
      {data.data.response.map((country: any) => {
        return (
          <div key={country.code} className="flex flex-row p-4 gap-x-3">
            {country.flag && (
              <Image
                src={country.flag}
                style={imageStyle}
                alt="flag"
                width={50}
                height={50}
              />
            )}
            <Link href={`/leagues/${country.name}`} className="self-center">
              {country.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
