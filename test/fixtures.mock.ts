import { Item } from "../src/item";
import { ITEM_NAMES } from "../src/item.constants";

/**
 * Test fixtures for Gilded Tros
 * Reusable mock data for unit tests and text fixtures
 */

// Ring of Cleansening Code
export const mockNormalItem = new Item(
  ITEM_NAMES.RING_OF_CLEANSENING_CODE,
  10,
  20
);
export const mockNormalItemExpired = new Item(
  ITEM_NAMES.RING_OF_CLEANSENING_CODE,
  0,
  10
);
export const mockNormalItemZeroQuality = new Item(
  ITEM_NAMES.RING_OF_CLEANSENING_CODE,
  5,
  0
);

// Good Wine
export const mockGoodWine = new Item(ITEM_NAMES.GOOD_WINE, 10, 20);
export const mockGoodWineExpired = new Item(ITEM_NAMES.GOOD_WINE, 0, 20);
export const mockGoodWineMaxQuality = new Item(ITEM_NAMES.GOOD_WINE, 10, 50);

// B-DAWG Keychain (Legendary)
export const mockLegendaryItem = new Item(ITEM_NAMES.LEGENDARY, 0, 80);
export const mockLegendaryItemNegativeSellIn = new Item(
  ITEM_NAMES.LEGENDARY,
  -1,
  80
);

// Backstage Passes
export const mockBackstagePassDistant = new Item(
  ITEM_NAMES.BACKSTAGE_REFACTOR,
  15,
  20
);
export const mockBackstagePass10Days = new Item(
  ITEM_NAMES.BACKSTAGE_REFACTOR,
  10,
  20
);
export const mockBackstagePass5Days = new Item(
  ITEM_NAMES.BACKSTAGE_REFACTOR,
  5,
  20
);
export const mockBackstagePassExpired = new Item(
  ITEM_NAMES.BACKSTAGE_REFACTOR,
  0,
  20
);
export const mockBackstagePassNearMax = new Item(
  ITEM_NAMES.BACKSTAGE_REFACTOR,
  5,
  49
);
export const mockBackstagePassHAXX = new Item(ITEM_NAMES.BACKSTAGE_HAXX, 5, 20);

// Multi-day simulation items
export const mockMultiDayItems = {
  normalItem: new Item(ITEM_NAMES.RING_OF_CLEANSENING_CODE, 10, 20),
  goodWine: new Item(ITEM_NAMES.GOOD_WINE, 2, 0),
  legendary: new Item(ITEM_NAMES.LEGENDARY, 0, 80),
  backstagePass: new Item(ITEM_NAMES.BACKSTAGE_REFACTOR, 15, 20),
};

// Standard test items (matches text-test-fixture.ts)
export const standardTestItems: Item[] = [
  new Item(ITEM_NAMES.RING_OF_CLEANSENING_CODE, 10, 20),
  new Item(ITEM_NAMES.GOOD_WINE, 2, 0),
  new Item(ITEM_NAMES.ELIXIR_OF_THE_SOLID, 5, 7),
  new Item(ITEM_NAMES.LEGENDARY, 0, 80),
  new Item(ITEM_NAMES.LEGENDARY, -1, 80),
  new Item(ITEM_NAMES.BACKSTAGE_REFACTOR, 15, 20),
  new Item(ITEM_NAMES.BACKSTAGE_REFACTOR, 10, 49),
  new Item(ITEM_NAMES.BACKSTAGE_HAXX, 5, 49),
];
