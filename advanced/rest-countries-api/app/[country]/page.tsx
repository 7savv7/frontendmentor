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

  if (!country)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <p>Country not found</p>
      </div>
    );

  return (
    <main className="p-5 pt-10 lg:p-20 lg:pt-10 text-text text-[16px]">
      <div>
        <Back />
      </div>

      <div className="flex flex-col items-center gap-8 lg:gap-20 mt-10 lg:flex-row">
        <div className="lg:w-1/2">
          <Image
            className="animate-expand w-full h-auto shadow-sm"
            src={country.flag}
            alt={country.name}
            width={100}
            height={100}
            loading="eager"
            priority
          />
        </div>

        <div className="flex flex-col gap-8 lg:w-1/2 lg:gap-20">
          <div className="flex flex-col gap-8">
            <h1 className="text-[1.6em] font-[800]">{country.name}</h1>

            <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-[600]">Native Name:</span>{" "}
                  {country.nativeName}
                </p>
                <p>
                  <span className="font-[600]">Population:</span>{" "}
                  {country.population.toLocaleString("en-US")}
                </p>
                <p>
                  <span className="font-[600]">Region:</span> {country.region}
                </p>
                <p>
                  <span className="font-[600]">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className="font-[600]">Capital:</span> {country.capital}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-[600]">Top Level Domain:</span>{" "}
                  {country.topLevelDomain}
                </p>
                <p>
                  <span className="font-[600]">Currencies:</span>{" "}
                  {country.currencies?.map((c, index) =>
                    index === country.currencies.length - 1
                      ? c.name
                      : c.name + ", ",
                  )}
                </p>
                <p>
                  <span className="font-[600]">Languages:</span>{" "}
                  {country.languages.map((l, index) =>
                    index === country.languages.length - 1
                      ? l.name
                      : l.name + ", ",
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <p className="font-[600]">Border Countries:</p>
            {country.borders &&
              country.borders.map((border) => {
                const b = data.find((c) => c.alpha3Code === border);

                return (
                  <Link
                    key={b?.alpha3Code}
                    href={`/${b?.alpha3Code}`}
                    className="shadow-sm p-1 px-4 bg-elements"
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
