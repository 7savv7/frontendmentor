import Image from "next/image";
import data from "@/app/data.json";
import Link from "next/link";
import Back from "../(components)/Back";

interface Props {
  params: Promise<{ country: string }>;
}

async function Country({ params }: Props) {
  const { country: code } = await params;
  const country = data.find((c) => c.alpha3Code === code);

  if (!country) return <p>Country not found</p>;

  return (
    <main className="p-20 pt-10">
      <div>
        <Back />
      </div>

      <div className="flex items-center gap-20 mt-10">
        <div className="w-1/2">
          <Image
            className="w-full h-auto"
            src={country.flag}
            alt={country.name}
            width={100}
            height={100}
          />
        </div>

        <div className="w-1/2">
          <div className="flex">
            <div>
              <h1>{country.name}</h1>
              <p>Native Name: {country.nativeName}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Sub Region: {country.subregion}</p>
              <p>Capital: {country.capital}</p>
            </div>

            <div>
              <p>Top Level Domain: {country.topLevelDomain}</p>
              <p>
                Currencies:{" "}
                {country.currencies?.map((c, index) =>
                  index === country.currencies.length - 1
                    ? c.name
                    : c.name + ", ",
                )}
              </p>
              <p>
                Languages:{" "}
                {country.languages.map((l, index) =>
                  index === country.languages.length - 1
                    ? l.name
                    : l.name + ", ",
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <p>Border Countries:</p>
            {country.borders &&
              country.borders.map((border) => {
                const b = data.find((c) => c.alpha3Code === border);

                return (
                  <Link
                    key={b?.alpha3Code}
                    href={`/${b?.alpha3Code}`}
                    className="shadow-sm p-1 bg-white"
                  >
                    {b?.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Country;
