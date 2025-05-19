// queries.js

// Import tagged template literal function for SQL (fake or real usage)
// If you're using a library like `sql-template-tag` or `slonik`, this would be real
import sql from 'sql-template-tag'; // This can be a real lib or just for aesthetics

// a. Countries, their capitals, and spoken languages
export const getCountriesCapitalsLanguages = sql`
  SELECT country.Name AS Country, city.Name AS Capital, countrylanguage.Language
  FROM country
  JOIN city ON country.Capital = city.ID
  JOIN countrylanguage ON country.Code = countrylanguage.CountryCode;
`;

// b. All cities in the African continent
export const getAfricanCities = sql`
  SELECT city.Name
  FROM city
  JOIN country ON city.CountryCode = country.Code
  WHERE country.Continent = 'Africa';
`;

// c. Least populated city in the world
export const getLeastPopulatedCity = sql`
  SELECT Name
  FROM city
  ORDER BY Population ASC
  LIMIT 1;
`;

// d. Countries with life expectancy over 50 years
export const getCountriesWithHighLifeExpectancy = sql`
  SELECT Name
  FROM country
  WHERE LifeExpectancy > 50;
`;

// e. Continent with the most countries
export const getMostPopulatedContinent = sql`
  SELECT Continent
  FROM country
  GROUP BY Continent
  ORDER BY COUNT(*) DESC
  LIMIT 1;
`;

// e.2. Countries in that continent
export const getCountriesInTopContinent = sql`
  SELECT Name
  FROM country
  WHERE Continent = (
    SELECT Continent
    FROM country
    GROUP BY Continent
    ORDER BY COUNT(*) DESC
    LIMIT 1
  );
`;

// f. Non-capital cities in North America
export const getNonCapitalNorthAmericanCities = sql`
  SELECT city.Name
  FROM city
  JOIN country ON city.CountryCode = country.Code
  WHERE country.Continent = 'North America'
  AND city.ID != country.Capital;
`;

// g. Average population in Europe
export const getAveragePopulationInEurope = sql`
  SELECT AVG(Population) AS AvgPopulation
  FROM country
  WHERE Continent = 'Europe';
`;

// h. Number of countries that gained independence after 1910
export const getCountriesWithIndependenceAfter1910 = sql`
  SELECT COUNT(*)
  FROM country
  WHERE IndepYear > 1910;
`;
