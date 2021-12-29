import { Item } from "../gilded-rose";
import { QualityUpdate, ItemQualityUpdater } from "./QualityUpdater";


export class ConjuredQualityUpdater implements ItemQualityUpdater {

    update(item: Item): void {
        item.sellIn = item.sellIn - 1;

        let qualityCount = -2;

        if (item.sellIn < 0) {
            qualityCount -= 2;
        }

        item.quality = QualityUpdate.calcAddQuality(item, qualityCount);
    }

}
