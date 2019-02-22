const app = require("../app")

test('should equal 11 when passed 5 and 6', () => {
    expect(app.add(5, 6)).toEqual(11)
})  