import { Item } from "./item";
import { ITEM_NAMES } from "./item.constants";

// Quality bounds
const QUALITY = {
  MIN: 0,
  MAX: 50,
  LEGENDARY: 80,
} as const;

export class GildedTros {
  constructor(public items: Item[]) {}

  // Main method to update the quality of the items
  public updateQuality() {
    this.items.forEach((item) => {
      this.updateItemQuality(item);
      this.updateSellIn(item);
      this.applyExpiredEffect(item);
    });
  }

  // Update the quality of the item
  private updateItemQuality(item: Item) {
    if (this.isLegendary(item)) return;

    // Good wine increases in quality the older it gets
    if (this.isGoodWine(item)) {
      this.increaseQuality(item);
      return;
    }

    // Backstage passes increase in quality as the sellIn value approaches
    if (this.isBackstagePass(item)) {
      this.updateBackstagePassQuality(item);
      return;
    }

    // Normal items degrade in quality
    this.decreaseQuality(item);
  }

  // Update the quality of the backstage pass
  private updateBackstagePassQuality(item: Item) {
    // Increase quality by 1 for all backstage passes
    this.increaseQuality(item);

    // Additional +1 when sellIn <= 10 (cumulative: +2 total)
    if (item.sellIn <= 10) {
      this.increaseQuality(item);
    }

    // Additional +1 when sellIn <= 5 (cumulative: +3 total)
    if (item.sellIn <= 5) {
      this.increaseQuality(item);
    }
  }

  // Update the sellIn of the item
  private updateSellIn(item: Item) {
    // Decrease sellIn by 1 for all items except legendary items
    if (!this.isLegendary(item)) {
      item.sellIn--;
    }
  }

  // Apply the expired effect to the item
  private applyExpiredEffect(item: Item) {
    // If the item is not expired, do nothing
    if (item.sellIn >= 0) return;

    // If the item is legendary, do nothing
    if (this.isLegendary(item)) return;

    // Good wine increases in quality the older it gets
    if (this.isGoodWine(item)) {
      this.increaseQuality(item);
      return;
    }

    // Backstage passes drop to 0 quality after the event
    if (this.isBackstagePass(item)) {
      item.quality = QUALITY.MIN;
      return;
    }

    // Normal items degrade twice as fast after expiration
    this.decreaseQuality(item);
  }

  // Helper methods for item type identification
  // Note: Using `typeof` for type narrowing because Item.name must remain 'string' type per requirements
  // If Item class could be modified, these would be simpler: `item is Item & { name: ItemName.LEGENDARY }`
  private isLegendary(
    item: Item
  ): item is Item & { name: typeof ITEM_NAMES.LEGENDARY } {
    return item.name === ITEM_NAMES.LEGENDARY;
  }

  private isGoodWine(
    item: Item
  ): item is Item & { name: typeof ITEM_NAMES.GOOD_WINE } {
    return item.name === ITEM_NAMES.GOOD_WINE;
  }

  private isBackstagePass(
    item: Item
  ): item is Item & {
    name:
      | typeof ITEM_NAMES.BACKSTAGE_REFACTOR
      | typeof ITEM_NAMES.BACKSTAGE_HAXX;
  } {
    return (
      item.name === ITEM_NAMES.BACKSTAGE_REFACTOR ||
      item.name === ITEM_NAMES.BACKSTAGE_HAXX
    );
  }

  // Quality manipulation methods
  private increaseQuality(item: Item, amount: number = 1) {
    item.quality = Math.min(item.quality + amount, QUALITY.MAX);
  }

  private decreaseQuality(item: Item, amount: number = 1) {
    item.quality = Math.max(item.quality - amount, QUALITY.MIN);
  }
}
