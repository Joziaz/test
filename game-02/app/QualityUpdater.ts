import { Item } from "./gilded-rose";

export function updateItemQuality(item: Item) {
    
    switch (item.name) {

        case 'Aged Brie':
            updateAgedBrie(item);
            break;
   
        case 'Backstage passes to a TAFKAL80ETC concert':
            updateBackstage(item);
            break;

        case 'Sulfuras, Hand of Ragnaros':
            updateSulfuras(item);
            break;

        case 'Conjured':
            updateConjured(item);
            break;

        default:
            updateGeneralItem(item);
            break;
    }
}


function updateAgedBrie(item: Item) {
   
    item.sellIn = item.sellIn - 1;

    let qualityCount = 1;

    if (item.sellIn < 0) {
        qualityCount++;
    }

    addQuality(item, qualityCount)
}

function updateSulfuras(item:Item) {
    
    if (item.quality == 80) 
        return;        

    item.quality = 80;
}

function updateBackstage(item: Item) {

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

    addQuality(item, qualityCount);
}

function updateConjured(item: Item) {

    item.sellIn = item.sellIn - 1;

    let qualityCount = -2;

    if (item.sellIn < 0) {
        qualityCount -= 2;
    }

    addQuality(item, qualityCount);
}

function updateGeneralItem(item: Item) {

    item.sellIn = item.sellIn - 1;

    let qualityCount = -1;

    if (item.sellIn < 0) {
        qualityCount--;
    }

    addQuality(item, qualityCount);
}

function addQuality(item:Item, quality:number) {
    item.quality += quality;

    if (item.quality > 50) {
        item.quality = Math.min(item.quality, 50);
        return;
    }

    if (item.quality < 0) {
        item.quality = 0;
        return; 
    }
}

