import { Item } from "../gilded-rose";
import { AgedBrieQualityUpdater } from "./AgedBrieQualityUpdater";
import { BackstageQualityUpdater } from "./BackstageQualityUpdater";
import { ConjuredQualityUpdater } from "./ConjuredQualityUpdater";
import { DefaultUpdater } from "./DefaultUpdater";
import { SulfurasQualityUpdater } from "./SulfurasQualityUpdater";

export class QualityUpdater {
    private agedUpdater = new AgedBrieQualityUpdater();
    private sulforasUpdater = new SulfurasQualityUpdater();
    private backstageUpdater = new BackstageQualityUpdater();
    private conjuredUpdater = new ConjuredQualityUpdater();
    private defaultUpdater = new DefaultUpdater();


    updateItem(item: Item): void {
        
        switch (item.name) {

            case 'Aged Brie':
                this.agedUpdater.update(item);
                break;
    
            case 'Backstage passes to a TAFKAL80ETC concert':
                this.backstageUpdater.update(item);
                break;

            case 'Sulfuras, Hand of Ragnaros':
                this.sulforasUpdater.update(item);
                break;

            case 'Conjured':
                this.conjuredUpdater.update(item);
                break;

            default:
                this.defaultUpdater.update(item);
                break;
        }
    }
}