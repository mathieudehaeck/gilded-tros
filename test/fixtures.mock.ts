import { Item } from "../src/item";

/**
 * Test fixtures for Gilded Tros
 * Reusable mock data for unit tests and text fixtures
 */

// Ring of Cleansening Code
export const mockNormalItem = new Item("Ring of Cleansening Code", 10, 20);
export const mockNormalItemExpired = new Item(
  "Ring of Cleansening Code",
  0,
  10
);
export const mockNormalItemZeroQuality = new Item(
  "Ring of Cleansening Code",
  5,
  0
);

// Good Wine
export const mockGoodWine = new Item("Good Wine", 10, 20);
export const mockGoodWineExpired = new Item("Good Wine", 0, 20);
export const mockGoodWineMaxQuality = new Item("Good Wine", 10, 50);

// B-DAWG Keychain (Legendary)
export const mockLegendaryItem = new Item("B-DAWG Keychain", 0, 80);
export const mockLegendaryItemNegativeSellIn = new Item(
  "B-DAWG Keychain",
  -1,
  80
);

// Backstage Passes
export const mockBackstagePassDistant = new Item(
  "Backstage passes for Re:Factor",
  15,
  20
);
export const mockBackstagePass10Days = new Item(
  "Backstage passes for Re:Factor",
  10,
  20
);
export const mockBackstagePass5Days = new Item(
  "Backstage passes for Re:Factor",
  5,
  20
);
export const mockBackstagePassExpired = new Item(
  "Backstage passes for Re:Factor",
  0,
  20
);
export const mockBackstagePassNearMax = new Item(
  "Backstage passes for Re:Factor",
  5,
  49
);
export const mockBackstagePassHAXX = new Item(
  "Backstage passes for HAXX",
  5,
  20
);

// Multi-day simulation items
export const mockMultiDayItems = {
  normalItem: new Item("Ring of Cleansening Code", 10, 20),
  goodWine: new Item("Good Wine", 2, 0),
  legendary: new Item("B-DAWG Keychain", 0, 80),
  backstagePass: new Item("Backstage passes for Re:Factor", 15, 20),
};

// Standard test items (matches text-test-fixture.ts)
export const standardTestItems: Item[] = [
  new Item("Ring of Cleansening Code", 10, 20),
  new Item("Good Wine", 2, 0),
  new Item("Elixir of the SOLID", 5, 7),
  new Item("B-DAWG Keychain", 0, 80),
  new Item("B-DAWG Keychain", -1, 80),
  new Item("Backstage passes for Re:Factor", 15, 20),
  new Item("Backstage passes for Re:Factor", 10, 49),
  new Item("Backstage passes for HAXX", 5, 49),
];
