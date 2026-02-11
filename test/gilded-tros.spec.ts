import { Item } from "../src/item";
import { GildedTros } from "../src/gilded-tros";
import { ITEM_NAMES } from "../src/item.constants";
import {
  mockNormalItem,
  mockNormalItemExpired,
  mockNormalItemZeroQuality,
  mockGoodWine,
  mockGoodWineExpired,
  mockGoodWineMaxQuality,
  mockLegendaryItem,
  mockLegendaryItemNegativeSellIn,
  mockBackstagePassDistant,
  mockBackstagePass10Days,
  mockBackstagePass5Days,
  mockBackstagePassExpired,
  mockBackstagePassNearMax,
  mockBackstagePassHAXX,
  mockSmellyItemDuplicateCode,
  mockSmellyItemLongMethods,
  mockSmellyItemUglyVariables,
  mockSmellyItemExpired,
  mockSmellyItemZeroQuality,
  mockMultiDayItems,
} from "./gilded-tros.mock";

describe("Gilded Tros", () => {
  describe("Normal Items", () => {
    it("should decrease quality and sellIn by 1 each day", () => {
      const items = [mockNormalItem];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    });

    it("should decrease quality twice as fast after sell by date", () => {
      const items = [mockNormalItemExpired];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(8); // -2 per day after sellIn
    });

    it("should never have negative quality", () => {
      const items = [mockNormalItemZeroQuality];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });

  describe("Good Wine", () => {
    it("should increase in quality as it gets older", () => {
      const items = [mockGoodWine];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(21);
    });

    it("should increase quality twice as fast after sell by date", () => {
      const items = [mockGoodWineExpired];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(22); // +2 per day after sellIn
    });

    it("should never have quality more than 50", () => {
      const items = [mockGoodWineMaxQuality];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].quality).toBe(50);
    });
  });

  describe("B-DAWG Keychain (Legendary)", () => {
    it("should never decrease in quality or sellIn", () => {
      const items = [mockLegendaryItem];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80);
    });

    it("should maintain quality of 80 even with negative sellIn", () => {
      const items = [mockLegendaryItemNegativeSellIn];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);
    });
  });

  describe("Backstage Passes", () => {
    it("should increase in quality as concert approaches", () => {
      const items = [mockBackstagePassDistant];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21); // +1 when > 10 days
    });

    it("should increase by 2 when 10 days or less", () => {
      const items = [mockBackstagePass10Days];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(22); // +2 when 10 days or less
    });

    it("should increase by 3 when 5 days or less", () => {
      const items = [mockBackstagePass5Days];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(23); // +3 when 5 days or less
    });

    it("should drop to 0 after the conference", () => {
      const items = [mockBackstagePassExpired];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });

    it("should work for HAXX conference as well", () => {
      const items = [mockBackstagePassHAXX];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(23); // +3 when 5 days or less
    });

    it("should never exceed quality of 50", () => {
      const items = [mockBackstagePassNearMax];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].quality).toBe(50); // capped at 50
    });
  });

  describe("Smelly Items", () => {
    it("should degrade quality twice as fast for Duplicate Code", () => {
      const items = [mockSmellyItemDuplicateCode];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(18); // -2 per day (twice as fast as normal)
    });

    it("should degrade quality twice as fast for Long Methods", () => {
      const items = [mockSmellyItemLongMethods];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(18); // -2 per day
    });

    it("should degrade quality twice as fast for Ugly Variable Names", () => {
      const items = [mockSmellyItemUglyVariables];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(18); // -2 per day
    });

    it("should degrade four times as fast after sell by date", () => {
      const items = [mockSmellyItemExpired];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(16); // -4 per day (twice as fast as normal expired)
    });

    it("should never have negative quality", () => {
      const items = [mockSmellyItemZeroQuality];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].quality).toBe(0);
    });
  });

  describe("Critical Edge Cases", () => {
    it("backstage pass at exactly 11 days should increase by 1", () => {
      const items = [new Item(ITEM_NAMES.BACKSTAGE_REFACTOR, 11, 20)];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(10);
      expect(items[0].quality).toBe(21); // Only +1, not +2 yet
    });

    it("backstage pass at exactly 6 days should increase by 2", () => {
      const items = [new Item(ITEM_NAMES.BACKSTAGE_REFACTOR, 6, 20)];
      const app = new GildedTros(items);

      app.updateQuality();

      expect(items[0].sellIn).toBe(5);
      expect(items[0].quality).toBe(22); // +2, not +3 yet
    });

    it("quality should never exceed 50 even with multiple increases", () => {
      const items = [new Item(ITEM_NAMES.GOOD_WINE, 10, 48)];
      const app = new GildedTros(items);

      app.updateQuality(); // Should be 49
      app.updateQuality(); // Should be 50
      app.updateQuality(); // Should stay 50

      expect(items[0].quality).toBe(50);
    });

    it("smelly item with quality 1 should go to 0 but not negative", () => {
      const items = [new Item(ITEM_NAMES.DUPLICATE_CODE, 10, 1)];
      const app = new GildedTros(items);

      app.updateQuality(); // -2 degradation, but should stop at 0

      expect(items[0].quality).toBe(0);
    });

    it("empty items array should not crash", () => {
      const items: Item[] = [];
      const app = new GildedTros(items);

      expect(() => app.updateQuality()).not.toThrow();
    });
  });

  describe("Multiple Days Simulation", () => {
    it("should handle complex scenario over multiple days", () => {
      const items = [
        mockMultiDayItems.normalItem,
        mockMultiDayItems.goodWine,
        mockMultiDayItems.legendary,
        mockMultiDayItems.backstagePass,
      ];
      const app = new GildedTros(items);

      // Day 1
      app.updateQuality();
      expect(items[0].quality).toBe(19); // Normal item: -1
      expect(items[1].quality).toBe(1); // Good Wine: +1
      expect(items[2].quality).toBe(80); // Legendary: unchanged
      expect(items[3].quality).toBe(21); // Backstage: +1

      // Day 2
      app.updateQuality();
      expect(items[0].quality).toBe(18);
      expect(items[1].quality).toBe(2);
      expect(items[2].quality).toBe(80);
      expect(items[3].quality).toBe(22);

      // Day 3
      app.updateQuality();
      expect(items[0].quality).toBe(17);
      expect(items[1].quality).toBe(4); // Good Wine now past sellIn, +2
      expect(items[2].quality).toBe(80);
      expect(items[3].quality).toBe(23);
    });
  });
});
