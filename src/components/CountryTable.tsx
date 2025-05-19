
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Country } from "@/data/worldData";

interface CountryTableProps {
  countries: Country[];
}

const CountryTable: React.FC<CountryTableProps> = ({ countries }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Country</TableHead>
            <TableHead>Capital</TableHead>
            <TableHead>Languages</TableHead>
            <TableHead className="hidden md:table-cell">Continent</TableHead>
            <TableHead className="hidden md:table-cell">Population</TableHead>
            <TableHead className="hidden md:table-cell">Life Expectancy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.name}>
              <TableCell className="font-medium">{country.name}</TableCell>
              <TableCell>{country.capital}</TableCell>
              <TableCell>{country.languages.join(", ")}</TableCell>
              <TableCell className="hidden md:table-cell">{country.continent}</TableCell>
              <TableCell className="hidden md:table-cell">{country.population.toLocaleString()}</TableCell>
              <TableCell className="hidden md:table-cell">{country.lifeExpectancy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CountryTable;
