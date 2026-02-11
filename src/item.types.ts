import { ITEM_NAMES } from "./item.constants";

export type ItemName = (typeof ITEM_NAMES)[keyof typeof ITEM_NAMES];
