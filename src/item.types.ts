import { ITEM_NAMES } from "./item.constants";

type ItemName = (typeof ITEM_NAMES)[keyof typeof ITEM_NAMES];

export { ItemName };
