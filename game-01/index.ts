import { NumbersDontMatch } from "./Exceptions/NumbersDontMatch";

function GetAddensForValue(array: Array<number>, value: number): [number, number] {
    
    const list =  new Set<number>(array);

    for (var i = 0; i < array.length; i++) {
         
        var number = array[i];
        const result = value - number;
        const exist = list.has(result);

        if(!exist)
            continue;

        return [number, result];
        }

    throw new NumbersDontMatch("Any add of the numbers in the array match with the provided value");
}


const array = [2, 5, 8, 14, 0];

try {
    let numbers = GetAddensForValue(array, 10);
    console.log(numbers);
} catch (error) {
    if(error instanceof Error) console.log(error.message);
}