import { NumbersDontMatch } from "./Exceptions/NumbersDontMatch";

function GetAddensForValue(array: Array<number>, value: number): [number, number] {
    
    for (var i = 0; i < array.length; i++) {
        var number = array[i];

        for (var index = 0; index < array.length; index++) {
            var number2 = array[index];

            if (number + number2 == value) {
                return [number, number2];
            }

        }
    }

    throw new NumbersDontMatch("Any add of the numbers in the array match with the provided value");
}

const array = [2,5,8,14,0];

try {
    let numbers = GetAddensForValue(array, 10);
    console.log(numbers);
} catch (error) {
    if(error instanceof Error) console.log(error.message);
}