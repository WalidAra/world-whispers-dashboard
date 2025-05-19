
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { City } from "@/data/worldData";

interface CityListProps {
  cities: City[];
}

const CityList: React.FC<CityListProps> = ({ cities }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>City</TableHead>
            <TableHead>Country</TableHead>
            <TableHead className="hidden md:table-cell">Population</TableHead>
            <TableHead className="hidden md:table-cell">Capital City</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cities.map((city) => (
            <TableRow key={`${city.name}-${city.country}`}>
              <TableCell className="font-medium">{city.name}</TableCell>
              <TableCell>{city.country}</TableCell>
              <TableCell className="hidden md:table-cell">{city.population.toLocaleString()}</TableCell>
              <TableCell className="hidden md:table-cell">{city.isCapital ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CityList;
