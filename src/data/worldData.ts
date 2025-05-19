
export interface Country {
  name: string;
  capital: string;
  languages: string[];
  continent: string;
  population: number;
  lifeExpectancy: number;
  independenceYear: number | null;
}

export interface City {
  name: string;
  country: string;
  continent: string;
  population: number;
  isCapital: boolean;
}

// Static data for countries
export const countries: Country[] = [
  {
    name: "United States",
    capital: "Washington D.C.",
    languages: ["English"],
    continent: "North America",
    population: 331002651,
    lifeExpectancy: 78.5,
    independenceYear: 1776
  },
  {
    name: "Canada",
    capital: "Ottawa",
    languages: ["English", "French"],
    continent: "North America",
    population: 37742154,
    lifeExpectancy: 82.3,
    independenceYear: 1867
  },
  {
    name: "Mexico",
    capital: "Mexico City",
    languages: ["Spanish"],
    continent: "North America",
    population: 126190788,
    lifeExpectancy: 75.2,
    independenceYear: 1821
  },
  {
    name: "Brazil",
    capital: "Brasília",
    languages: ["Portuguese"],
    continent: "South America",
    population: 212559417,
    lifeExpectancy: 75.1,
    independenceYear: 1822
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Spanish"],
    continent: "South America",
    population: 45195774,
    lifeExpectancy: 76.7,
    independenceYear: 1816
  },
  {
    name: "United Kingdom",
    capital: "London",
    languages: ["English"],
    continent: "Europe",
    population: 67886011,
    lifeExpectancy: 81.3,
    independenceYear: null
  },
  {
    name: "Germany",
    capital: "Berlin",
    languages: ["German"],
    continent: "Europe",
    population: 83783942,
    lifeExpectancy: 81.2,
    independenceYear: 1871
  },
  {
    name: "France",
    capital: "Paris",
    languages: ["French"],
    continent: "Europe",
    population: 65273511,
    lifeExpectancy: 82.5,
    independenceYear: null
  },
  {
    name: "Italy",
    capital: "Rome",
    languages: ["Italian"],
    continent: "Europe",
    population: 60461826,
    lifeExpectancy: 83.4,
    independenceYear: 1861
  },
  {
    name: "Spain",
    capital: "Madrid",
    languages: ["Spanish"],
    continent: "Europe",
    population: 46754778,
    lifeExpectancy: 83.4,
    independenceYear: null
  },
  {
    name: "China",
    capital: "Beijing",
    languages: ["Mandarin"],
    continent: "Asia",
    population: 1439323776,
    lifeExpectancy: 76.9,
    independenceYear: null
  },
  {
    name: "Japan",
    capital: "Tokyo",
    languages: ["Japanese"],
    continent: "Asia",
    population: 126476461,
    lifeExpectancy: 84.6,
    independenceYear: null
  },
  {
    name: "India",
    capital: "New Delhi",
    languages: ["Hindi", "English"],
    continent: "Asia",
    population: 1380004385,
    lifeExpectancy: 69.7,
    independenceYear: 1947
  },
  {
    name: "Australia",
    capital: "Canberra",
    languages: ["English"],
    continent: "Oceania",
    population: 25499884,
    lifeExpectancy: 83.3,
    independenceYear: 1901
  },
  {
    name: "New Zealand",
    capital: "Wellington",
    languages: ["English", "Māori"],
    continent: "Oceania",
    population: 4822233,
    lifeExpectancy: 82.1,
    independenceYear: 1907
  },
  {
    name: "Nigeria",
    capital: "Abuja",
    languages: ["English"],
    continent: "Africa",
    population: 206139589,
    lifeExpectancy: 54.7,
    independenceYear: 1960
  },
  {
    name: "South Africa",
    capital: "Pretoria",
    languages: ["Afrikaans", "English", "Zulu", "Xhosa"],
    continent: "Africa",
    population: 59308690,
    lifeExpectancy: 64.1,
    independenceYear: 1934
  },
  {
    name: "Egypt",
    capital: "Cairo",
    languages: ["Arabic"],
    continent: "Africa",
    population: 102334404,
    lifeExpectancy: 72.0,
    independenceYear: 1922
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    languages: ["Swahili", "English"],
    continent: "Africa",
    population: 53771296,
    lifeExpectancy: 66.7,
    independenceYear: 1963
  },
  {
    name: "Morocco",
    capital: "Rabat",
    languages: ["Arabic", "Berber"],
    continent: "Africa",
    population: 36910560,
    lifeExpectancy: 76.5,
    independenceYear: 1956
  }
];

// Static data for cities
export const cities: City[] = [
  {
    name: "New York",
    country: "United States",
    continent: "North America",
    population: 8398748,
    isCapital: false
  },
  {
    name: "Los Angeles",
    country: "United States",
    continent: "North America",
    population: 3990456,
    isCapital: false
  },
  {
    name: "Washington D.C.",
    country: "United States",
    continent: "North America",
    population: 705749,
    isCapital: true
  },
  {
    name: "Toronto",
    country: "Canada",
    continent: "North America",
    population: 2930000,
    isCapital: false
  },
  {
    name: "Ottawa",
    country: "Canada",
    continent: "North America",
    population: 934243,
    isCapital: true
  },
  {
    name: "Mexico City",
    country: "Mexico",
    continent: "North America",
    population: 9209944,
    isCapital: true
  },
  {
    name: "São Paulo",
    country: "Brazil",
    continent: "South America",
    population: 12325232,
    isCapital: false
  },
  {
    name: "Brasília",
    country: "Brazil",
    continent: "South America",
    population: 3015268,
    isCapital: true
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    population: 3075646,
    isCapital: true
  },
  {
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    population: 8982000,
    isCapital: true
  },
  {
    name: "Manchester",
    country: "United Kingdom",
    continent: "Europe",
    population: 547627,
    isCapital: false
  },
  {
    name: "Berlin",
    country: "Germany",
    continent: "Europe",
    population: 3669491,
    isCapital: true
  },
  {
    name: "Munich",
    country: "Germany",
    continent: "Europe",
    population: 1471508,
    isCapital: false
  },
  {
    name: "Paris",
    country: "France",
    continent: "Europe",
    population: 2148271,
    isCapital: true
  },
  {
    name: "Marseille",
    country: "France",
    continent: "Europe",
    population: 863310,
    isCapital: false
  },
  {
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    population: 2872800,
    isCapital: true
  },
  {
    name: "Milan",
    country: "Italy",
    continent: "Europe",
    population: 1404239,
    isCapital: false
  },
  {
    name: "Madrid",
    country: "Spain",
    continent: "Europe",
    population: 3334730,
    isCapital: true
  },
  {
    name: "Barcelona",
    country: "Spain",
    continent: "Europe",
    population: 1636762,
    isCapital: false
  },
  {
    name: "Beijing",
    country: "China",
    continent: "Asia",
    population: 21542000,
    isCapital: true
  },
  {
    name: "Shanghai",
    country: "China",
    continent: "Asia",
    population: 26317104,
    isCapital: false
  },
  {
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    population: 13929286,
    isCapital: true
  },
  {
    name: "Osaka",
    country: "Japan",
    continent: "Asia",
    population: 2691742,
    isCapital: false
  },
  {
    name: "New Delhi",
    country: "India",
    continent: "Asia",
    population: 21753486,
    isCapital: true
  },
  {
    name: "Mumbai",
    country: "India",
    continent: "Asia",
    population: 12478447,
    isCapital: false
  },
  {
    name: "Sydney",
    country: "Australia",
    continent: "Oceania",
    population: 5230330,
    isCapital: false
  },
  {
    name: "Canberra",
    country: "Australia",
    continent: "Oceania",
    population: 400856,
    isCapital: true
  },
  {
    name: "Wellington",
    country: "New Zealand",
    continent: "Oceania",
    population: 212700,
    isCapital: true
  },
  {
    name: "Auckland",
    country: "New Zealand",
    continent: "Oceania",
    population: 1657000,
    isCapital: false
  },
  {
    name: "Lagos",
    country: "Nigeria",
    continent: "Africa",
    population: 14862111,
    isCapital: false
  },
  {
    name: "Abuja",
    country: "Nigeria",
    continent: "Africa",
    population: 3464123,
    isCapital: true
  },
  {
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    population: 4618000,
    isCapital: false
  },
  {
    name: "Pretoria",
    country: "South Africa",
    continent: "Africa",
    population: 741651,
    isCapital: true
  },
  {
    name: "Cairo",
    country: "Egypt",
    continent: "Africa",
    population: 9500000,
    isCapital: true
  },
  {
    name: "Alexandria",
    country: "Egypt",
    continent: "Africa",
    population: 5200000,
    isCapital: false
  },
  {
    name: "Nairobi",
    country: "Kenya",
    continent: "Africa",
    population: 4397073,
    isCapital: true
  },
  {
    name: "Mombasa",
    country: "Kenya",
    continent: "Africa",
    population: 1208333,
    isCapital: false
  },
  {
    name: "Casablanca",
    country: "Morocco",
    continent: "Africa",
    population: 3359818,
    isCapital: false
  },
  {
    name: "Rabat",
    country: "Morocco",
    continent: "Africa",
    population: 577827,
    isCapital: true
  },
  {
    name: "Vatican City",
    country: "Vatican City",
    continent: "Europe",
    population: 825,
    isCapital: true
  }
];

// Helper function to get continents with country counts
export const getContinentsWithCountCounts = () => {
  const continentCounts: Record<string, number> = {};
  
  countries.forEach(country => {
    if (continentCounts[country.continent]) {
      continentCounts[country.continent]++;
    } else {
      continentCounts[country.continent] = 1;
    }
  });
  
  return Object.entries(continentCounts)
    .map(([continent, count]) => ({ 
      continent, 
      count 
    }))
    .sort((a, b) => b.count - a.count);
};

// Helper function to get the continent with most countries
export const getContinentWithMostCountries = () => {
  const continentCounts = getContinentsWithCountCounts();
  return continentCounts[0];
};

// Helper function to get European countries average population
export const getEuropeanCountriesAveragePopulation = () => {
  const europeanCountries = countries.filter(country => country.continent === "Europe");
  const totalPopulation = europeanCountries.reduce((sum, country) => sum + country.population, 0);
  return Math.round(totalPopulation / europeanCountries.length);
};

// Helper function to get countries with independence after 1910
export const getCountriesIndependentAfter1910 = () => {
  return countries.filter(country => country.independenceYear !== null && country.independenceYear > 1910);
};

// Helper function to get least populated city
export const getLeastPopulatedCity = () => {
  return cities.reduce((min, city) => city.population < min.population ? city : min);
};

// Helper function to get countries with life expectancy > 50
export const getCountriesWithHighLifeExpectancy = () => {
  return countries.filter(country => country.lifeExpectancy > 50)
    .sort((a, b) => b.lifeExpectancy - a.lifeExpectancy);
};

// Helper function to get African cities
export const getAfricanCities = () => {
  return cities.filter(city => city.continent === "Africa")
    .sort((a, b) => a.name.localeCompare(b.name));
};

// Helper function to get North American non-capital cities
export const getNorthAmericanNonCapitalCities = () => {
  return cities.filter(city => city.continent === "North America" && !city.isCapital)
    .sort((a, b) => a.name.localeCompare(b.name));
};
