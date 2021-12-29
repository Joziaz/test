import { Item } from "../gilded-rose";
import { QualityUpdate, ItemQualityUpdater } from "./QualityUpdater";


export class AgedBrieQualityUpdater implements ItemQualityUpdater {

    update(item: Item): void {

        item.sellIn = item.sellIn - 1;

        let qualityCount = 1;

        if (item.sellIn < 0) {
            qualityCount++;
        }

        item.quality = QualityUpdate.calcAddQuality(item, qualityCount);
    }
}
