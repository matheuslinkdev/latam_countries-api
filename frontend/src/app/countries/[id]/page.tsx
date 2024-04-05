"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { id: number; country_name: string } }) => {
  const [countryData, setCountryData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://latam-countries-api.vercel.app/${params.id}`
        );
        const jsonData = await response.json();
        setCountryData(jsonData);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      <Link href="/countries">Back</Link>
      {countryData ? (
        <div>
          <h1>{countryData.country_name}</h1>
          <h3>Population: {countryData.population.toLocaleString("pt-br")}</h3>
          <p>Capital: {countryData.country_capital}</p>
          <p>Borders: {countryData.country_borders.join(", ")}</p>
          <p>
            Territorial extension: {countryData.country_territorial_extension}
          </p>
          <p>Currency: {countryData.country_currency}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;