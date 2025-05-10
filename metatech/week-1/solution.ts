const cityData = `city,population,area,density,country
  Shanghai,24256800,6340,3826,China
  Delhi,16787941,1484,11313,India
  Lagos,16060303,1171,13712,Nigeria
  Istanbul,14160467,5461,2593,Turkey
  Tokyo,13513734,2191,6168,Japan
  Sao Paulo,12038175,1521,7914,Brazil
  Mexico City,8874724,1486,5974,Mexico
  London,8673713,1572,5431,United Kingdom
  New York City,8537673,784,10892,United States
  Bangkok,8280925,1569,5279,Thailand`;

class Row {
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

class Table {
  public rows: Row[];

  constructor(data: string) {
    this.rows = this.fromString(data);
  }

  fromString(data: string) {
    const preparedData = data.split('\n');

    if (preparedData.length === 0) {
      return [];
    }

    const rows = preparedData
      .slice(1, preparedData.length)
      .map((string) => Row.fromString(string));

    return rows;
  }

  getMaxDensity() {
    if (this.rows.length === 0) return 0;

    return Math.max(...this.rows.map((row) => row.density));
  }

  updateRowsGlobalDensity() {
    const maxDensity = this.getMaxDensity();

    for (const row of this.rows) {
      row.updateGlobalDensity = Math.round((row.density * 100) / maxDensity);
    }

    return this;
  }

  sortRowsByGlobalDensity() {
    if (this.rows.length === 0) return this;

    if (this.rows[0].globalDensity === 0) {
      this.updateRowsGlobalDensity();
    }

    this.rows = this.rows.sort((a, b) => b.density - a.density);

    return this;
  }

  printTable() {
    for (const row of this.rows) {
      console.log(row.toString());
    }

    return this;
  }
}

const table = new Table(cityData).sortRowsByGlobalDensity().printTable();
