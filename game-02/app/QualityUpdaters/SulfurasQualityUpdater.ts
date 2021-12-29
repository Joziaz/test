import { Item } from "../gilded-rose";
import { QualityUpdate, ItemQualityUpdater } from "./QualityUpdater";


export class SulfurasQualityUpdater extends QualityUpdate implements ItemQualityUpdater {

    update(item: Item): void {
        if (item.quality == 80)
            return;

        item.quality = 80;
    }
}
