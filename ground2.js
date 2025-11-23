// The Double Trouble: You are tasked with writing a function that doubles each element in an array.
//  However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleUniqueElements(arr) {
    const result = [];  
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i] * 2);
        }
    }
    return result;
}

// Example usage:
const inputArray = [0,1, 2, 2, 3, 4, 4, 4, 5];
const doubledArray = doubleUniqueElements(inputArray);
console.log(doubledArray); 



// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. 
// Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
    const reversedStr = str.split('').reverse().join('');
    return str + reversedStr;
}

// Example usage:
const originalString = "oppenheimer";
const mirrored = mirrorString(originalString);
console.log(mirrored);  