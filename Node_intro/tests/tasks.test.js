const task = require("../tasks")

test("array in alphabetical order", () => {
    expect(task.arr1(['connor', 'ben'])).toEqual(['ben', 'connor'])
});

test("text split up", () => {
    expect(task.splitter("oliver")).toEqual(['o','l','i','v','e','r'])
})

test("in alphabetical order", () => {
    expect(task.cn("codenation")).toEqual("acdeinnoot")
})

test('shorten name to 3 letters', () => {
    expect(task.namCut('benjamin', 3)).toEqual("ben")
})

test('added variable', () => {
    expect(task.fruits(["apple", "pear", "banana"])).toContain("pineapple")
})

test("return longest word", () => {
    expect(task.longestWord('goodbye world')).toEqual("goodbye")
})

test("calculate the possible ages in a give year", () => {
    expect(task.ageCalc(1995, 2022)).toContain("26" && "27")
})

test("return the circumference and area of a circle", () =>{
    expect(task.circle(9)).toContain("56" && "254")
})

test("convert celcius to farenheit", () => {
    expect(task.tempConv(32)).toContain(89.6)
})

test("add up numbers in an array", () => {
    expect(task.sumOf([1,5])).toEqual(15)
})

test('return differences between arrays', () => {
    expect(task.diff(['a', 'b', 'c'], ['a', 'b', 'c', 'd'])).toEqual(["d"])
})