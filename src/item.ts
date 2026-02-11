export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number,
  ) {}

  public toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }
}
