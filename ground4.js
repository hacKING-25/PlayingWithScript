
// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. 
// Consider both uppercase and lowercase vowels.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
const testString = "Education is the most powerful weapon which you can use to change the world.";
const vowelCount = countVowels(testString);
console.log(vowelCount);