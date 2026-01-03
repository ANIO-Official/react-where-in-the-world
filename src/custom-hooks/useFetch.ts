import { useState, useEffect } from "react";

interface countryDataStructure {
  flags: { png: string; svg: string; alt: string };
  name: { common: string; official: string; nativeName: object };
  tld: string;
  currencies: object;
  capital: [string];
  region: string;
  subregion: string;
  languages: object;
  borders: [string];
  population: number;
}

interface countryCodeDataStructure {
  name: { common: string; official: string; nativeName: object };
  cca3: string;
}

//Set and Return data depending on url string. 

export default function useFetch(url: string, options?: RequestInit) {
  const [data, setData] = useState<
    countryDataStructure | countryCodeDataStructure
  >(
    url.includes("population") //Check if fetching for all fields
      ? {
          flags: { png: "", svg: "", alt: "" },
          name: { common: "", official: "", nativeName: {} },
          tld: "",
          currencies: {},
          capital: [""],
          region: "",
          subregion: "",
          languages: {},
          borders: [""],
          population: 0,
        }
      : { //Return when fetching codes only
          name: { common: "", official: "", nativeName: {} },
          cca3: "",
        }
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();
    setData(
      url.includes("population")//Check if fetching for all fields
        ? {
            flags: { png: "", svg: "", alt: "" },
            name: { common: "", official: "", nativeName: {} },
            tld: "",
            currencies: {},
            capital: [""],
            region: "",
            subregion: "",
            languages: {},
            borders: [""],
            population: 0,
          }
        : { //Return when fetching codes only
            name: { common: "", official: "", nativeName: {} },
            cca3: "",
          }
    );
    setError(null);
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Data came through!");
        setData(result);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.log("Data encountered an error!");
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, [url, options]); // Re-run if url or options change

  return { data, loading, error };
}
