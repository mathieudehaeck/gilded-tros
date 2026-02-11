import { GildedTros } from "../src/gilded-tros";
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
  mockMultiDayItems,
} from "./fixtures.mock";

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
