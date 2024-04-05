"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Country {
  id: number;
  country_name: string;
}

const List = () => {
  const [data, setData] = useState<Country[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://latam-countries-api.vercel.app/");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      {data !== null && (
        <ul>
          {data.map((country) => (
            <li
              key={country.id}
              style={{ margin: "1dvh auto", textDecoration: "underline" }}
            >
              <Link href={`/countries/${country.id}`}>
                {country.country_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
