import { updateItemQuality } from "./QualityUpdater";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() : Item[]{

        for (let i = 0; i < this.items.length; i++) {

            const item = this.items[i];
            updateItemQuality(item);
        }

        return this.items;
    }
}
