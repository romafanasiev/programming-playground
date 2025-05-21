import { Row } from './Row';

export class Table {
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
