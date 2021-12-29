import { Item } from "../gilded-rose";
import { QualityUpdate, ItemQualityUpdater } from "./QualityUpdater";


export class BackstageQualityUpdater implements ItemQualityUpdater {

    update(item: Item): void {
        item.sellIn = item.sellIn - 1;

        if (item.sellIn < 0) {
            item.quality = 0;
            return;
        }

        let qualityCount = 1;

        if (item.sellIn < 11)
            qualityCount++;

        if (item.sellIn < 6)
            qualityCount++;

        item.quality = QualityUpdate.calcAddQuality(item, qualityCount);
    }

}
