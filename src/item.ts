type ItemName =
  | "Good Wine"
  | "Backstage passes for Re:Factor"
  | "Backstage passes for HAXX"
  | "B-DAWG Keychain"
  | "Ring of Cleansening Code"
  | "Duplicate Code"
  | "Long Methods"
  | "Ugly Variable Names"
  | "Elixir of the SOLID";
export class Item {
  constructor(
    public name: ItemName,
    public sellIn: number,
    public quality: number
  ) {}

  public toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }
}
