import { Item } from "../gilded-rose";

export interface ItemQualityUpdater {
    update(item: Item) : void;
}

export class QualityUpdate {

    static calcAddQuality(item:Item, quality:number): number {
        let newQuality = item.quality + quality;

        if (newQuality > 50) {
            newQuality = Math.min(newQuality, 50);
            return newQuality;
        }
        

        if (item.quality < 0) {
            return 0; 
        }

        return newQuality;
    }

}


