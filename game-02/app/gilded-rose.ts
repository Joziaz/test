import { QualityUpdater } from "./QualityUpdaters/QualityUpdaterHandler";

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
    qualityUpdater : QualityUpdater

    constructor(items = [] as Array<Item>, qualityUpdater: QualityUpdater) {
        this.items = items;
        this.qualityUpdater = qualityUpdater;
    }

    updateQuality() : Item[]{

        for (let i = 0; i < this.items.length; i++) {

            const item = this.items[i];
            this.qualityUpdater.updateItem(item);
        }

        return this.items;
    }
}
