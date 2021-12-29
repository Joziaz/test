import { Item } from "../gilded-rose";
import { ItemQualityUpdater, QualityUpdate } from "./QualityUpdater";


export class DefaultUpdater implements ItemQualityUpdater {

    update(item: Item): void {
        item.sellIn = item.sellIn - 1;

        let qualityCount = -1;

        if (item.sellIn < 0) {
            qualityCount--;
        }

        item.quality = QualityUpdate.calcAddQuality(item, qualityCount);
    }
}
