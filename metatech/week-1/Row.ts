export class Row {
  city: string;
  population: number;
  area: number;
  density: number;
  country: string;
  globalDensity: number;

  constructor(
    city: string,
    population: number,
    area: number,
    density: number,
    country: string,
    globalDensity = 0,
  ) {
    this.city = city;
    this.population = population;
    this.area = area;
    this.density = density;
    this.country = country;
    this.globalDensity = globalDensity;
  }

  static fromString(data: string) {
    const preparedData = data.split(',');

    return new Row(
      preparedData[0].trim(),
      +preparedData[1],
      +preparedData[2],
      +preparedData[3],
      preparedData[4].trim(),
    );
  }

  set updateGlobalDensity(density: number) {
    this.globalDensity = density;
  }

  toString() {
    let result = this.city.padEnd(18);
    result += this.population.toString().padStart(10);
    result += this.area.toString().padStart(8);
    result += this.density.toString().padStart(8);
    result += this.country.padStart(18);
    result += this.globalDensity.toString().padStart(6);

    return result;
  }
}
