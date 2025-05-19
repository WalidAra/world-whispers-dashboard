
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  ChartPie, 
  Clock, 
  Database, 
  Flag, 
  List, 
  MapPin, 
  Table 
} from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import DataCard from "@/components/DataCard";
import StatCard from "@/components/StatCard";
import CountryTable from "@/components/CountryTable";
import CityList from "@/components/CityList";
import { 
  countries,
  cities,
  getAfricanCities,
  getLeastPopulatedCity,
  getCountriesWithHighLifeExpectancy,
  getContinentWithMostCountries,
  getNorthAmericanNonCapitalCities,
  getEuropeanCountriesAveragePopulation,
  getCountriesIndependentAfter1910
} from "@/data/worldData";

const WorldDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Data calculations
  const africanCities = getAfricanCities();
  const leastPopulatedCity = getLeastPopulatedCity();
  const countriesWithHighLifeExpectancy = getCountriesWithHighLifeExpectancy();
  const continentWithMostCountries = getContinentWithMostCountries();
  const northAmericanNonCapitalCities = getNorthAmericanNonCapitalCities();
  const europeanCountriesAvgPopulation = getEuropeanCountriesAveragePopulation();
  const countriesIndependentAfter1910 = getCountriesIndependentAfter1910();
  
  return (
    <div className="container py-10">
      <DashboardHeader 
        title="World Facts Dashboard" 
        description="Explore interesting facts about countries and cities around the world"
      />
      
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span className="hidden md:inline">Overview</span>
          </TabsTrigger>
          <TabsTrigger value="countries" className="flex items-center gap-2">
            <Flag className="h-4 w-4" />
            <span className="hidden md:inline">Countries</span>
          </TabsTrigger>
          <TabsTrigger value="cities" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden md:inline">Cities</span>
          </TabsTrigger>
          <TabsTrigger value="continents" className="flex items-center gap-2">
            <ChartPie className="h-4 w-4" />
            <span className="hidden md:inline">Continents</span>
          </TabsTrigger>
          <TabsTrigger value="statistics" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            <span className="hidden md:inline">Statistics</span>
          </TabsTrigger>
          <TabsTrigger value="lists" className="flex items-center gap-2">
            <List className="h-4 w-4" />
            <span className="hidden md:inline">Lists</span>
          </TabsTrigger>
          <TabsTrigger value="tables" className="flex items-center gap-2">
            <Table className="h-4 w-4" />
            <span className="hidden md:inline">Tables</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="hidden md:inline">History</span>
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Countries"
              value={countries.length}
              description="Number of countries in our database"
              icon={<Flag className="h-4 w-4" />}
              color="bg-dashboard-blue"
            />
            <StatCard
              title="Total Cities"
              value={cities.length}
              description="Number of cities in our database"
              icon={<MapPin className="h-4 w-4" />}
              color="bg-dashboard-teal"
            />
            <StatCard
              title="Continents"
              value={new Set(countries.map(c => c.continent)).size}
              description="Number of continents represented"
              icon={<ChartPie className="h-4 w-4" />}
              color="bg-dashboard-purple"
            />
            <StatCard
              title="Capital Cities"
              value={cities.filter(c => c.isCapital).length}
              description="Number of capital cities"
              icon={<Flag className="h-4 w-4" />}
              color="bg-dashboard-green"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <DataCard 
              title="Most Populated Countries" 
              description="Top 5 countries by population"
            >
              <div className="space-y-2">
                {countries
                  .sort((a, b) => b.population - a.population)
                  .slice(0, 5)
                  .map((country, index) => (
                    <div key={country.name} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">{index + 1}.</span>
                        <span className="font-medium">{country.name}</span>
                      </div>
                      <span>{country.population.toLocaleString()}</span>
                    </div>
                  ))}
              </div>
            </DataCard>
            
            <DataCard 
              title="Highest Life Expectancy" 
              description="Top 5 countries by life expectancy"
            >
              <div className="space-y-2">
                {countries
                  .sort((a, b) => b.lifeExpectancy - a.lifeExpectancy)
                  .slice(0, 5)
                  .map((country, index) => (
                    <div key={country.name} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">{index + 1}.</span>
                        <span className="font-medium">{country.name}</span>
                      </div>
                      <span>{country.lifeExpectancy} years</span>
                    </div>
                  ))}
              </div>
            </DataCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DataCard 
              title="Continent with Most Countries" 
              description="The continent that has the most countries"
            >
              <div className="flex flex-col items-center justify-center py-4">
                <div className="text-3xl font-bold text-dashboard-blue">
                  {continentWithMostCountries.continent}
                </div>
                <div className="text-muted-foreground mt-1">
                  {continentWithMostCountries.count} countries
                </div>
              </div>
            </DataCard>
            
            <DataCard 
              title="Average European Population" 
              description="Average population of European countries"
            >
              <div className="flex flex-col items-center justify-center py-4">
                <div className="text-3xl font-bold text-dashboard-green">
                  {europeanCountriesAvgPopulation.toLocaleString()}
                </div>
                <div className="text-muted-foreground mt-1">
                  people per country
                </div>
              </div>
            </DataCard>
            
            <DataCard 
              title="Recent Independence" 
              description="Countries independent after 1910"
            >
              <div className="flex flex-col items-center justify-center py-4">
                <div className="text-3xl font-bold text-dashboard-purple">
                  {countriesIndependentAfter1910.length}
                </div>
                <div className="text-muted-foreground mt-1">
                  countries gained independence after 1910
                </div>
              </div>
            </DataCard>
          </div>
        </TabsContent>

        {/* Countries Tab */}
        <TabsContent value="countries" className="space-y-6 animate-fade-in">
          <DataCard title="Countries" description="List of all countries with their details">
            <CountryTable countries={countries} />
          </DataCard>
          
          <DataCard 
            title="Countries with Life Expectancy Above 50 Years"
            description="Countries where people live longer than 50 years on average"
          >
            <CountryTable countries={countriesWithHighLifeExpectancy} />
          </DataCard>
        </TabsContent>

        {/* Cities Tab */}
        <TabsContent value="cities" className="space-y-6 animate-fade-in">
          <DataCard title="African Cities" description="All cities located in Africa">
            <CityList cities={africanCities} />
          </DataCard>
          
          <DataCard 
            title="North American Non-Capital Cities" 
            description="Cities in North America that are not capital cities"
          >
            <CityList cities={northAmericanNonCapitalCities} />
          </DataCard>
          
          <DataCard 
            title="Least Populated City" 
            description="The city with the lowest population in our database"
          >
            <div className="flex flex-col items-center py-4">
              <div className="text-2xl font-bold">{leastPopulatedCity.name}</div>
              <div className="text-muted-foreground">{leastPopulatedCity.country}</div>
              <div className="mt-2 px-4 py-1 bg-dashboard-blue bg-opacity-15 rounded-full text-dashboard-blue">
                Population: {leastPopulatedCity.population.toLocaleString()}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {leastPopulatedCity.isCapital ? "Capital City" : "Not a Capital City"}
              </div>
            </div>
          </DataCard>
        </TabsContent>

        {/* Continents Tab */}
        <TabsContent value="continents" className="space-y-6 animate-fade-in">
          <DataCard 
            title={`${continentWithMostCountries.continent} - Most Countries`} 
            description={`${continentWithMostCountries.continent} has the most countries (${continentWithMostCountries.count})`}
          >
            <div className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countries
                  .filter(country => country.continent === continentWithMostCountries.continent)
                  .map(country => (
                    <div key={country.name} className="flex items-center p-2 border rounded-md">
                      <div className="w-2 h-2 rounded-full bg-dashboard-blue mr-2"></div>
                      <span>{country.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </DataCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataCard title="Countries by Continent" description="Distribution of countries across continents">
              <div className="space-y-3 py-2">
                {Array.from(new Set(countries.map(c => c.continent))).map(continent => {
                  const continentCountries = countries.filter(c => c.continent === continent);
                  const percentage = (continentCountries.length / countries.length) * 100;
                  
                  return (
                    <div key={continent} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{continent}</span>
                        <span>{continentCountries.length} countries</span>
                      </div>
                      <div className="h-2 bg-muted rounded overflow-hidden">
                        <div 
                          className="h-full bg-dashboard-blue" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </DataCard>
            
            <DataCard title="Population by Continent" description="Distribution of population across continents">
              <div className="space-y-3 py-2">
                {Array.from(new Set(countries.map(c => c.continent))).map(continent => {
                  const continentCountries = countries.filter(c => c.continent === continent);
                  const continentPopulation = continentCountries.reduce((sum, c) => sum + c.population, 0);
                  const totalPopulation = countries.reduce((sum, c) => sum + c.population, 0);
                  const percentage = (continentPopulation / totalPopulation) * 100;
                  
                  return (
                    <div key={continent} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{continent}</span>
                        <span>{continentPopulation.toLocaleString()} people</span>
                      </div>
                      <div className="h-2 bg-muted rounded overflow-hidden">
                        <div 
                          className="h-full bg-dashboard-green" 
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </DataCard>
          </div>
        </TabsContent>

        {/* Statistics Tab */}
        <TabsContent value="statistics" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="European Average Population"
              value={europeanCountriesAvgPopulation.toLocaleString()}
              description="Average population of European countries"
              icon={<BarChart className="h-4 w-4" />}
              color="bg-dashboard-blue"
            />
            <StatCard
              title="Highest Life Expectancy"
              value={`${Math.max(...countries.map(c => c.lifeExpectancy))} years`}
              description={`${countries.sort((a, b) => b.lifeExpectancy - a.lifeExpectancy)[0].name}`}
              icon={<Clock className="h-4 w-4" />}
              color="bg-dashboard-green"
            />
            <StatCard
              title="Lowest Life Expectancy"
              value={`${Math.min(...countries.map(c => c.lifeExpectancy))} years`}
              description={`${countries.sort((a, b) => a.lifeExpectancy - b.lifeExpectancy)[0].name}`}
              icon={<Clock className="h-4 w-4" />}
              color="bg-dashboard-red"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataCard title="Life Expectancy Statistics">
              <div className="space-y-3 py-2">
                <div className="flex justify-between">
                  <span className="font-medium">Global Average</span>
                  <span>{(countries.reduce((sum, c) => sum + c.lifeExpectancy, 0) / countries.length).toFixed(1)} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Median</span>
                  <span>
                    {countries
                      .map(c => c.lifeExpectancy)
                      .sort((a, b) => a - b)[Math.floor(countries.length / 2)]
                    } years
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Range</span>
                  <span>
                    {Math.min(...countries.map(c => c.lifeExpectancy))} - 
                    {Math.max(...countries.map(c => c.lifeExpectancy))} years
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Countries Above 80 years</span>
                  <span>{countries.filter(c => c.lifeExpectancy > 80).length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Countries Below 70 years</span>
                  <span>{countries.filter(c => c.lifeExpectancy < 70).length}</span>
                </div>
              </div>
            </DataCard>
            
            <DataCard title="Population Statistics">
              <div className="space-y-3 py-2">
                <div className="flex justify-between">
                  <span className="font-medium">Total World Population</span>
                  <span>{countries.reduce((sum, c) => sum + c.population, 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Average Country Population</span>
                  <span>
                    {Math.round(countries.reduce((sum, c) => sum + c.population, 0) / countries.length).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Largest Country</span>
                  <span>
                    {countries.sort((a, b) => b.population - a.population)[0].name} 
                    ({countries.sort((a, b) => b.population - a.population)[0].population.toLocaleString()})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Smallest Country</span>
                  <span>
                    {countries.sort((a, b) => a.population - b.population)[0].name}
                    ({countries.sort((a, b) => a.population - b.population)[0].population.toLocaleString()})
                  </span>
                </div>
              </div>
            </DataCard>
          </div>
        </TabsContent>

        {/* Lists Tab */}
        <TabsContent value="lists" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataCard 
              title="Countries with Life Expectancy Above 50 Years"
              description="List of countries where average life expectancy exceeds 50 years"
            >
              <div className="space-y-2 py-2 max-h-96 overflow-y-auto">
                {countriesWithHighLifeExpectancy.map((country, index) => (
                  <div key={country.name} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-2">{index + 1}.</span>
                      <span className="font-medium">{country.name}</span>
                    </div>
                    <span>{country.lifeExpectancy} years</span>
                  </div>
                ))}
              </div>
            </DataCard>
            
            <DataCard 
              title="Recently Independent Countries"
              description="Countries that gained independence after 1910"
            >
              <div className="space-y-2 py-2 max-h-96 overflow-y-auto">
                {countriesIndependentAfter1910
                  .sort((a, b) => (b.independenceYear ?? 0) - (a.independenceYear ?? 0))
                  .map((country, index) => (
                    <div key={country.name} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">{index + 1}.</span>
                        <span className="font-medium">{country.name}</span>
                      </div>
                      <span>{country.independenceYear}</span>
                    </div>
                  ))
                }
              </div>
            </DataCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DataCard 
              title="North American Non-Capital Cities"
              description="Cities in North America that are not capitals"
            >
              <div className="space-y-2 py-2 max-h-96 overflow-y-auto">
                {northAmericanNonCapitalCities.map((city, index) => (
                  <div key={`${city.name}-${city.country}`} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-2">{index + 1}.</span>
                      <span className="font-medium">{city.name}</span>
                    </div>
                    <span>{city.country}</span>
                  </div>
                ))}
              </div>
            </DataCard>
            
            <DataCard 
              title="African Cities"
              description="All cities in Africa"
            >
              <div className="space-y-2 py-2 max-h-96 overflow-y-auto">
                {africanCities.map((city, index) => (
                  <div key={`${city.name}-${city.country}`} className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-2">{index + 1}.</span>
                      <span className="font-medium">{city.name}</span>
                    </div>
                    <span>{city.country}</span>
                  </div>
                ))}
              </div>
            </DataCard>
          </div>
        </TabsContent>

        {/* Tables Tab */}
        <TabsContent value="tables" className="space-y-6 animate-fade-in">
          <DataCard title="All Countries" description="Complete list of all countries in our database">
            <CountryTable countries={countries} />
          </DataCard>
          
          <DataCard title="All Cities" description="Complete list of all cities in our database">
            <CityList cities={cities} />
          </DataCard>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="space-y-6 animate-fade-in">
          <DataCard 
            title="Independence Timeline" 
            description="When countries gained their independence"
          >
            <div className="space-y-8 py-4">
              {[1700, 1800, 1900, 2000].map(century => {
                const countriesInCentury = countries.filter(
                  c => c.independenceYear !== null && 
                  c.independenceYear >= century && 
                  c.independenceYear < century + 100
                ).sort((a, b) => (a.independenceYear ?? 0) - (b.independenceYear ?? 0));
                
                if (countriesInCentury.length === 0) return null;
                
                return (
                  <div key={century} className="space-y-2">
                    <h3 className="font-semibold text-lg">{century}s</h3>
                    <div className="relative">
                      <div className="absolute left-0 top-4 bottom-0 w-px bg-border z-0" />
                      <div className="space-y-6 relative z-10">
                        {countriesInCentury.map(country => (
                          <div key={country.name} className="flex">
                            <div className="w-16 font-mono text-sm text-muted-foreground flex-shrink-0">
                              {country.independenceYear}
                            </div>
                            <div className="w-2 h-2 rounded-full bg-dashboard-blue mt-1.5 -ml-1 mr-3 flex-shrink-0" />
                            <div>
                              <div className="font-medium">{country.name}</div>
                              <div className="text-sm text-muted-foreground">
                                Continent: {country.continent}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">No Recorded Independence Date</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {countries
                    .filter(c => c.independenceYear === null)
                    .map(country => (
                      <div key={country.name} className="flex items-center p-2 border rounded-md">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground mr-2"></div>
                        <span>{country.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </DataCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorldDashboard;
