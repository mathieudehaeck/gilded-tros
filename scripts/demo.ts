import { Item } from "../src/item";
import { GildedTros } from "../src/gilded-tros";
import { ITEM_NAMES } from "../src/item.constants";

console.log("AXXES CODE KATA - GILDED TROS");

const items: Item[] = [
  new Item(ITEM_NAMES.RING_OF_CLEANSENING_CODE, 10, 20),
  new Item(ITEM_NAMES.GOOD_WINE, 2, 0),
  new Item(ITEM_NAMES.ELIXIR_OF_THE_SOLID, 5, 7),
  new Item(ITEM_NAMES.LEGENDARY, 0, 80),
  new Item(ITEM_NAMES.LEGENDARY, -1, 80),
  new Item(ITEM_NAMES.BACKSTAGE_REFACTOR, 15, 20),
  new Item(ITEM_NAMES.BACKSTAGE_REFACTOR, 10, 49),
  new Item(ITEM_NAMES.BACKSTAGE_HAXX, 5, 49),
  // Smelly items (degrade twice as fast)
  new Item(ITEM_NAMES.DUPLICATE_CODE, 3, 6),
  new Item(ITEM_NAMES.LONG_METHODS, 3, 6),
  new Item(ITEM_NAMES.UGLY_VARIABLE_NAMES, 3, 6),
];

const app: GildedTros = new GildedTros(items);

let days = 4;
const args = process.argv.slice(2);
if (args.length > 0) {
  days = +args[0] + 1;
}

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.map((item) => item.toString()).forEach((item) => console.log(item));
  console.log();
  app.updateQuality();
}
