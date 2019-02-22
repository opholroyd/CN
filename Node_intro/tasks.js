const _ = require("lodash")

const arr1 = (array1) => {
    return array1.sort();
}
// arr1(['oliver', 'jacob', 'connor', 'kieran', 'ben']);

const splitter = (name) => {
    return name.split("");
}
// splitter()

const cn = (word) => {
    let codeN = word.split("").sort().join("");
    return codeN;
}
// cn("codenation")

const namCut = (name, letters) => {
    return name.slice(0, letters);
}

// namCut('Kieran', 5)

const fruits = (arr1) => {
     arr1.push("pineapple");
     return arr1
}
// fruits(["apple", "pear", "banana"]);

const longestWord = (txt) => {
    let splitWord = txt.split(" ")
    if (splitWord[0].length > splitWord[1].length) {
        return splitWord[0]
    }
        return splitWord[1]
}
// longestWord("goodbye world")

const ageCalc = (birth, future) => {
    let calc = (future - birth);
    return `I will be ${calc} or ${calc+1} in ${future}`;
}
// ageCalc(1995, 2022)

const circle = (radius) => {
    let circum = (2 * radius * Math.PI)
    let area = (radius* radius * Math.PI)
    return `the circumference is ${circum} and the area is ${area}`
}
// circle(5)

const tempConv = (temp) => {
    let conversion = (temp*9/5+32); 
    return `${temp}°C is ${conversion}°F`
}
// tempConv(32)

const sumOf = (numArray) => {
    let total = 0
    for(i = numArray[0]; i<=numArray[1]; i++){
        total += i
    }
    return total
}
// sumOf([1, 5])

const diff = (firstArray, secondArray) => {
   return _.xor(firstArray, secondArray)
}
diff(['a', 'b', 'c'], ['a', 'b', 'c', 'd'])

module.exports = {
    diff, arr1, splitter, cn, namCut, fruits, ageCalc, circle, tempConv, sumOf, longestWord
};