export class Item {
  constructor(
    public name: string, // Note: Type must remain 'string' (instead of ItemName type from item.types.ts) per requirements: "Item class is immutable"
    public sellIn: number,
    public quality: number
  ) {}

  public toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }
}
